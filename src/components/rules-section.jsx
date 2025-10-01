import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, ShieldUserIcon } from "lucide-react"

export function RulesSection() {
    const rules = [
        "Maintain silence in meditation areas",
        "Vegetarian meals only",
        "No alcohol or smoking",
        "Modest dress code required",
        "Attend morning prayers",
        "Respect ashram timings",
        "Mobile phones on silent",
        "Remove footwear before entering",
        "Participate in karma yoga",
        "Respect fellow seekers",
    ]

    return (
        <div className="space-y-4">
            <Card className="border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg font-serif">Ashram Rules & Regulations</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {rules.map((rule, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground leading-relaxed">{rule}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-secondary/50 relative">
                <CardContent >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        <ShieldUserIcon className="w-8 h-8 text-amber-400 font-light absolute -top-0.5 -left-0.5"/>
                        Our ashram is a sacred space dedicated to spiritual growth. We kindly request all guests to honor these
                        guidelines for a harmonious stay.
                    </p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-serif">Daily Schedule</CardTitle>
                    <CardDescription>Experience the ashram routine</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { time: "4:30 AM", activity: "Wake Up" },
                            { time: "4:30 - 5:00 AM", activity: "Amrit Drink" },
                            { time: "5:00 - 5:30 AM", activity: "Nitya Karm" },
                            { time: "5:30 - 6:30 AM", activity: "Prana Power Yog" },
                            { time: "6:30 - 8:00 AM", activity: "Hatha Yoga" },
                            { time: "8:30 - 9:30 AM", activity: "Breakfast" },
                            { time: "10:30 - 11:30 AM", activity: "Yoga Nidra" },
                            { time: "12:30 - 1:30 PM", activity: "Lunch" },
                            { time: "2:00 - 3:30 PM", activity: "Relax Time" },
                            { time: "3:30 - 4:30 PM", activity: "Ayurveda" },
                            { time: "4:30 - 5:30 PM", activity: "Yoga Classes" },
                            { time: "6:00 PM", activity: "Vajina" },
                            { time: "7:00 - 8:00 PM", activity: "Dinner" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 pb-3 border-b last:border-0">
                                <div className="text-sm font-medium text-primary min-w-[120px] flex-shrink-0">
                                    {item.time}
                                </div>
                                <div className="text-sm text-muted-foreground">{item.activity}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}