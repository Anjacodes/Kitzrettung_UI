import React from 'react'
import Arbeit from '../../../assets/arbeit.jpg'
import vorstandsmitglieder from './vorstandsmitglieder'
import satzung from '../../../assets/Vereinssatzung-Rehkitz.pdf'

function AssociationContent() {

  return (
    <div className="mx-20 my-48 lg:mx-52 text-base text-justify text-slate-600">
      <h2 className="mb-6 text-2xl tracking-wide">UNSER VEREIN</h2>
      <p className="my-4">In den letzten zwei Jahren wurde die Rehkitzrettung durch privates Engagement verschiedener Mitglieder des jetzigen Vereins im Raum Bad Münstereifel und Euskirchen durchgeführt. Dabei wurden für die Beschaffung und den Betrieb einer Wärmebilddrohne nur private finanzielle Mittel genutzt und in 15 Missionen über 25 Rehkitze gerettet.</p>

      <p className="mb-6">Leider mussten auch viele Anfragen aufgrund der limitiert verfügbaren Technik (es stand nur eine Drohne zur Verfügung) zurückgewiesen werden. Wir gehen daher davon aus, dass weitere Kitze hätten gerettet werden können.</p>

      <p className="mb-10">Um die Idee der Rehkitzrettung mit Wärmebilddrohnen weiter zu verbreiten und um insbesondere die Anschaffung weiterer Drohnen finanzieren zu können (eine gut geeignete Drohne kostet derzeit rund 6.500 Euro), haben wir diesen Verein gegründet. Wir hoffen darauf, so eine Vielzahl weiterer Tiere vor dem Tod durch landwirtschaftliche Maschinen retten zu können.</p>

      <a href={satzung} target="_blank" rel="noreferrer" className='bg-first hidden py-2 px-3 lg:px-6 rounded-xl text-base text-white hover:bg-third '>Vereinssatzung ansehen</a>


      <div className='mt-40'>

        <h3 className='mb-12 text-2xl tracking-wide'>VORSTAND</h3>

        {vorstandsmitglieder.map(mitglied => {
          return (
            <ul className='text-justify text-base mb-10 rounded-lg border border-solid bg-slate-100 p-4 lg:p-10'>
              <li className='text-xl font-avenirHeavy tracking-wide text-slate-700 mb-2'>{mitglied.funktion.toUpperCase()}</li>
              <li className='font-avenirLight'><a>{mitglied.name}</a></li>
              <li className='font-avenirLight'>{mitglied.email}</li>
              <li className='mt-10'><h4 className='text-lg font-avenirHeavy mb-2 text-slate-600'>Aufgaben:</h4></li>
              {mitglied.aufgaben.map(aufgabe => {
                return (
                  <ul className='mb-3 lg:flex'>
                    <li className='lg:w-1/5 font-avenirHeavy text-slate-600'>{aufgabe.titel}:</li>
                    <li className='lg:w-4/5 font-avenirLight'>{aufgabe.inhalt}</li>
                  </ul>
                )
              })}
            </ul>
          )
        })}

      </div>
    </div>
  )
}

export default AssociationContent