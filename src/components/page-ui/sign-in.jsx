"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Leaf } from "lucide-react"

export default function SignInPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // Get redirect URL safely
    const redirectUrl = searchParams.get('redirect') || "/"

    useEffect(() => {
        // Check for token and redirect if exists
        const token = localStorage.getItem('ashramUserToken')
        if (token) {
            router.push(redirectUrl)
        }
    }, [router, redirectUrl])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL
            const response = await fetch(`${baseUrl}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                localStorage.setItem('ashramUserToken', data.token)
                toast.success("Signed in successfully!")
                router.push(redirectUrl)
            } else {
                toast.error(data.message || "Sign in failed")
            }
        } catch (error) {
            console.error('Sign in error:', error)
            toast.error("Error signing in")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Inject Tailwind + theme variables into page only */}
            <style jsx global>{`
                @import "tailwindcss";
                @import "tw-animate-css";

                @custom-variant dark (&:is(.dark *));

                :root {
                    --background: oklch(0.98 0.01 85);
                    --foreground: oklch(0.25 0.02 45);
                    --card: oklch(1 0 0);
                    --card-foreground: oklch(0.25 0.02 45);
                    --popover: oklch(1 0 0);
                    --popover-foreground: oklch(0.25 0.02 45);
                    --primary: oklch(0.45 0.08 35);
                    --primary-foreground: oklch(0.98 0.01 85);
                    --secondary: oklch(0.92 0.02 75);
                    --secondary-foreground: oklch(0.25 0.02 45);
                    --muted: oklch(0.95 0.01 75);
                    --muted-foreground: oklch(0.5 0.02 45);
                    --accent: oklch(0.72 0.12 65);
                    --accent-foreground: oklch(0.98 0.01 85);
                    --destructive: oklch(0.577 0.245 27.325);
                    --destructive-foreground: oklch(0.98 0.01 85);
                    --border: oklch(0.88 0.01 75);
                    --input: oklch(0.88 0.01 75);
                    --ring: oklch(0.45 0.08 35);
                    --chart-1: oklch(0.646 0.222 41.116);
                    --chart-2: oklch(0.6 0.118 184.704);
                    --chart-3: oklch(0.398 0.07 227.392);
                    --chart-4: oklch(0.828 0.189 84.429);
                    --chart-5: oklch(0.769 0.188 70.08);
                    --radius: 0.5rem;
                    --sidebar: oklch(0.985 0 0);
                    --sidebar-foreground: oklch(0.145 0 0);
                    --sidebar-primary: oklch(0.205 0 0);
                    --sidebar-primary-foreground: oklch(0.985 0 0);
                    --sidebar-accent: oklch(0.97 0 0);
                    --sidebar-accent-foreground: oklch(0.205 0 0);
                    --sidebar-border: oklch(0.922 0 0);
                    --sidebar-ring: oklch(0.708 0 0);
                }

                .dark {
                    --background: oklch(0.145 0 0);
                    --foreground: oklch(0.985 0 0);
                    --card: oklch(0.145 0 0);
                    --card-foreground: oklch(0.985 0 0);
                    --popover: oklch(0.145 0 0);
                    --popover-foreground: oklch(0.985 0 0);
                    --primary: oklch(0.985 0 0);
                    --primary-foreground: oklch(0.205 0 0);
                    --secondary: oklch(0.269 0 0);
                    --secondary-foreground: oklch(0.985 0 0);
                    --muted: oklch(0.269 0 0);
                    --muted-foreground: oklch(0.708 0 0);
                    --accent: oklch(0.269 0 0);
                    --accent-foreground: oklch(0.985 0 0);
                    --destructive: oklch(0.396 0.141 25.723);
                    --destructive-foreground: oklch(0.637 0.237 25.331);
                    --border: oklch(0.269 0 0);
                    --input: oklch(0.269 0 0);
                    --ring: oklch(0.439 0 0);
                    --chart-1: oklch(0.488 0.243 264.376);
                    --chart-2: oklch(0.696 0.17 162.48);
                    --chart-3: oklch(0.769 0.188 70.08);
                    --chart-4: oklch(0.627 0.265 303.9);
                    --chart-5: oklch(0.645 0.246 16.439);
                    --sidebar: oklch(0.205 0 0);
                    --sidebar-foreground: oklch(0.985 0 0);
                    --sidebar-primary: oklch(0.488 0.243 264.376);
                    --sidebar-primary-foreground: oklch(0.985 0 0);
                    --sidebar-accent: oklch(0.269 0 0);
                    --sidebar-accent-foreground: oklch(0.985 0 0);
                    --sidebar-border: oklch(0.269 0 0);
                    --sidebar-ring: oklch(0.439 0 0);
                }

                @theme inline {
                    --font-sans: var(--font-geist-sans);
                    --font-mono: var(--font-geist-mono);
                    --color-background: var(--background);
                    --color-foreground: var(--foreground);
                    --color-card: var(--card);
                    --color-card-foreground: var(--card-foreground);
                    --color-popover: var(--popover);
                    --color-popover-foreground: var(--popover-foreground);
                    --color-primary: var(--primary);
                    --color-primary-foreground: var(--primary-foreground);
                    --color-secondary: var(--secondary);
                    --color-secondary-foreground: var(--secondary-foreground);
                    --color-muted: var(--muted);
                    --color-muted-foreground: var(--muted-foreground);
                    --color-accent: var(--accent);
                    --color-accent-foreground: var(--accent-foreground);
                    --color-destructive: var(--destructive);
                    --color-destructive-foreground: var(--destructive-foreground);
                    --color-border: var(--border);
                    --color-input: var(--input);
                    --color-ring: var(--ring);
                    --color-chart-1: var(--chart-1);
                    --color-chart-2: var(--chart-2);
                    --color-chart-3: var(--chart-3);
                    --color-chart-4: var(--chart-4);
                    --color-chart-5: var(--chart-5);
                    --radius-sm: calc(var(--radius) - 4px);
                    --radius-md: calc(var(--radius) - 2px);
                    --radius-lg: var(--radius);
                    --radius-xl: calc(var(--radius) + 4px);
                    --color-sidebar: var(--sidebar);
                    --color-sidebar-foreground: var(--sidebar-foreground);
                    --color-sidebar-primary: var(--sidebar-primary);
                    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
                    --color-sidebar-accent: var(--sidebar-accent);
                    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
                    --color-sidebar-border: var(--sidebar-border);
                    --color-sidebar-ring: var(--sidebar-ring);
                }

                @layer base {
                    * {
                        @apply border-border outline-ring/50;
                    }
                    body {
                        @apply bg-background text-foreground;
                    }
                }
            `}</style>

            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-md border-2 border-primary/10 shadow-lg">
                    <CardHeader className="text-center space-y-4">
                        <CardTitle className="text-2xl font-serif font-semibold text-foreground">Welcome Back</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Sign in to continue your spiritual journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSignIn} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-serif cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Signing in...
                                    </>
                                ) : "Sign In"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Button
                                    variant="link"
                                    className="p-0 text-primary font-medium cursor-pointer"
                                    onClick={() => router.push('/signup')}
                                >
                                    Begin your journey
                                </Button>
                            </p>
                        </div>

                        <div className="mt-1 p-2 bg-secondary/30 rounded-lg text-center flex items-center justify-start">
                            <Leaf className="w-5 h-5 text-accent mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground italic">
                                "Enter with an open heart, leave with a peaceful mind"
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}