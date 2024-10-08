import dataProduct from '@/assets/product/data';
import Item from '@/components/Item/Item';


const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-3 h-[90vh]'>
        <h1 className='text-[#171717] font-semibold text-5xl'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] rounded-lg bg-[#252525]'/>
        <div className='mt-12 flex gap-7'>
            {dataProduct.map((item, i) => {
                return <Item 
                    key={i}
                    id={item.id}
                    name = {item.name}
                    image = {item.image}
                    new_price = {item.new_price}
                    old_price = {item.old_price}
                />
            })}
        </div>
    </div>
  )
}

export default Popular;