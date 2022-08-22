import React from 'react'
import RehkitzRettung from '../../../assets/RehkitzInRettung.jpg';
import Rehkitz from '../../../assets/RehkitzImGras.jpg'


function Intro() {
  return (
    <div className="mx-20 my-48 lg:mx-52">
      <h2 className="mb-6 text-2xl tracking-wide">UNSERE ARBEIT</h2>
      <p className="text-base text-justify text-slate-600 my-4">Unser eingetragener Verein hat es sich gemäß seiner Satzung zur Aufgabe gemacht das Tierleid, das durch den Einsatz landwirtschaftlicher Maschinen entsteht, möglichst zu verhindern (siehe Satzung). Wir setzen dabei auf den Einsatz von Drohnen mit hochauflösender Wärmebildtechnik (s. <a href="/technik" className='text-blue-600 hover:underline'>Technik</a>). </p>
      <div className='mt-12 lg:flex'>
        <img src={Rehkitz} className='lg:w-1/3'/>
       <div className='lg:ml-12 text-base text-justify text-slate-600 my-4'>
          <p className="mb-6">Dabei werden die zu mähenden Wiesen, möglichst am Morgen des Mähtermins, beflogen. Die Wärmebildkameras detektieren dabei die in den Wiesen liegenden Tiere als Wärmequelle.</p>

          <p className="mb-6">Je nach Gelände und Temperatur sind bis zu 2 ha in 30 Minuten abgeflogen. Die Temperatur spielt hierbei eine besondere Rolle. Je größer die Temperaturdifferenz zwischen Tierkörper und Umgebung, desto einfacher gelingt das Auffinden. Daher ist ein Einsatz dieser Technik in den frühen Morgenstunden zu bevorzugen. Dies ermöglicht zudem eine größere Flughöhe, was eine höhere Hektarleistung ermöglicht.</p>

          <p>Ist z. B. ein Rehkitz gefunden, hält die Drohne die Position über diesem. Zwei Helfer nähern sich mittels Einweisung über Funk der Position. Nach Auffinden des Kitzes wird dieses, je nach Absprache mit dem Landwirt unter Vermeidung von Geruchsübertragung auf das Kitz, entweder aufgenommen und in einer benachbarten Fläche (die natürlich an diesem Tag nicht gemäht wird) unter einer belüfteten Kiste festgesetzt oder an Ort und Stelle festgesetzt. Im zweiten Fall findet zusätzlich eine Kennzeichnung so statt, dass der Landwirt die Stelle möglichst großräumig ummähen kann.</p>
       </div>
      </div>
      <div className='lg:flex mt-12 h-full'>
        <div className='lg:mr-12 text-base text-justify text-slate-600 my-4 flex flex-col justify-between h-full'>
        <p className="mb-6">Im optimalen Fall findet das Mähen direkt im Anschluss an die Rehkitzsuche statt.</p>
        <p className="mb-6">Nach der Mahd werden die gefunden Tier an Ort und Stelle wieder freigelassen. Die Rehkitze und ihre zugehörigen Muttertiere (Ricken) finden durch Ruflaute relativ schnell wieder zueinander. Oft verlässt die Ricke nicht einmal die nähere Umgebung des Geschehens.</p>

       <p className="mb-6"> Ein Team besteht in der Regel aus vier Personen, einem Drohnenpiloten, einem Beobachter, gleichzeitig Einweiser sowie zwei Helfern, die mit dem Bergen der Tiere die wesentliche Aufgabe übernehmen. In einzelnen Fällen, besonders bei großen Flächen oder unübersichtlichem Gelände ist ein zweites Helferteam erforderlich.</p>

        <p>Jeder Einsatz wird protokolliert. Der Landwirt oder der zuständige Jagausübungsberechtigte erhält eine Durchschrift des Protokolls (s. Dokumentation).</p>
        </div>
        <img src={RehkitzRettung} className='lg:w-1/3'/>
      </div>
    </div>
  )
}

export default Intro;