import React from 'react'

function Banner () {
    return (
        <section className="w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-neutral-700 bg-blend-overlay mb-36 py-16 text-center flex-col">
            <h1 className='text-white'>SAISON 2024</h1>
            <div className='my-8 lg:flex mx-10 lg:justify-center items-center'>
                <p className='text-white mx-3 self-center'>0151 742 549 53</p>
                <p className='mx-3 text-white hover:cursor-pointer text-white hover:text-second'><a href="mailto:info@rehkitzrettung-euskirchen.de" target="_blank">info@rehkitzrettung-euskirchen.de</a></p>
            </div>
            <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" target="_blank" className="text-white text-lg text-center rounded-3xl bg-first py-3 px-6 hover:cursor-pointer hover:bg-white hover:text-second">Buchen</a>
            <p className='mt-3 text-white text-lg'>(nur über PC)</p>
        </section>
    )
}

export default Banner; 