"use client"

import { useState } from "react"
import { Heart, Leaf, Flame, BookOpen, Home, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const staticCategories = [
	{
		_id: "bhojan",
		title: "भोजन भंडार",
		englishTitle: "Bhojan Bhandar",
		description:
			"Provide nourishing meals for guests, residents and community members — supporting daily sustenance and hospitality.",
		icon: Leaf,
		color: "from-amber-500 to-orange-600",
		suggested: [500, 1000, 2500, 5000],
	},
	{
		_id: "yagya",
		title: "यज्ञशाला",
		englishTitle: "Yagya Shala",
		description:
			"Support the maintenance and activities of the yagya shala — preserving ritual spaces and sacred practices.",
		icon: Flame,
		color: "from-rose-500 to-pink-600",
		suggested: [1000, 2500, 5000, 10000],
	},
	{
		_id: "bharat",
		title: "भरत स्मारक",
		englishTitle: "Bharat Smarak",
		description:
			"Contribute to the preservation and upkeep of the Bharat Smarak — memorial and educational initiatives for cultural heritage.",
		icon: BookOpen,
		color: "from-green-500 to-emerald-600",
		suggested: [500, 2000, 5000, 15000],
	},
]

export default function DonatePage() {
	const [donationCategories] = useState(staticCategories)
	const [selectedCategory, setSelectedCategory] = useState(
		staticCategories[0] ?? null
	)
	const [customAmount, setCustomAmount] = useState("")
	const [selectedAmount, setSelectedAmount] = useState(null)
	const [loading] = useState(false)

	// confirmation modal state
	const [showConfirm, setShowConfirm] = useState(false)
	const [pendingAmount, setPendingAmount] = useState(null)

	// simplified: no network calls — just simulate confirmation
	const handleDonate = async (amount) => {
		try {
			setSelectedAmount(amount)
			// For now we simply thank the donor locally. Integrate payments later.
			alert(
				`Thank you for your donation of ₹${amount} to ${selectedCategory?.englishTitle || selectedCategory?.title}!`
			)
		} catch (error) {
			console.error("Donation error:", error)
			alert("Error processing donation. Please try again.")
		} finally {
			setSelectedAmount(null)
		}
	}

	const openConfirmForAmount = (amount) => {
		setPendingAmount(amount)
		setShowConfirm(true)
	}

	const confirmDonation = async () => {
		setShowConfirm(false)
		if (pendingAmount && Number.parseInt(pendingAmount) > 0) {
			await handleDonate(Number.parseInt(pendingAmount))
		} else {
			alert("Invalid donation amount.")
		}
		setPendingAmount(null)
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
			{/* Hero Section */}
			<section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
				</div>

				<div className="relative max-w-4xl mx-auto text-center mb-16">
					<h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
						Support Our Sacred Mission
					</h1>
					<p className="text-xl text-foreground/70 mb-8">
						Your generous contribution helps us maintain and expand the Maharishi
						Kanva Retreat, preserving ancient wisdom and creating spaces for
						spiritual transformation.
					</p>
					<div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/30">
						<p className="text-sm font-medium text-primary">ॐ नमः शिवाय</p>
					</div>
				</div>
			</section>

			{/* Donation Categories Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{loading ? (
					<div className="text-center py-12">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
						<p className="mt-4 text-foreground/70">
							Loading donation categories...
						</p>
					</div>
				) : (
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Sidebar Categories */}
						<div className="lg:col-span-1">
							<h2 className="text-2xl font-serif font-bold text-foreground mb-6">
								Donation Categories
							</h2>
							{donationCategories.length === 0 ? (
								<div className="p-6 text-center text-foreground/60 border-2 border-border rounded-lg bg-card/50">
									No active donation categories at the moment.
								</div>
							) : (
								<div className="space-y-3">
									{donationCategories.map((category) => (
										<button
											key={category._id ?? category.id}
											onClick={() => setSelectedCategory(category)}
											className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-2 ${
												selectedCategory?._id === category._id ||
												selectedCategory?.id === category.id
													? "border-primary bg-primary/10"
													: "border-border hover:border-primary/50 bg-card hover:bg-card/80"
											}`}
										>
											<div className="flex items-start gap-3">
												<category.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
												<div>
													<p className="font-serif font-semibold text-foreground text-sm">
														{category.title}
													</p>
													<p className="text-xs text-foreground/60 mt-1">
														{category.englishTitle}
													</p>
												</div>
											</div>
										</button>
									))}
								</div>
							)}
						</div>

						{/* Donation Details */}
						<div className="lg:col-span-2">
							{selectedCategory ? (
								<Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-card to-accent/5">
									<div className="mb-8">
										<div
											className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${selectedCategory.color} mb-4`}
										>
											<selectedCategory.icon className="w-8 h-8 text-white" />
										</div>
										<h3 className="text-3xl font-serif font-bold text-foreground mb-2">
											{selectedCategory.title}
										</h3>
										<p className="text-lg text-primary font-medium mb-4">
											{selectedCategory.englishTitle}
										</p>
										<p className="text-foreground/70">
											{selectedCategory.description}
										</p>
									</div>

									<div className="mb-8">
										<h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
											Suggested Donation Amounts
										</h4>
										<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
											{selectedCategory.suggested?.map((amount) => (
												<button
													key={amount}
													onClick={() => {
														setCustomAmount("")
														openConfirmForAmount(amount)
													}}
													className={`p-4 rounded-lg border-2 transition-all duration-300 font-semibold ${
														selectedAmount === amount
															? "border-primary bg-primary text-white"
															: "border-primary/30 bg-background hover:border-primary hover:bg-primary/5 text-primary"
													}`}
												>
													₹{amount.toLocaleString()}
												</button>
											))}
										</div>
									</div>

									<div className="mb-8">
										<label className="block text-sm font-semibold text-foreground mb-3">
											Custom Amount (₹)
										</label>
										<div className="flex gap-3 items-center">
											<input
												type="number"
												value={customAmount}
												onChange={(e) => {
													setCustomAmount(e.target.value)
													setSelectedAmount(null)
												}}
												placeholder="Enter custom amount"
												className="flex-1 px-4 py-3 rounded-lg border-2 border-primary/30 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
											/>
											<Button
												onClick={() => {
													const amt = Number.parseInt(customAmount)
													if (!amt || amt <= 0) return
													openConfirmForAmount(amt)
												}}
												disabled={
													!customAmount ||
													Number.parseInt(customAmount) <= 0
												}
												className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 cursor-pointer"
											>
												Donate Now
											</Button>
										</div>
									</div>

									<div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
										<p className="text-sm text-foreground/70">
											<span className="font-semibold text-primary">
												Your Impact:
											</span>{" "}
											Every donation directly supports the preservation of
											ancient wisdom and the creation of sacred spaces for
											spiritual growth.
										</p>
									</div>
								</Card>
							) : (
								donationCategories.length > 0 && (
									<div className="p-6 text-center text-foreground/60 border-2 border-border rounded-lg bg-card/50">
										Select a donation category to see details.
									</div>
								)
							)}
						</div>
					</div>
				)}
			</section>

			{/* Static "How It Helps" Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5 mt-16">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-serif font-bold text-foreground text-center mb-12">
						How Your Donation Helps
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: "Preserve Wisdom",
								description:
									"Support the documentation and teaching of ancient Vedic knowledge and spiritual practices.",
							},
							{
								title: "Serve Community",
								description:
									"Enable us to provide free or subsidized retreats for those seeking spiritual transformation.",
							},
							{
								title: "Sustain Spaces",
								description:
									"Maintain our sacred facilities and create welcoming environments for all seekers.",
							},
						].map((item, idx) => (
							<Card
								key={idx}
								className="p-6 border-2 border-primary/20 hover:border-primary/50 transition-colors"
							>
								<h3 className="text-xl font-serif font-bold text-foreground mb-3">
									{item.title}
								</h3>
								<p className="text-foreground/70">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Confirmation Modal */}
			{showConfirm && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
				>
					<div
						className="absolute inset-0 bg-black/50"
						onClick={() => setShowConfirm(false)}
					></div>

					<div className="relative max-w-xl w-full bg-white dark:bg-card rounded-lg shadow-xl border-2 border-primary/10 overflow-hidden">
						<div className="p-6">
							<div className="flex items-start gap-4">
								<div
									className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${selectedCategory?.color}`}
								>
									{selectedCategory && (
										<selectedCategory.icon className="w-7 h-7 text-white" />
									)}
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-serif font-bold text-foreground">
										Confirm Your Donation
									</h3>
									<p className="text-sm text-foreground/60 mt-1">
										You are donating{" "}
										<span className="font-semibold text-primary">
											₹{pendingAmount?.toLocaleString()}
										</span>{" "}
										to{" "}
										<span className="font-semibold">
											{selectedCategory?.englishTitle ||
												selectedCategory?.title}
										</span>
									</p>
								</div>
							</div>

							<div className="mt-6 p-4 bg-primary/5 rounded-md border border-primary/20">
								<p className="text-center text-primary font-serif text-lg">
									ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहे । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ
									शान्तिः शान्तिः शान्तिः ॥
								</p>
								<p className="text-xs text-foreground/60 mt-2 text-center">
									May this offering support wisdom, service and the wellbeing
									of all.
								</p>
							</div>

							<div className="mt-6 flex justify-end gap-3">
								<Button
									onClick={() => {
										setShowConfirm(false)
										setPendingAmount(null)
									}}
									className="bg-background border border-border text-foreground hover:bg-background/80"
								>
									Cancel
								</Button>
								<Button
									onClick={confirmDonation}
									className="bg-primary text-white hover:bg-primary/90"
								>
									Confirm & Proceed
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}
