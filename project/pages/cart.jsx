import React from 'react'
import axios from "axios"
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState.js'
import CartList from '../Components/shoppingCart/index.jsx'
import Navbar from "../Components/Navbar"
import { Footer } from '@/Components/footer/index.jsx'
const Cart = () => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

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
                    <h2 className='text-black text-right text-3xl font-bold'>Total: ${totalPrice()}</h2>
                    <button
                        className='text-right bg-red-600 text-black py-4 px-12 mt-4 block mx-auto hover:bg-red-800' onClick={createCheckoutSession}>Checkout</button>
                </div>)}



            </div>
            <div className='py-10 px-12 mt-4 block mx-auto'>
                </div>     
                    
        <Footer />
        </div>
        
    )
}

export default Cart