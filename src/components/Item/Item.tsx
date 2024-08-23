import { Link } from "react-router-dom";

type Props = {
    id: number;
    image: string;
    name: string;
    new_price: number;
    old_price: number;

}

const Item = ({id, image, name, new_price, old_price}: Props) => {
  return (
    <div className='w-full basis-1/4 hover:scale-[1.05] hover:duration-[0.6s]'>
        <Link to={`/product/${id}`}><img onClick={()=> window.scrollTo(0,0)} src={image} alt="" /></Link>
        <p className='mt-2 mr-0 text-center w-[80%]'>{name}</p>
        <div className='flex gap-5 w-[80%] justify-center'>
            <div className='text-[#374151] text-lg font-semibold'>
                ${new_price}
            </div>
            <div className='text-[#8C8C8C] text-lg font-medium line-through'>
                ${old_price}
            </div>
        </div>
    </div>
  )
}

export default Item;