type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] bg-custom-gradient gap-7">
        <h1 className="text-[#454545] text-3xl font-semibold">Get Exclusive Offers In Your Email</h1>
        <p className="text-[#454545] text-xl">Subscribe to our newsletter and stay updated.</p>
        <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#E3E3E3]">
            <input className="w-[500px] ml-[30px] border-none outline-none text-[#616161] font-montserrat text-sm" type="email" placeholder="Your Email Address" />
            <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-sm cursor-pointer hover:bg-slate-700 transition-[0.5s]">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;