import React from 'react';
import posts from './blogPosts';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function News() {

  const pathName = useLocation();
  const current = pathName.pathname.slice(1);

  return (
    <section className="mt-28">
      <h2 className="text-center text-3xl tracking-wide text-slate-600 mb-16">NEUIGKEITEN</h2>

      <div className="lg:grid lg:grid-cols-3 lg:gap-20 w-full md:grid md:grid-cols-2 md:gap-20">
        {posts.map(post => {
          return (
            <article className="mb-20 lg:mb-0" key={post.id}>
              <Link to={`/blog/${post.id}`}><img src={post.imageURL} className="w-full h-80"/></Link>
              <h3 className="text-lg mt-4">{post.title}</h3>
              <div className="flex items-center text-sm text-slate-500 my-3">
                <p className="mr-6">{post.info.dateCreated}</p>
              </div>
              <p className="text-base text-justify">{post.shortText}</p>
              <Link to={`/blog/${post.id}`} ><button className="bg-first py-2 px-10 rounded-xl text-base text-white mt-6 hover:bg-third">Read More</button></Link>
            </article>
          )
        })}
      </div>
        <NavLink to="/blog" className={`${current == "blog" ? "hidden" : ""}`}><p className="text-center mt-20 lg:mt-32 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR ALLE NEUIGKEITEN AN  <i className="fa-solid fa-arrow-right-long"></i></p></NavLink>
    </section>
  )
}

export default News