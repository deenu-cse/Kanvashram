"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, X } from "lucide-react"

export default function TicketModal({ open, onOpenChange, data }) {
  if (!data) return null

  const handleDownloadPDF = () => {
    const element = document.createElement("a")
    element.href = "#"
    element.download = `ticket-${data.transactionId}.pdf`
    element.click()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Your Ticket</DialogTitle>
        </DialogHeader>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
          <div className="space-y-6">
            <div className="text-center border-b border-primary/20 pb-4">
              <h3 className="font-serif text-xl text-foreground mb-2">Maharishi Kanva Retreat</h3>
              <p className="text-sm text-muted-foreground">23rd – 29th November 2025</p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Participant Name</p>
                <p className="font-semibold text-foreground">{data.fullName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Category</p>
                <p className="font-semibold text-foreground capitalize">{data.category}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Transaction ID</p>
                <p className="font-mono text-sm text-primary">{data.transactionId}</p>
              </div>
            </div>

            <div className="flex justify-center py-4">
              <div className="w-32 h-32 bg-white border-2 border-primary/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">QR Code</p>
                  <p className="text-2xl mt-2">📱</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-lg p-4 text-center border border-primary/20">
              <p className="text-xs text-muted-foreground mb-1">Amount Paid</p>
              <p className="text-2xl font-bold text-primary">
                {data.price} {data.currency}
              </p>
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button onClick={handleDownloadPDF} className="flex-1 bg-primary hover:bg-primary/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={() => onOpenChange(false)} variant="outline" className="flex-1">
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
