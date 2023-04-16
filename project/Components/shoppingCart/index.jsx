import React from 'react' 
const CartList = ({ data }) => {

  const { name, imageSrc, quantity, price } = data

  return (
    <div>

      <div className='bg-black max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
        <img className='h-[100px]' src={imageSrc} alt="" />

        <div>
          <div className='font-bold text-2xl'>{name}</div>
          <div>Qty: {quantity}</div>
        </div>


        <div className='text-3xl font-bold'>${price * quantity}</div>

      </div>

    </div>
  )
}

export default CartList