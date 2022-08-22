import React from 'react'
import { Link } from 'react-router-dom'
import Arbeit from '../../../assets/arbeit.jpg'
import Rehkitz from '../../../assets/RehkitzSchaut.jpg'

function MotivationContent() {
  return (
    <div className="mx-20 my-48 lg:mx-52">
      <h2 className="mb-6 text-2xl tracking-wide">UNSERE MOTIVATION</h2>
      <p className="text-base text-justify text-slate-600 my-4">Jedes Jahr verlieren in Deutschland ca. 100.000 Rehkitze während der Grasmahd im Frühjahr durch den Einsatz der landwirtschaftlichen Maschinen ihr Leben, oder werden durch die Messer der Maschinen lediglich verstümmelt, was noch wesentlich tragischer ist. Der Tod einer Vielzahl von Individuen weiterer Tierarten, wie zum Beispiel Hasen, Lerchen, Rebhühner und zerstörter Gelege ist ungezählt.</p>
      <div className='mt-12 lg:flex'>
        <img src={Rehkitz} className='lg:w-1/3'/>
        <div className='lg:ml-12 text-base text-justify text-slate-600 my-4 lg:w-2/3'>
          <p className="mb-6">Besonders bei Rehkitzen ist das genetisch geprägte Verhalten während der ersten Lebenswochen Ursache für die hohe Todeszahl (siehe <a href="/biologie" className='text-blue-600 hover:underline'>Biologie</a> der Rehe).</p>

          <p className="mb-6">Neben dem so entstehenden Leid, das schon aus Tierschutzgründen vermieden werden muss, verursachen die Reste der getöteten Tiere eine Verunreinigung des Mähgutes (Heu oder Silage). Dadurch entsteht das sogenannte Gift „Botulinumtoxin“. Dieses führt bei Rindern, Pferden und Schafen, die das verunreinigte Mähgut fressen, zu Vergiftungserscheinungen bis hin zum Tod. So dass hier weiteres Tierleid entsteht.</p>

          <p>Verantwortliche für den Einsatz der Maschinen und den daraus resultierenden Schäden, auch im Sinne des Tierschutzgesetzes sind rechtlich allein die Landwirte, gegebenenfalls in Verbindung mit dem zuständigen Jagdausübungsberechtigten (siehe Rechtliches).</p>
       </div>
      </div>
      <div className='lg:flex mt-12 h-full'>
        <div className='lg:mr-12 text-base text-justify text-slate-600 my-4 flex flex-col justify-between h-full lg:w-2/3'>
          <p className="mb-6">Die rechtliche Situation beschreibt das Problem ganzheitlich betrachtet aber nur sehr beschränkt. Zwar muss der Landwirt alles unternehmen, um das Töten oder Verletzen von Tieren beim Mähen zu vermeiden, aber das Ausbringen von Scheuchen am Vorabend, das Absuchen der Flächen vor der Mahd, gegebenenfalls auch mit Hunden, sind aufwendig und oft wegen Unkenntnis in der Anwendung nur wenig effektiv.</p>

          <p className="mb-6">Diese Methoden bedeuten für den einzelnen Landwirt in der Regel einen erheblichen zeitlichen und finanziellen Aufwand. Daher vertrauen diese nach unserer Erfahrung oft auf die wenig effektiven Methoden oder auf das Glück.</p>

          <p className="mb-6">In diesem Dilemma von Tierwohl und Landwirtschaft eine Lösung anzubieten, ist Aufgabe unseres Vereins.</p>
        </div>
        <img src={Arbeit} className='lg:w-1/3'/>
      </div>
    </div>
  )
}

export default MotivationContent