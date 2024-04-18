import React from 'react'

function Banner () {
    return (
        <section className="w-full bg-third my-36 py-16 text-center flex-col">
            <h1 className='text-white lg:text-6xl'>SAISON 2024</h1>
            <div className='my-10 lg:flex mx-10 lg:justify-center items-center'>
                <p className='text-white lg:mx-3 self-center'>0151 742 549 53</p>
                <p className='lg:mx-3 text-white hover:cursor-pointer text-white hover:text-second'><a href="mailto:info@rehkitzrettung-euskirchen.de" target="_blank">info@rehkitzrettung-euskirchen.de</a></p>
            </div>
            <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" target="_blank" className="text-third text-lg text-center lg:text-2xl rounded-3xl bg-white py-3 px-16 hover:cursor-pointer hover:bg-first hover:text-white">Buchen</a>
            <p className='mt-3 text-white text-lg'>(nur über PC)</p>
        </section>
    )
}

export default Banner; 