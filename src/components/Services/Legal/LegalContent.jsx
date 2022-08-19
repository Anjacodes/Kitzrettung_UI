import React from 'react';
import Hunter from '../../../assets/Hunter.jpg';
import Field from '../../../assets/Appalachians.jpg';

function LegalContent() {
  return (
    <div className="mx-20 my-48 lg:mx-52">
      <h2 className="mb-6 text-2xl tracking-wide">RECHTLICHES</h2>
      <div className='mt-12 lg:flex'>
        <img src={Field} className='lg:w-1/3'/>
       <div className='lg:ml-12 text-base text-justify text-slate-600 my-4'>
          <h3>1. Verantwortung für Schäden durch den Einsatz landwirtschaftlicher Maschinen</h3>
          <p className="mb-6">Grundsätzlich gilt auch beim Einsatz landwirtschaftlicher Maschinen das Verursacherprinzip. Daher ist der Landwirt bzw. der Maschinenführer auch für die Schäden nach § 1 Tierschutzgesetz verantwortlich. Dieser Paragraf bestimmt, dass niemand ohne vernünftigen Grund, Tieren Leiden und Schmerzen zufügen darf. Durch mehrere Gerichtsurteile klargestellt ist, dass das Mähen von Wiesen ohne vorherige Schutzvorkehrungen keinen vernünftigen Grund darstellt Tiere zu töten oder zu verletzen. Nach der Rechtsprechung hat der Landwirt alle möglichen und zumutbaren Maßnahmen zu ergreifen, um das Verletzen oder Töten von Tieren durch den Mähvorgang zu vermeiden.</p>

          <p className="mb-6">Für den zuständigen Jagdausübungsberechtigten kommt zwar aufgrund der Hegepflicht nach § 1 Bundesjagdgesetz eine Mitwirkungspflicht in Betracht, eine alleinige Verantwortung hat er, auch wenn er durch den Landwirt über den Mähtermin informiert wird, nicht. Zur Hege gemäß Bundesjagdgesetz sind im Übrigen auch die Grundeigentümer der Flächen verpflichtet, da diesen per Gesetz das Jagdrecht auf seinen Flächen zusteht.</p>

       </div>
      </div>
      <div className='lg:flex mt-12 h-full'>
        <div className='lg:mr-12 text-base text-justify text-slate-600 my-4 flex flex-col justify-between h-full'>
        <h3>2. Rehkitzrettung als Wilderei</h3>
        <p className="mb-6">Da das Finden von Wild mittels Drohnen und das anschließende Aufsuchen und Bergen von z. B. Rehkitzen auch zum Nachstellen von Wild gehört, erfüllt dies, sofern fremdes Jagdrecht verletzt wird, den Tatbestand der Jagdwilderei nach § 292 Strafgesetzbuch.</p>
        <p className="mb-6">Es ist daher für den Einsatz unserer Teams unabdingbar, dass für jede Mission die Zustimmung des zuständigen Jagdausübungsberechtigten vorliegt. Dies muss durch den jeweiligen Anforderer unserer Leistungen, sofern er nicht selbst der zuständige Jagdausübungsberechtigte ist, sichergestellt sein.</p>
        </div>
        <img src={Hunter} className='lg:w-1/3'/>
      </div>
      <p className='bg-slate-600 text-lg text-justify text-white p-6 mt-20'>Alles Rechtliche hin oder her. Es liegt im Interesse aller Beteiligten, das Ausmähen von Tieren zu vermeiden. Lassen Sie uns im Sinne eines gemeinsamen Ziels konstruktiv zusammenarbeiten. Streitigkeiten über Zuständigkeiten, Pflichten und rechtliche Gegebenheiten sind kontraproduktiv und vermindern zu keinem Teil das Tierleid. </p>
    </div>
  )
}

export default LegalContent