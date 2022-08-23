import React from 'react'
import Drohne from '../../../assets/Drohne_Tisch.jpg'

function TechnikContent() {
  return (
    <div className="mx-20 my-48 lg:mx-52">
    <h2 className="mb-6 text-2xl tracking-wide">UNSERE TECHNIK</h2>
    <p className="text-base text-justify text-slate-600 my-4">Unser Verein nutzt Drohnen der Firmen DJI und Yuneec. Diese Drohnen verfügen über eine Echtbildkamera mit großem Zoom in Verbindung mit einer Wärmebildkamera. Die Wärmebildkameras besitzen Auflösungen von 320x160 Pixeln oder 640x320 Pixeln. </p>
    <div className='mt-12 lg:flex'>
      <img src={Drohne} className='lg:w-1/3'/>
      <div className='lg:ml-12 text-base text-justify text-slate-600 my-4 lg:w-2/3'>
        <p className="mb-6">Wärmebildkameras sind in der Lage Temperaturunterschiede festzustellen und diese nach digitaler Berechnung als Bilder darzustellen. Je höher die Auflösung einer Wärmebildkamera, desto feiner und detailgetreuer ist das Bild.</p>

        <p className="mb-6">Die Feststellung der Temperaturunterschiede gelingt bei größeren Temperaturunterschieden besser als bei kleineren. Daher werden durch uns Drohneneinsätze zum Auffinden von Tieren in den frühen Morgenstunden favorisiert. Dann sind Boden und Bewuchs noch gleichmäßig kühl und die Körper von z. B. Rehkitzen heben sich aufgrund der deutlich höheren Temperatur deutlich ab. Grundsätzlich sind aber auch andere Tageszeiten möglich (besonders bei bedecktem Himmel). Dann müssen aber gegebenenfalls Abstriche bei der Flächenleistung und der Zuverlässigkeit gemacht werden. </p>

        <p className="mb-6">Die von uns eingesetzte Technik ermöglicht Flughöhen zwischen 50 und 80 Metern.</p>

        <p className="mb-6">Die zu kontrollierenden Flächen werden nach einem berechneten Schema in Streifen mit vorgegebener Überlappung abgeflogen.</p>

        <p className="mb-6">Die Flugdauer ist aufgrund der Akku-Leistungen auf etwa 20 Minuten beschränkt (nach Akku-Wechsel geht es aber weiter).</p>
     </div>
    </div>
  </div>
  )
}

export default TechnikContent