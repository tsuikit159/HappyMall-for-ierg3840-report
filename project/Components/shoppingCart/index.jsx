import React from 'react' 
const CartList = ({ data }) => {

  const { name, imageSrc, quantity, price } = data

  return (
    <div>

      <div className='text-black max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
        <img className='h-[100px]' src={imageSrc} alt="" />

        <div>
          <div className='text-black font-bold text-2xl'>{name}</div>
          <div>Qty: {quantity}</div>
        </div>


        <div className=' text- black text-3xl font-bold'>${price * quantity}</div>

      </div>

    </div>
  )
}

export default CartList