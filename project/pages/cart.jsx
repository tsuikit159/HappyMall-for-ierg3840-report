import React from 'react'
import axios from "axios"
import { useRecoilState,useResetRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState.ts'
import CartList from '../Components/shoppingCart/index.jsx'
import Navbar from "../Components/Navbar"
import { Footer } from '@/Components/footer/index.jsx'
import { getSession } from "next-auth/react";
import { useEffect } from 'react'
import { useSsrComplectedState } from '../atoms/cartState.ts'
const Cart = () => {

    const resetSearch = useResetRecoilState(cartState)
    const reset = () => {
        resetSearch();
    };
    const [cartItem, setCartItem] = useRecoilState(cartState)
    const setSsrCompleted = useSsrComplectedState()
    
    useEffect(setSsrCompleted, [setSsrCompleted])
    const totalPrice = () => {
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }

    const createCheckoutSession = async () => {

        axios.post('api/checkout_sections', { cartItem })
            .then(res => {
                console.log(res)
                window.location = res.data.sessionURL
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                {cartItem.length <= 0
                    ? 
                    <h1 className='text-center text-4xl mt-32 text-black'>Your Cart Is Empty</h1>
                    
                    : cartItem.map(item => <CartList key={item.id} data={item} />)}

                {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                    <h2 className='text-white text-right text-3xl font-bold'>Total: ${totalPrice()}</h2>
                    <button
                        className='text-right text-black py-4 px-12 mt-4 block mx-auto hover:bg-blue-800 hover:text-white' onClick={createCheckoutSession}>Checkout</button>
                <button
                        className='text-right text-black py-4 px-12 mt-4 block mx-auto hover:bg-blue-800 hover:text-white' onClick={reset}>reset</button>
                </div>)}



            </div>
            <div className='py-10 px-12 mt-4 block mx-auto'>
                </div>     
                    
        <Footer />
        </div>
        
    )
}

export default Cart
export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: { session },
    };
  }