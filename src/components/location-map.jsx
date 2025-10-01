import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function LocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-serif">Location & Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.123456789!2d78.3167!3d30.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzEyLjgiTiA3OMKwMTknMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ashram Location"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">Address</p>
              <p className="text-sm text-muted-foreground">Tapovan, Rishikesh, Uttarakhand 249192</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">Phone</p>
              <p className="text-sm text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">Email</p>
              <p className="text-sm text-muted-foreground">info@shantiashram.com</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">How to Reach</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              • <strong>By Air:</strong> Jolly Grant Airport, Dehradun (35 km)
            </li>
            <li>
              • <strong>By Train:</strong> Rishikesh Railway Station (8 km)
            </li>
            <li>
              • <strong>By Road:</strong> Well connected by bus from Delhi, Haridwar, and Dehradun
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
