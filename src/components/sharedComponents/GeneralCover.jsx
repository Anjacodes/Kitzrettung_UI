import React from 'react'
import { useLocation } from 'react-router-dom';

function GeneralCover() {

  const pathName = useLocation();
  const current = pathName.pathname.slice(1);

  return (
    <div className={`h-[25vh] lg:h-[40vh] ${current === "arbeit" ? 'bg-arbeit' : (current === "verfahren") ? 'bg-verfahren' : (current === "rechtliches") ? 'bg-rechtliches' : (current === "motivation") ? 'bg-motivation' : (current === "kosten") ? 'bg-kosten' : (current === "kontakt") ? 'bg-kontakt' : (current === "verein") ? 'bg-verein' : (current === "galerie") ? 'bg-galerie' : (current === "spenden") ? 'bg-spende' : (current === "biologie") ? 'bg-biologie' : (current === "technik") ? 'bg-technik' : 'bg-blog'} bg-no-repeat bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center bg-center`}>
    </div>
  )
}

export default GeneralCover;