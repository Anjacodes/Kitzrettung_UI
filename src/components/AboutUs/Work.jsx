import React from 'react'

function Work() {
  return (
    <section className="mt-48">
      <h2 className="mb-6 text-2xl text-center">UNSERE ARBEIT</h2>
      <div className="flex items-center mt-32 w-full justify-between relative">
        <div className="lg:w-[90%] lg:mr-28 z-10">
            <h3>MIT DRONEN ZUR RETTUNG</h3>
            <p className="text-base text-justify text-slate-600 mt-4">Für unsere Arbeit setzen wir auf den Einsatz von Drohnen mit hochauflösender Wärmebildtechnik (s. Technik). Dabei werden die zu mähenden Wiesen, möglichst am Morgen des Mähtermins, beflogen. Die Wärmebildkameras detektieren dabei die in den Wiesen liegenden Tiere als Wärmequelle. </p>
            <button className="bg-first py-2 px-6 rounded-xl text-base text-white mt-6 hover:bg-third">Mehr erfahren</button>
        </div>
        <div className="bg-first opacity-25 absolute w-[25%] h-[100%] left-80 hidden lg:block"></div>
        <img src="https://bl6pap003files.storage.live.com/y4miNfone2MLzAif7i63JbHcC_ptBM7wevsUeSa82dPQQAhkPXKWtHzcp4nmT7HLlj1A6zgSfrZKqmWAI-JbOBn87LZaAC-mPNyBlFb7Fk-RwX0Man_dOkTPYpDSwMe52vf5ozlqFWwifHuZ3QFZDrZ53Fqn5Y4t2HAGEFS1iKOthbuD-e-IIBGADu45xR9-f_NeVuNqtUNKq2FdNy_OvQDXA/IMG_5468.JPG?psid=1&width=1702&height=1276" className="hidden lg:block lg:w-[50%]"/>
      </div>

      <p className="text-center mt-20 lg:mt-24 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR MEHR ÜBER UNSERE ARBEIT AN  <i className="fa-solid fa-arrow-right-long"></i></p>
    </section>
  )
}

export default Work