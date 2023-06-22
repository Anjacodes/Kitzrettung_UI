import React, { useState } from 'react';
import blogPosts from '../Main/blogPosts';
import GeneralCover from '../sharedComponents/GeneralCover';
import { useNavigate, useLocation } from 'react-router-dom';

const PostDetail = () => {
    const navigate = useNavigate();
    const pathName = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = window.innerWidth <= 768; 

    const openPost = (id) => {
        const post = blogPosts.find((post) => post.id === id);
        console.log(id);
        return post;
    };

    const post_id = parseInt(pathName.pathname.slice(-1));
    const post = openPost(post_id);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <GeneralCover />
            <i className="fa-solid fa-arrow-left text-second ml-12 mt-12 text-6xl hover:cursor-pointer hover:text-third" onClick={() => navigate(-1)}></i>
            <div className={`mx-12 my-32 lg:mb-48 lg:mt-16 lg:mx-44 flex flex-col items-center justify-center`} onClick={toggleExpansion}>
                <p className="text-lg self-start mb-6">{post.info.dateCreated}</p>
                <h1 className="text-4xl font-bold mb-2 self-start">{post.title}</h1>
                <img src={post.imageURL} className={`${isMobile ? 'hover:cursor-zoom-in' : 'hover:cursor-default'} w-full mb-6 ${isExpanded && isMobile ? 'h-screen fixed top-0 z-50' : ''}`} />
            </div>
        </>
    );
};

export default PostDetail;
