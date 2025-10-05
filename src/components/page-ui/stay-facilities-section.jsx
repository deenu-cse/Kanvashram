"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const mealSchedule = [
    { title: "Morning Prasad", time: "6:30 AM", note: "Herbal teas & seasonal fruits to awaken prana." },
    {
        title: "Midday Sattvik Bhojan",
        time: "12:30 PM",
        note: "Freshly harvested grains, vegetables, and healing spices.",
    },
    { title: "Evening Annadanam", time: "7:30 PM", note: "Light kitchari, nourishing soups, and sacred chants." },
]

const amenities = [
    "Meditation halls infused with Himalayan resonance",
    "Vedic library with scriptures & contemplative journals",
    "Sacred gardens and biodynamic organic farms",
    "Private access to the Ganga ghat for sunrise arati",
    "Daily satsang, kirtan, and pranayama gatherings",
]

export const StayFacilitiesSection = () => {
    return (
        <section className="relative overflow-hidden rounded-[1.75rem] border border-border/70 p-3 shadow-[0_24px_80px_rgba(50,47,41,0.18)] md:p-5 bg-gradient-to-b from-[#F2F2EB] to-[#F8F8F2]">
            <LotusAura />
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:items-start">
                <article className="relative z-10 flex flex-col gap-10">
                    <header className="space-y-4">
                        <div className="space-y-3">
                            <h1 className="font-serif text-balance text-4xl leading-tight md:text-5xl lg:text-6xl text-[#88734C]">
                                Stay &amp; Facilities
                            </h1>
                            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                                Embrace stillness within our Himalayan ashram—minimal comforts, mindful routines, and spaces that honour
                                the breath of the Ganga.
                            </p>
                        </div>
                    </header>

                    <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
                        <div className="space-y-8">

                            <section className="space-y-5 rounded-[1.25rem] border border-[#e2d5c1]/70 bg-background/70 p-6 backdrop-blur">
                                <h3 className="font-serif text-xl text-foreground">Sattvik Meal Rhythm</h3>
                                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/70">
                                    Mindfully prepared each day
                                </p>
                                <dl className="mt-4 space-y-4">
                                    {mealSchedule.map((entry) => (
                                        <div key={entry.title} className="grid gap-2 border-l-2 border-[#c1a062] pl-4">
                                            <dt className="font-serif text-lg text-foreground">{entry.title}</dt>
                                            <dd className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                                <span className="rounded-full bg-[#f4b71c] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#2e2a22] font-medium">
                                                    {entry.time}
                                                </span>
                                                <span>{entry.note}</span>
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        </div>

                        <section className="space-y-5 rounded-[1.25rem] border border-[#e2d5c1]/70 bg-background/60 p-6 backdrop-blur">
                            <h3 className="font-serif text-xl text-foreground">Sacred Amenities</h3>
                            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/70">
                                Spaces to deepen your practice
                            </p>
                            <ul className="mt-4 grid gap-3 text-pretty text-base leading-relaxed text-muted-foreground">
                                {amenities.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#809b6b] px-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    <Link href="/stay">
                        <Button
                            size="lg"
                            className="w-fit rounded-2xl px-8 py-3 text-base font-medium text-primary-foreground shadow-[0_18px_40px_rgba(128,155,107,0.28)] transition-transform hover:-translate-y-0.5 cursor-pointer"
                            style={{
                                background: "linear-gradient(125deg, #88734C 0%, #CBAA6F 100%)",
                                color: "#fff",
                            }}
                        >
                            Book Your Stay
                        </Button>
                    </Link>
                </article>

                <aside className="relative z-10">
                    <Card className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-card/95 shadow-[0_18px_60px_rgba(50,47,41,0.22)]">
                        <CardHeader className="space-y-3">
                            <CardTitle className="font-serif text-balance text-3xl text-[#88734C]">Have a Query?</CardTitle>
                            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                                Share your intention, travel dates, or practice needs—our sevaks will respond with a personalised
                                retreat rhythm within 24 hours.
                            </p>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col">
                            <form className="flex flex-1 flex-col gap-5">
                                <Field>
                                    <Label htmlFor="fullName" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your name"
                                        className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0"
                                    />
                                </Field>
                                <Field>
                                    <Label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0"
                                    />
                                </Field>
                                <Field>
                                    <Label htmlFor="phone" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        Phone
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0"
                                    />
                                </Field>
                                <Field className="flex-1">
                                    <Label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Share your preferred dates, retreat focus, or dietary needs..."
                                        className="min-h-[140px] flex-1 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0"
                                    />
                                </Field>
                                <Button
                                    type="submit"
                                    className="mt-2 rounded-2xl px-6 py-3 shadow-[0_14px_32px_rgba(203,170,111,0.35)] transition-transform hover:-translate-y-0.5 cursor-pointer"
                                    style={{
                                        background: "linear-gradient(125deg, #88734C 0%, #CBAA6F 100%)",
                                        color: "#fff",
                                    }}
                                >
                                    Submit Query
                                </Button>

                            </form>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </section>
    )
}

function Field({ className, ...props }) {
    return <div className={`grid gap-2 ${className || ""}`} {...props} />;
}

function LotusAura() {
    return (
        <div className="pointer-events-none absolute inset-y-0 right-[-12%] hidden w-[40%] translate-y-[-10%] rotate-6 text-accent/15 blur-0 lg:block">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path
                    d="M200 40c23.5 36.5 44 103 44 140s-20.5 72-44 100c-23.5-28-44-63-44-100s20.5-103.5 44-140Zm0 0c-39.5 21.5-82 61.5-98 95-16 33.5-14 70 0 96 26-18 69-35 98-41m0-150c39.5 21.5 82 61.5 98 95 16 33.5 14 70 0 96-26-18-69-35-98-41m0-110c-19 0-52 16.5-70 34s-30 42.5-30 58c24-7 57.5-12 100-12m0-80c19 0 52 16.5 70 34s30 42.5 30 58c-24-7-57.5-12-100-12"
                    className="stroke-current/40"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    )
}
