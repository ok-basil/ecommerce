import FooterLogo from '@/assets/images/logo_big.png';
import InstagramIcon from '@/assets/images/instagram_icon.png';
import PinterestIcon from '@/assets/images/pintester_icon.png';
import WhatsappIcon from '@/assets/images/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex items-center gap-5'>
            <img src={FooterLogo} alt="Logo" />
            <p className='text-[#383838] text-3xl font-bold'>The Store</p>
        </div>
        <ul className='flex list-none gap-[50px] text-[#252525] text-2xl'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact Us</li>
        </ul>
        <div className='flex gap-5'>
            <div className='p-2 pb-1 bg-[#FBFBF] border border-[#EBEBEB]'>
                <img src={InstagramIcon} alt="instagram" />
            </div>
            <div className='p-2 pb-1 bg-[#FBFBF] border border-[#EBEBEB]'>
                <img src={PinterestIcon} alt="pinterest" />
            </div>
            <div className='p-2 pb-1 bg-[#FBFBF] border border-[#EBEBEB]'>
                <img src={WhatsappIcon} alt="whatsapp" />
            </div>
        </div>
        <div className='flex flex-col items-center gap-8 w-full mb-6 text-[#1A1A1A] text-xl'>
            <hr className='w-4/5 border-none rounded-[10px] h-[3px] bg-#C7C7C7'/>
            <p>Copyright @2024 - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;