import { useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';
import removeIcon from '@/assets/images/cart_cross_icon.png';

type Props = {}

const CartItem = () => {
    const context = useContext(ShopContext)
    
    if( !context ) {
        throw new Error("Product must be used within a ShopContextProvider");
    }

    const { allProduct, addToCart, removeFromCart, cartItems } = context;

    const cartStyle: string = "grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 px-0 text-color-[#454545] text-xl font-semibold"

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
        <div>
            <div>
                <h1>Cart Total</h1>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div>
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div>
                <p>If you have a promo code, enter it here</p>
                <div>
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;