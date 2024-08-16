import newCollections from "@/assets/product/new_collections";
import Item from "@/components/Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-[100px]">
        <h1 className="text-[#171717] font-semibold text-5xl">NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-lg bg-[#252525]'/>
        <div className="grid grid-cols-4 mt-[50px] gap-7">
            {newCollections.map((item, i) => {
                return <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price}
                    />
            })}
        </div>
    </div>
  )
}

export default NewCollections;