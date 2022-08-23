import React from 'react'
import { useLocation } from 'react-router-dom';

function GeneralCover() {

  const pathName = useLocation();
  const current = pathName.pathname.slice(1);

  return (
    <div className={`h-[50vh] ${current === "arbeit" ? 'bg-arbeit' : (current === "verfahren") ? 'bg-verfahren' : (current === "rechtliches") ? 'bg-rechtliches' : (current === "motivation") ? 'bg-motivation' : (current === "kosten") ? 'bg-kosten' : (current === "kontakt") ? 'bg-kontakt' : 'bg-verein'} bg-no-repeat bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center bg-center`}>
    </div>
  )
}

export default GeneralCover;