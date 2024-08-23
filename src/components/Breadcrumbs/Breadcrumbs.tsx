import { Product } from '@/shared/types';
import arrowIcon from '@/assets/images/breadcrum_arrow.png'

type Props = {
    product: Product;
}

const Breadcrumbs = ({product}: Props) => {
  return (
    <div className='flex items-center gap-2 text-[#5E5E5E] text-sm font-semibold my-[60px] mx-[170px] capitalize'>
        HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs;