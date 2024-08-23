import { useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';
import removeIcon from '@/assets/images/cart_cross_icon.png';

type Props = {}

const CartItem = () => {
    const context = useContext(ShopContext)
    
    if( !context ) {
        throw new Error("Product must be used within a ShopContextProvider");
    }

    const { allProduct, addToCart, removeFromCart, cartItems, getTotalCartAmount } = context;

    const cartStyle: string = "grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-color-[#454545] text-xl font-semibold";

    const cartTotal: string = "flex justify-between py-[15px] px-0";

    return (
    <div className='my-[100px] mx-[170px]'>
        <div className={`${cartStyle}`}>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#E2E2E2] border-0'/>
        {allProduct.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                            <div className={`${cartStyle} text-[17px] font-medium`}>
                                <img className='h-[62px] w-full object-contain' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='w-[64px] h-[50px] border-2 border-solid border-[#EBEBEB] bg-white'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='w-[15px] my-0 mx-[40px] cursor-pointer' src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                        </div>
            }
            return null;
        })}
        <div className='flex my-[100px] mx-0'>
            <div className='flex-1 flex flex-col mr-[200px] gap-10'>
                <h1>Cart Total</h1>
                <div>
                    <div className={`${cartTotal}`}>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className={`${cartTotal}`}>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className={`${cartTotal}`}>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-[262px] h-[58px] outline-none border-none bg-[#FF5A5A] text-white text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex flex-col flex-1 font-medium text-[16px]'>
                <p className='text-[#555555]'>If you have a promo code, enter it here</p>
                <div className='w-[504px] mt-4 pl-5 h-[58px] bg-[#EAEAEA]'>
                    <input className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' type="text" placeholder='Promo Code' />
                    <button className='w-[150px] h-[58px] text-[16px] bg-black text-white cursor-ppinter'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;