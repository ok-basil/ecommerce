import { Product } from '@/shared/types'
import starIcon from '@/assets/images/star_icon.png';
import starDullIcon from '@/assets/images/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';

type Props = {
    product: Product;
}

const ProductDisplay = ({product}: Props) => {
    const imageStyle: string = "h-[163px]";
    const sizeTags: string = "py-[18px] px-[24px] bg-[#FBFBFB] border-1 border-solid rounded-[3px] cursor-pointer";
    const context = useContext(ShopContext);

    if (!context) {
        throw new Error("Product must be used within a ShopContextProvider");
    }

    const {addToCart} = context;

  return (
    <div className='flex my-0 mx-[170px]'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img className={`${imageStyle}`} src={product.image} alt="" />
                <img className={`${imageStyle}`} src={product.image} alt="" />
                <img className={`${imageStyle}`} src={product.image} alt="" />
                <img className={`${imageStyle}`} src={product.image} alt="" />
            </div>
            <div>
                <img className='w-[586px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='my-0 mx-[70px] flex flex-col'>
            <h1 className='text-[#3D3D3D] text-[40px] font-bold'>{product.name}</h1>
            <div className='flex items-center mt-[13px] gap-1 text-[#1C1C1C] text-lg'>
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starDullIcon} alt="" />
                <p>{122}</p>
            </div>
            <div className='flex my-[40px] mx-0 gap-7 text-[24px] font-bold'>
                <div className='text-[#818181] line-through'>
                    <p>${product.old_price}</p>
                </div>
                <div className='text-[#FF4141]'>
                    <p>${product.new_price}</p>
                </div>
            </div>
            <div>
                <p>A lightweight, usually knitted, pullover shirt, close-fitting, and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
            </div>
            <div>
                <h1 className='mt-[55px] text-[#656565] font-semibold text-lg'>Select Size</h1>
                <div className='flex my-[30px] mx-0 gap-5'>
                    <div className={`${sizeTags}`}>S</div>
                    <div className={`${sizeTags}`}>M</div>
                    <div className={`${sizeTags}`}>L</div>
                    <div className={`${sizeTags}`}>XL</div>
                    <div className={`${sizeTags}`}>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] text-sm font-semibold text-white bg-[#FF4141] mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
            <p className='mt-[10px]'><span className='font-semibold'>Category: </span>Women, T-Shirt, Cropped Top</p>
            <p><span>Category: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay;