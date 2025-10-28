"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle, Clock, XCircle, Mail, Copy, RefreshCw } from "lucide-react"

export default function PaymentTracker() {
    const [transactionId, setTransactionId] = useState("")
    const [loading, setLoading] = useState(false)
    const [paymentData, setPaymentData] = useState(null)
    const [error, setError] = useState("")

    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    const trackPayment = async (e) => {
        e.preventDefault()
        
        if (!transactionId.trim()) {
            setError("Please enter your Transaction ID")
            return
        }

        setLoading(true)
        setError("")
        setPaymentData(null)

        try {
            const response = await fetch(`${baseUrl}/user/track-payment/${transactionId.trim()}`)
            const data = await response.json()

            if (data.success) {
                setPaymentData(data.data)
            } else {
                setError(data.message || "No registration found with this Transaction ID")
            }
        } catch (error) {
            console.error('Tracking error:', error)
            setError("Failed to track payment. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard!')
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-600" />
            case 'verified':
                return <CheckCircle className="w-5 h-5 text-blue-600" />
            case 'pending':
                return <Clock className="w-5 h-5 text-yellow-600" />
            case 'rejected':
                return <XCircle className="w-5 h-5 text-red-600" />
            default:
                return <Clock className="w-5 h-5 text-gray-600" />
        }
    }

    const getStatusBadge = (status) => {
        const variants = {
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
            verified: "bg-blue-100 text-blue-800 border-blue-200",
            completed: "bg-green-100 text-green-800 border-green-200",
            rejected: "bg-red-100 text-red-800 border-red-200"
        }
        return (
            <Badge variant="outline" className={`${variants[status]} font-semibold`}>
                {getStatusIcon(status)}
                <span className="ml-1 capitalize">{status}</span>
            </Badge>
        )
    }

    const getStatusMessage = (status) => {
        const messages = {
            pending: "Your payment is under verification. Our team will verify it within 24-48 hours.",
            verified: "Your payment has been verified! Your event pass will be sent to you shortly.",
            completed: "Your registration is complete! Your event pass has been sent to your email.",
            rejected: "Your payment verification failed. Please contact support for assistance."
        }
        return messages[status] || "Checking your payment status..."
    }

    const resetSearch = () => {
        setTransactionId("")
        setPaymentData(null)
        setError("")
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-1 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Track Your Payment
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Enter your Transaction ID to check your payment status and registration details
                    </p>
                </div>

                {/* Search Card */}
                <Card className="sacred-border mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Search className="w-6 h-6" />
                            Find Your Registration
                        </CardTitle>
                        <CardDescription>
                            Enter the Transaction ID you received during registration
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={trackPayment} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="transactionId" className="text-sm font-medium">
                                    Transaction ID *
                                </label>
                                <Input
                                    id="transactionId"
                                    type="text"
                                    placeholder="e.g., TXN123456789"
                                    value={transactionId}
                                    onChange={(e) => setTransactionId(e.target.value)}
                                    className="w-full"
                                    disabled={loading}
                                />
                            </div>
                            
                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}

                            <Button 
                                type="submit" 
                                disabled={loading || !transactionId.trim()}
                                className="w-full bg-primary hover:bg-primary/90"
                            >
                                {loading ? (
                                    <>
                                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                        Tracking...
                                    </>
                                ) : (
                                    <>
                                        <Search className="w-4 h-4 mr-2" />
                                        Track Payment
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Results */}
                {paymentData && (
                    <Card className="sacred-border">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-2xl">
                                        Registration Details
                                    </CardTitle>
                                    <CardDescription>
                                        Here's your current registration status
                                    </CardDescription>
                                </div>
                                {getStatusBadge(paymentData.status)}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Status Message */}
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-start gap-3">
                                    {getStatusIcon(paymentData.status)}
                                    <div>
                                        <p className="font-semibold text-blue-800">
                                            {getStatusMessage(paymentData.status)}
                                        </p>
                                        {paymentData.status === 'pending' && (
                                            <p className="text-blue-700 text-sm mt-1">
                                                You will receive an email once your payment is verified.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Registration Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg border-b pb-2">
                                        Personal Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Full Name
                                            </label>
                                            <p className="font-semibold">{paymentData.fullName}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Email
                                            </label>
                                            <p className="font-semibold">{paymentData.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Category
                                            </label>
                                            <p className="font-semibold capitalize">{paymentData.category}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg border-b pb-2">
                                        Payment Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Transaction ID
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <p className="font-mono font-semibold bg-gray-100 px-3 py-1 rounded text-sm">
                                                    {paymentData.transactionId}
                                                </p>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => copyToClipboard(paymentData.transactionId)}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Copy className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Amount Paid
                                            </label>
                                            <p className="font-semibold text-xl text-primary">
                                                {paymentData.currency === 'USD' ? '$' : '₹'}{paymentData.amount}
                                            </p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Registration Date
                                            </label>
                                            <p className="font-semibold">
                                                {new Date(paymentData.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Pass Information */}
                            {paymentData.eventPassSent && paymentData.eventPassCode && (
                                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Mail className="w-5 h-5 text-green-600" />
                                        <h4 className="font-semibold text-green-800 text-lg">
                                            Event Pass Sent!
                                        </h4>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-green-700">
                                            Your event pass has been sent to your email address.
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-green-800">
                                                Pass Code:
                                            </span>
                                            <code className="bg-white px-3 py-1 rounded border border-green-300 font-mono font-bold text-green-900">
                                                {paymentData.eventPassCode}
                                            </code>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => copyToClipboard(paymentData.eventPassCode)}
                                                className="h-8 w-8 p-0"
                                            >
                                                <Copy className="w-3 h-3" />
                                            </Button>
                                        </div>
                                        <p className="text-sm text-green-600">
                                            Please keep this code safe for event entry.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Support Information */}
                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Need Help?
                                </h4>
                                <p className="text-sm text-gray-600">
                                    If you have any questions or need assistance with your registration, 
                                    please contact our support team at{" "}
                                    <strong>support@gurukulkanvashram.com</strong>
                                </p>
                            </div>

                            {/* Search Again Button */}
                            <div className="flex justify-center pt-4">
                                <Button
                                    variant="outline"
                                    onClick={resetSearch}
                                    className="border-primary text-primary hover:bg-primary hover:text-white"
                                >
                                    Search Another Transaction
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}