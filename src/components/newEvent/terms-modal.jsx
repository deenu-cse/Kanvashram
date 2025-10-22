"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Terms & Conditions</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-full pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Retreat Rules</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Participants must arrive by 4:00 PM on November 23rd</li>
                <li>Silence practice is mandatory during designated hours</li>
                <li>Mobile phones and electronic devices are restricted</li>
                <li>Alcohol and non-vegetarian food are not permitted</li>
                <li>Participants must follow the daily schedule</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Refund Policy</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Cancellations made 30 days before the retreat: Full refund</li>
                <li>Cancellations made 15-30 days before: 50% refund</li>
                <li>Cancellations made less than 15 days before: No refund</li>
                <li>No refunds for no-shows</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Participant Guidelines</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Respect the sacred environment and other participants</li>
                <li>Maintain cleanliness in all areas</li>
                <li>Follow dietary guidelines provided by Ayurvedic experts</li>
                <li>Participate actively in all sessions</li>
                <li>Report any health concerns to the medical team</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Health & Safety</h3>
              <p>
                Participants with serious health conditions must inform the organizers in advance. The retreat is not
                suitable for pregnant women or individuals with severe medical conditions. By registering, you confirm
                that you are in good health and fit to participate.
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                By registering for this retreat, you acknowledge that you have read and agree to all terms and
                conditions outlined above.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
