const LoginSignup = () => {
  const inputStyle: string = "h-[72px] w-full pl-[20px] border-[1px] outline-none text-[#5C5C5C] text-lg";
  return (
    <div className="w-full h-[80vh] bg-[#FCE3FE] pt-[100px]">
      <div className="w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className="my-[20px] mx-0">Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input className={`${inputStyle}`} type="text" placeholder="Your Name" />
          <input className={`${inputStyle}`} type="email" placeholder="Email Address"/>
          <input className={`${inputStyle}`} type="password" placeholder="Password" />
        </div>
        <button className="w-[460px] h-[72px] text-white bg-[#FF4141] mt-7 border-none text-2xl font-medium cursor-pointer">
          Continue
        </button>
        <p className="mt-5 text-[#5C5C5C] text-lg font-medium">Already have an account? <span className="text-[#FF4141] font-semibold">Login Here</span></p>
        <div className="flex items-center mt-[25px] gap-5 text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;