import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

function Form({displayName}) {

  const [isVerified, setIsVerified] = useState(false);
  const [hasInfo, setHasInfo] = useState(false);
  const [isDesktop] = useState(window.innerWidth > 650);

  const handleOnChange = () => {
    setIsVerified(true);
  }

  const handleOnChangeForm = () => {
    setHasInfo(true);
  }

  console.log(displayName)

  return (
    <form className="text-center flex flex-col text-base lg:mb-4">
        <div className={`flex ${displayName === "Footer" || !isDesktop ? "flex-col" : "flex-row"} align-center`}>
          <input type="text" id="name" placeholder="Name" className={`rounded-lg py-2 px-5 ${displayName === "Footer" || !isDesktop ? "mb-2" : ("mb-0", "mr-2")}`}></input>
          <input onChange={handleOnChangeForm} type="email" id="email" placeholder="Email" className={`py-2 px-5 mb-3 lg:mb-0 rounded-lg ${displayName === "Footer" || !isDesktop ? "mx-0" : "mx-2"}`}></input>
          <button disabled={!isVerified} type="submit" className={`mt-3 lg:mt-0 rounded-lg ${isVerified ? "bg-second" : "bg-third"} py-2 px-4 text-white text-base hover:bg-third`}>Absenden</button>
        </div>
      {hasInfo &&
        <ReCAPTCHA className={`${displayName === "Footer" || !isDesktop ? "ml-0" : "ml-[25%]"} block mt-4`} sitekey={import.meta.env.VITE_SITE_KEY} onChange={handleOnChange} />
      }
    </form>
  )
}

export default Form