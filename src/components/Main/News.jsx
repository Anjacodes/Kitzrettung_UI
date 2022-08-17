import React from 'react';
import posts from './blogPosts';

function News() {
  return (
    <section className="mt-28 hidden">
      <h2 className="mb-12 text-2xl text-slate-700 tracking-wide">NEUIGKEITEN</h2>

      <div className="lg:grid lg:grid-cols-3 lg:gap-20 w-full md:grid md:grid-cols-2 md:gap-20">
        {posts.map(post => {
          return (
            <article className="mb-20 lg:mb-0" key={post.id}>
              <img src={post.imageURL} className="w-full h-80"/>
              <h3 className="text-lg mt-4">{post.title}</h3>
              <div className="flex items-center text-sm text-slate-500 my-3">
                <p className="mr-6">{post.info.dateCreated}</p>
                <p><i className="fa-solid fa-eye"></i> {post.info.views}</p>
              </div>
              <p className="text-base text-justify">{post.text}</p>
              <button className="bg-first py-2 px-10 rounded-xl text-base text-white mt-6 hover:bg-third">Read More</button>
            </article>
          )
        })}
      </div>
        <p className="text-center mt-20 lg:mt-32 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR ALLE NEUIGKEITEN AN  <i className="fa-solid fa-arrow-right-long"></i></p>
    </section>
  )
}

export default News