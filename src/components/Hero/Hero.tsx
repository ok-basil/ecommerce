import handIcon from '@/assets/images/hand_icon.png';
import arrowIcon from '@/assets/images/arrow.png';
import heroImage from '@/assets/images/hero_image.png';

const Hero = () => {
    const pStyle: string = 'text-[#171717] text-8xl font-bold';
  return (
    <div className='h-[80vh] bg-custom-gradient flex py-2'>
        <div className='flex flex-1 flex-col justify-center gap-5 pl-[180px]'>
            <h2 className='text-[#090909] text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='flex items-center gap-4'>
                    <p className={`${pStyle}`}>new</p>
                    <img src={handIcon} alt="hand-icon" className='w-[105px]'/>
                </div>
                <p className={`${pStyle}`}>collections</p>
                <p className={`${pStyle}`}>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-3 w-[310px] h-[70px] rounded-[75px] mt-7 bg-[#FF4141] text-white text-2xl font-medium'>
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="arrow-icon" />
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={heroImage} alt="hero-image" />
        </div>
    </div>
  )
}

export default Hero;