import React from 'react'
import workExamples from './workExamples';

function Work() {
  return (
    <section className="mt-48">
      <h2 className="mb-6 text-2xl text-slate-700 tracking-wide">UNSERE ARBEIT</h2>
      <div className="flex items-center mt-32 w-full justify-between relative">
        <div className="lg:w-[90%] lg:mr-28 z-10">
            <h3>{workExamples[0].title}</h3>
            <p className="text-base text-justify text-slate-600 mt-4">{workExamples[0].text}</p>
            <button className="bg-first py-2 px-6 rounded-xl text-base text-white mt-6 hover:bg-third">Learn More</button>
        </div>
        <div className="bg-first opacity-25 absolute w-[25%] h-[100%] left-80 hidden lg:block"></div>
        <img src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80" className="hidden lg:block lg:w-[50%]"/>
      </div>

      <div className="flex items-center mt-32 w-full justify-between relative">
        <img src="https://images.unsplash.com/photo-1622227391560-935dc3494baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80" className="hidden lg:block lg:w-[50%]"/>
        <div className="lg:w-[90%] lg:ml-28 z-10">
            <h3>{workExamples[0].title}</h3>
            <p className="text-base text-justify text-slate-600 mt-4">{workExamples[0].text}</p>
            <button className="bg-first py-2 px-6 rounded-xl text-base text-white mt-6 hover:bg-third">Learn More</button>
        </div>
        <div className="bg-first opacity-25 absolute hidden h-[100%] right-80 w-[25%] lg:block"></div>
      </div>

      <p className="text-center mt-20 lg:mt-24 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR MEHR ÜBER UNSERE ARBEIT AN  <i className="fa-solid fa-arrow-right-long"></i></p>
    </section>
  )
}

export default Work;
