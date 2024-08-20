import { useContext } from "react";
import dropDownIcon from '@/assets/images/dropdown_icon.png';
import Item from "@/components/Item/Item";


type Props = {
  category: string;
  banner: string;
}

function ShopCategory({category, banner}: Props) {
  const {all_product} = useContext;
  return (
    <div>
      <img src={banner} alt="Banner Image" />
      <div>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div>
          Sort by <img src={dropDownIcon} alt="dropdown" />
        </div>
      </div>
      <div>
        {all_product.map((item, i) => {
          if (category === item.category) {
            return 
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory;