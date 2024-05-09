import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import { Button } from '../ui/button'

type CheckoutProps={
  event: IEvent,
  userId: string  
}

const Checkout = ({event,userId}:CheckoutProps) => {
  const onCheckout = async()=>{
      console.log("checkout")
  }
  return (
   <>
   <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {/* check price first */}
        {event.isFree?"Get Ticket":"Buy Ticket"}
      </Button>
    </form>
    </>
  )
}

export default Checkout