import React from 'react';

const ContentTemplate = ({object}) => {
  return (
    <div className="mx-16 my-32 lg:my-48 lg:mx-44">
          <h2 className="text-center text-3xl tracking-wide text-slate-600 mb-16">{object.title}</h2>
          {/* <div className='lg:flex'> */}
              <div className='lg:mr-8'>
                {object.paragraphs.map(paragraph => (
                    <p className="text-base text-justify text-slate-600 mb-4">{paragraph}</p>
                ))}
              </div>
              {/* <div className={`lg:w-[40vw] bg-[url('../../src/assets/${object.image}')] bg-center`}>
              </div> */}
          {/* </div> */}
    </div>
  )
}

export default ContentTemplate