import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>
    <div className='flex items-center space-x-5'>

        <img 
        className='h-16 w-16' 
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" 
        alt="" />

        <div>
            <p>Burger</p>
            <p>60 DH</p>
        </div>
    </div>

    <div>
        <Button desabled  className='cursor-not-allowed'> completed </Button>
    </div>


   </Card>
  )
}

export default OrderCard
