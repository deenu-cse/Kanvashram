"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle2 } from "lucide-react"

// Load Razorpay script
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

const categories = [
  { value: "foreigner", label: "Foreigner", price: 500, currency: "USD", display: "$500 USD" },
  { value: "indian", label: "Indian", price: 21000, currency: "INR", display: "₹21,000" },
  { value: "student", label: "Student", price: 11000, currency: "INR", display: "₹11,000" },
]

export default function RegistrationForm({ onSuccess, onTermsClick }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    category: "indian",
    termsAccepted: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const selectedCategory = categories.find((c) => c.value === formData.category)
  const price = selectedCategory ? selectedCategory.display || `${selectedCategory.price} ${selectedCategory.currency}` : "Select category"

  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required"
    if (!formData.country.trim()) newErrors.country = "Country is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.category) newErrors.category = "Please select a category"
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const processRazorpayPayment = async (orderData) => {
    const res = await loadRazorpay()
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return false
    }

    const options = {
      key: orderData.key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: 'Spiritual Retreat',
      description: 'Event Registration',
      order_id: orderData.order.id,
      handler: async function (response) {
        try {
          const verifyResponse = await fetch(`${baseUrl}/registrations/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })

          const verification = await verifyResponse.json()

          if (verification.success) {
            setPaymentSuccess(true)
            onSuccess({
              ...formData,
              transactionId: verification.registration.transactionId,
              price: selectedCategory.price,
              currency: selectedCategory.currency,
            })

            setTimeout(() => {
              setFormData({
                fullName: "",
                email: "",
                country: "",
                phone: "",
                category: "indian",
                termsAccepted: false,
              })
              setPaymentSuccess(false)
              setIsSubmitting(false)
            }, 2000)
          } else {
            alert('Payment verification failed: ' + verification.message)
            setIsSubmitting(false)
          }
        } catch (error) {
          console.error('Payment verification error:', error)
          alert('Payment verification failed. Please contact support.')
          setIsSubmitting(false)
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        category: formData.category,
      },
      theme: {
        color: '#6d28d9',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch(`${baseUrl}/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        await processRazorpayPayment(data)
      } else {
        alert('Registration failed: ' + data.message)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (paymentSuccess) {
    return (
      <section id="registration-form" className="py-6 md:py-6 px-6 md:px-12 max-w-2xl mx-auto">
        <Card className="p-12 text-center border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="font-serif text-3xl text-foreground mb-3">Payment Successful!</h3>
          <p className="text-muted-foreground mb-6">
            Your registration has been confirmed. Check your email for the ticket details.
          </p>
          <p className="text-sm text-muted-foreground">Redirecting to ticket...</p>
        </Card>
      </section>
    )
  }

  return (
    <section id="registration-form" className="py-20 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Secure Your Seat</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-4">Registration Form</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Join us for a transformative 7-day spiritual retreat.</p>
      </div>

      <Card className="sacred-border">
        <CardHeader>
          <CardTitle className="text-2xl">Event Registration</CardTitle>
          <CardDescription>Fill in your details below to proceed to payment.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Personal Information</h3>

              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value })
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }))
                  }}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }))
                    }}
                    placeholder="your@email.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }))
                    }}
                    placeholder="+91 XXXXX XXXXX"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Participant Category */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Participant Category</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <label
                    key={cat.value}
                    className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                    style={{
                      borderColor: formData.category === cat.value ? "var(--primary)" : undefined,
                      backgroundColor: formData.category === cat.value ? "var(--muted)" : undefined,
                    }}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat.value}
                      checked={formData.category === cat.value}
                      onChange={() => {
                        setFormData({ ...formData, category: cat.value })
                        if (errors.category) setErrors((prev) => ({ ...prev, category: "" }))
                      }}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-semibold capitalize">{cat.label}</p>
                      <p className="text-sm text-muted-foreground">{cat.display || `${cat.price} ${cat.currency}`}</p>
                    </div>
                  </label>
                ))}
              </div>

              {errors.category && <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.category}</p>}
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Location</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value })
                      if (errors.country) setErrors((prev) => ({ ...prev, country: "" }))
                    }}
                    placeholder="Your country"
                    className={errors.country ? "border-red-500" : ""}
                  />
                  {errors.country && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.country}</p>}
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold">Total Amount:</span>
                      <span className="text-2xl font-bold text-primary">{price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Terms & Conditions</h3>

              <div className="max-h-48 overflow-y-auto text-sm text-muted-foreground space-y-3 mb-4">
                <p>
                  <strong>1. Retreat Participation:</strong> By registering, you agree to participate in all scheduled activities as per the retreat schedule.
                </p>
                <p>
                  <strong>2. Health & Safety:</strong> Participants must be in good physical and mental health. Inform us of any medical conditions or allergies.
                </p>
                <p>
                  <strong>3. Code of Conduct:</strong> Maintain respectful behavior and follow ashram rules.
                </p>
                <p>
                  <strong>4. Cancellation Policy:</strong> Cancellations made 30 days before the retreat will receive a full refund.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => {
                    setFormData({ ...formData, termsAccepted: checked })
                    if (errors.termsAccepted) setErrors((prev) => ({ ...prev, termsAccepted: "" }))
                  }}
                />
                <label htmlFor="terms" className="text-sm cursor-pointer">
                  I have read and agree to the Terms & Conditions and Privacy Policy *
                </label>
                <button type="button" onClick={onTermsClick} className="ml-auto text-primary hover:underline font-semibold">
                  Read full terms
                </button>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.termsAccepted}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
            >
              {isSubmitting ? "Processing Payment..." : "Proceed to Payment"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
