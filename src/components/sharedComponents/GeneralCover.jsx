import React from 'react'
import { useLocation } from 'react-router-dom';

function GeneralCover() {
  const pathName = useLocation();
  const current = pathName.pathname.slice(1).trim();

  console.log(current);

  return (
    <div className={`h-[50vh] bg-[url('../../src/assets/${current}.jpg')] bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center bg-center`}>
    </div>
  )
}

export default GeneralCover;