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
import { AlertCircle, CheckCircle2, QrCode, Upload, Banknote, Calendar, Phone } from "lucide-react"

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

  const [screenshot, setScreenshot] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1) // 1: Form, 2: Payment, 3: Success
  const [registrationId, setRegistrationId] = useState(null)

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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch(`${baseUrl}/user/qr-payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setRegistrationId(data.data.transactionId)
        setStep(2) 
      } else {
        alert('Registration failed: ' + data.message)
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleScreenshotUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setScreenshot(file)
  }

  const submitPayment = async () => {
    if (!screenshot) {
      alert('Please upload payment screenshot')
      return
    }

    setIsSubmitting(true)
    setUploadProgress(0)

    try {
      const formData = new FormData()
      formData.append('screenshot', screenshot)

      const xhr = new XMLHttpRequest()
      
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100
          setUploadProgress(percentComplete)
        }
      })

      const uploadPromise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(new Error('Upload failed'))
          }
        })
        xhr.addEventListener('error', () => reject(new Error('Upload failed')))
      })

      xhr.open('POST', `${baseUrl}/user/qr-payments/${registrationId}/upload`)
      xhr.send(formData)

      const result = await uploadPromise

      if (result.success) {
        setStep(3) 
        onSuccess({
          ...formData,
          transactionId: result.data.transactionId,
          price: selectedCategory.price,
          currency: selectedCategory.currency,
          status: 'pending'
        })
      } else {
        alert('Payment submission failed: ' + result.message)
      }
    } catch (error) {
      console.error('Payment submission error:', error)
      alert('Payment submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  const BankDetails = () => (
    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Banknote className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-primary">Bank Transfer Details</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <Label className="text-xs text-muted-foreground">Bank Name</Label>
          <p className="font-medium">State Bank of India</p>
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Branch</Label>
          <p className="font-medium">Kotdwara, Devi Road</p>
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Account Number</Label>
          <p className="font-medium">10568398170</p>
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">IFSC Code</Label>
          <p className="font-medium">SBIN0000585</p>
        </div>
        <div className="md:col-span-2">
          <Label className="text-xs text-muted-foreground">Account Holder</Label>
          <p className="font-medium">[Your Organization Name]</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Please include your Transaction ID <strong>{registrationId}</strong> in the payment remarks/reference.
        </p>
      </div>
    </div>
  )

  const QrSection = () => (
    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <QrCode className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-primary">Scan QR Code to Pay</h3>
      </div>
      
      <div className="bg-white p-4 rounded-lg inline-block mb-4">
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
          <img src="/qrcode.jpg" alt="Payment QR Code" className="w-full h-full" />
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Scan this QR code with your banking app to make payment
      </p>
    </div>
  )

  const ImportantNotice = () => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-blue-700">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Last Date for Registration:</span>
            <span className="text-sm">20 November 2025</span>
          </div>
          <div className="flex items-center gap-2 text-blue-700">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-semibold">Registration Help:</span>
            <span className="text-sm">+91 98371 62511</span>
          </div>
        </div>
      </div>
    </div>
  )

  if (step === 1) {
    return (
      <section id="registration-form" className="py-20 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Secure Your Seat</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-4">Registration Form</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Join us for a transformative 7-day spiritual retreat.</p>
        </div>

        <ImportantNotice />

        <Card className="sacred-border">
          <CardHeader>
            <CardTitle className="text-2xl">Event Registration</CardTitle>
            <CardDescription>Fill in your details below to proceed to payment.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                  <p>
                    <strong>5. Registration Deadline:</strong> Last date for registration is 20 November 2025. Late registrations may not be accepted.
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">Need Help with Registration?</span>
                </div>
                <p className="text-sm text-blue-700">
                  Contact us at: <strong>+91 XXXXX XXXXX</strong> for any difficulties during registration process.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
              >
                {isSubmitting ? "Creating Registration..." : "Proceed to Payment"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    )
  }

  if (step === 2) {
    return (
      <section id="payment-section" className="py-20 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Complete Your Payment</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-4">Payment Details</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Make payment using QR code or bank transfer and upload screenshot</p>
        </div>

        <ImportantNotice />

        <Card className="sacred-border">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Instructions</CardTitle>
            <CardDescription>Complete your payment using one of the methods below</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <QrSection />

            <BankDetails />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Upload Payment Proof</h3>
              
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotUpload}
                  className="hidden"
                  id="screenshot-upload"
                />
                
                {!screenshot ? (
                  <label htmlFor="screenshot-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Upload Payment Screenshot</p>
                    <p className="text-muted-foreground text-sm">
                      Click to upload screenshot of your payment confirmation (Max: 5MB)
                    </p>
                  </label>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Screenshot selected: {screenshot.name}</span>
                    </div>
                    
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    )}
                    
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={submitPayment}
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Payment"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setScreenshot(null)}
                        disabled={isSubmitting}
                      >
                        Change File
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Payment Issues?</span>
              </div>
              <p className="text-sm text-blue-700">
                Contact us at: <strong>+91 XXXXX XXXXX</strong> for any payment-related difficulties.
              </p>
            </div>

            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="w-full"
            >
              Back to Registration
            </Button>
          </CardContent>
        </Card>
      </section>
    )
  }

  if (step === 3) {
    return (
      <section id="registration-form" className="py-6 md:py-6 px-4 md:px-12 max-w-2xl mx-auto">
        <Card className="p-4 text-center border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="font-serif text-3xl text-foreground mb-3">Payment Submitted Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Your payment screenshot has been submitted and is under verification. 
            You will receive a confirmation email shortly. Once verified, your event pass will be sent to your email.
          </p>
          <div className="bg-primary/10 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold">Transaction ID: {registrationId}</p>
          </div>
          <p className="text-sm text-muted-foreground">Verification typically takes 24-48 hours.</p>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-blue-700 mb-2">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Need Assistance?</span>
            </div>
            <p className="text-sm text-blue-700">
              Contact us at: <strong>+91 XXXXX XXXXX</strong> for any queries regarding your registration.
            </p>
          </div>
        </Card>
      </section>
    )
  }
}