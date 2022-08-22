import React from 'react'
import DrohneAufTisch from '../../../assets/DrohneAufTisch.jpg'

function ProcedureContent() {
  return (
    <div className="mx-20 my-48 lg:mx-52">
    <h2 className="mb-6 text-2xl tracking-wide">UNSER VERFAHREN</h2>
    <p className="text-base text-justify text-slate-600 my-4">Der Erfolg der Wildtierrettung mit unserem Verfahren hängt von einem hohen Maß an zielgerichteter Organisation und dem Mitwirken aller Betroffenen ab.</p>
    <div className='mt-12 lg:flex'>
      <img src={DrohneAufTisch} className='lg:w-1/3'/>
     <div className='lg:ml-12 text-base text-justify text-slate-600 my-4'>
        <p className="mb-6">Auch wenn aufgrund des Wetters Vorlaufzeiten bis zum Mähtermin oft sehr kurz sind, ist ein Abruf unserer Leistungen spätestens bis 18:00 Uhr am Vorabend erforderlich, um die Teams noch rechtzeitig zusammenstellen zu können.</p>

        <p className="mb-6">Auch weit im Vorfeld können bereits Absprachen getroffen werden, was uns die Planung in jedem Fall erleichtert.</p>

        <p className="mb-6">Die Kontaktaufnahme soll möglichst über die auf der Startseite angegebene Rufnummer erfolgen.</p>

        <p className="mb-6">Es sind in jedem Fall die Anzahl der Flächen mit ungefährer Größe der jeweiligen Fläche mitzuteilen, sowie ein Treffpunkt mit einem Verantwortlichen des Anfordernden zu vereinbaren. Achtung: Beginn der Missionen ist, je nach Auftragsaufkommen, ca. 05:00 Uhr morgens.</p>

        <p className="mb-6">WICHTIG: Sofern Landwirte unsere Leistungen abrufen, ist ausnahmslos die Zustimmung des zuständigen Jagdausübungsberechtigten erforderlich (siehe <a href="/rechtliches" className='text-blue-600 hover:underline'>Rechtliches</a>).</p>

        <p>Im optimalen Fall begleitet er die Mission.</p>
     </div>
    </div>
  </div>
  )
}

export default ProcedureContent;