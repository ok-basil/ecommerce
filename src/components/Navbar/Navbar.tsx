import Logo from "@/assets/images/logo.png";
import CartIcon from "@/assets/images/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
    const flexBetween: string = "flex items-center justify-between";

    const [menu, setMenu] = useState("shop");

    const context = useContext(ShopContext);

    if (!context) {
        throw new Error("Product must be used within a ShopContextProvider");
    }

    const {getTotalCartItems} = context;

  return (
    <nav>
        <div className={`${flexBetween} w-full p-4 shadow-3xl`}>
            <div className={`${flexBetween}`}>
                <img src={Logo} alt="Logo" />
                <p className="text-4xl font-semibold">The Store</p>
            </div>
            <ul className={`${flexBetween} gap-8 text-2xl cursor-pointer`}>
                <li onClick={()=> {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"? <hr className="border-none w-full h-[3px] rounded-lg bg-[#FF4141]"/>: <></>}</li>

                <li onClick={()=> {setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"? <hr className="border-none w-full h-[3px] rounded-lg bg-[#FF4141]"/>: <></>}</li>

                <li onClick={()=> {setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"? <hr className="border-none w-full h-[3px] rounded-lg bg-[#FF4141]"/>: <></>}</li>

                <li onClick={()=> {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"? <hr className="border-none w-full h-[3px] rounded-lg bg-[#FF4141]"/>: <></>}</li>
            </ul>
            <div className={`${flexBetween} gap-8`}>
                <Link to='/login'><button className="w-[157px] h-[58px] border-[1px] border-solid rounded-[75px] font-bold text-2xl cursor-pointer active:bg-[#F3F3F3]">Login</button></Link>
                <Link to='/cart'><img src={CartIcon} alt="cart-icon" /></Link>
                <div className="w-[22px] h-[22px] flex items-center justify-center mt-[-35px] ml-[-50px] text-sm bg-red-500 text-white rounded-[11px]">{getTotalCartItems()}</div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;