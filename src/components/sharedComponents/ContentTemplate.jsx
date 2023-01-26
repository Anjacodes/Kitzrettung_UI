import React from 'react';

const ContentTemplate = ({object}) => {
  return (
    <div className="mx-12 my-32 lg:my-48 lg:mx-44">
          <h2 className="text-center text-3xl tracking-wide text-slate-600 mb-16">{object.title}</h2>
              <div>
                {React.Children.toArray(
                   object.paragraphs.map(paragraph => (
                    <div className="font-avenirLight text-base text-justify text-slate-600 mb-4">{paragraph}</div>
                )))}
              </div>
    </div>
  )
}

export default ContentTemplate