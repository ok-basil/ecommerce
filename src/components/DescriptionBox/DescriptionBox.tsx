const DescriptionBox = () => {
  return (
    <div className="flex flex-col my-[120px] mx-[170px]">
        <div className="flex">
            <div className="flex items-center justify-center text-lg w-[171px] h-[70px] border-2 border-solid border-[#D0D0D0]">
                Description
            </div>
            <div className="flex items-center justify-center text-lg w-[171px] h-[70px] border-2 border-solid border-[#D0D0D0] bg-[#FBFBFB] text-[#555555]">
                Reviews (122)
            </div>
        </div>
        <div className="flex flex-col gap-6 border-2 p-12 pb-[70px]">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services as detailed descriptions, images, prices, and any available variables (e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;