import { Suspense } from 'react'
import BookingPage from '../../../components/page-ui/bookingPage'

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPage />
    </Suspense>
  )
}