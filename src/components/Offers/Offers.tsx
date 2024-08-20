import exclusiveImage from '@/assets/images/exclusive_image.png';

const Offers = () => {
    const headerStyle: string = 'text-[#171717] text-7xl font-semibold';
  return (
    <div className='w-[65%] h-[60vh] flex m-auto py-0 px-[140px] mb-[150px] bg-custom-gradient items-center justify-center'>
        <div className='flex-1 flex flex-col justify-center'>
            <h1 className={`${headerStyle}`}>Exclusive</h1>
            <h1 className={`${headerStyle}`}>Offers For You</h1>
            <p className='text-[#171717] text-2xl font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-[35px] bg-[#FF4141] font-medium text-2xl mt-[30px] text-white cursor-pointer'>Check Now</button>
        </div>
        <div className='flex-1 flex items-center justify-end pt-[50px]'>
            <img src={exclusiveImage} alt="Image" />
        </div>
    </div>
  )
}

export default Offers;