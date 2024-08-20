import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import dropDownIcon from '@/assets/images/dropdown_icon.png';
import Item from "@/components/Item/Item";

type Props = {
  category: string;
  banner: string;
}

const ShopCategory = ({ category, banner }: Props) => {
  const context = useContext(ShopContext);

  // Check if context is undefined
  if (!context) {
    throw new Error("ShopCategory must be used within a ShopContextProvider");
  }

  const { allProduct } = context;

  return (
    <div>
      <img className="block my-8 mx-auto w-[82%]" src={banner} alt="Banner Image" />
      <div className="flex my-0 mx-[170px] items-center justify-between">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="flex gap-2 py-[10px] px-[20px] rounded-[40px] border-2 border-solid border-[#888]">
          Sort by <img className="w-[fit-content] object-contain" src={dropDownIcon} alt="dropdown" />
        </div>
      </div>
      <div className="my-[20px] mx-[170px] grid grid-cols-4 gap-y-[80px]">
        {allProduct.map((item, i) => {
          if (category === item.category) {
            return <Item 
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#EDEDED] color-[#787878] text-xl font-medium">
        <p>Explore More</p>
      </div>
    </div>
  )
}

export default ShopCategory;
