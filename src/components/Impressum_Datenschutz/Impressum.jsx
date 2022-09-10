import React from 'react'
import GeneralCover from '../sharedComponents/GeneralCover';

function Impressum() {
  return (
    <div>
      <GeneralCover />
      <div className="mx-16 my-48 lg:mx-52 text-base text-justify text-slate-600">
        <h2 className='mb-6 text-2xl tracking-wide'>IMPRESSUM</h2>

        <h3 className='mb-3'>Verantwortlich für den Inhalt:</h3>
        <ul className='mb-10'>
          <li>Rehkitzrettung Kreis Euskirchen e.V.</li>
          <li>Hanna-Nagel-Str. 12</li>
          <li>53879 Euskirchen</li>
          <li className='mb-3'>Telefon: 0151 74254953</li>
          <li>eMail: <a href="mailto:vorstand@rehkitzrettung-euskirchen.de" className='hover:text-blue-600'>vorstand@rehkitzrettung-euskirchen.de</a></li>
          <li>Internet: <a href="www.rehkitzrettung-euskirchen.de" className='hover:text-blue-600'>www.rehkitzrettung-euskirchen.de</a></li>
          <li className='mt-6'>Vertretungsberechtig sind zwei Mitglieder des Vorstands </li>
        </ul>

        <h3 className='mb-3'>Registergericht:</h3>

       <ul className='mb-6'>
         <li>Amtsgericht Bonn</li>
         <li>Vereinsnummer: VR 11878</li>
         <li>Steuer-ID-Nr.: 209/5728/0782</li>
         <li>Die Gemeinnützigkeit des Vereins wurde vom Finanzamt Euskirchen anekannt und bestätigt.</li>
         <li>Für die Inhalte auf dieser Webseite ist der Vorstand verantwortlich.</li>
       </ul>

       <h3 className='mb-3'>Fotos:</h3>

       <ul className='mb-6'>
         <li>Urhebungsrechte und Copyright der veröffentlichten Bilder und Videos liegen beim Verein Rehkitzrettung Kreis Euskirchen e.V.</li>

         <li className='mt-3'>Unsere Satzung finden Sie hier (Link)</li>
       </ul>

        <h3 className='mb-3'>Rechtlicher Hinweis:</h3>

        <p>Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Ausbringung eines Links die Inhalte der gelinkten Seite unter Umständen mit zu verantworten hat. Dies kann, so das LG, nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Wir erklären hiermit ausdrücklich, dass wir keinen Einfluss auf die Gestaltung und den Inhalt der gelinkten Seiten haben. Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten dieser Homepage und macht sich deren Inhalt nicht zu Eigen. Diese Erklärung gilt für alle auf dieser Page angezeigten Links und für alle Inhalte der Seiten, zu denen die hier aufgeführten Links führen.
        </p>
      </div>
    </div>
  )
}

export default Impressum;