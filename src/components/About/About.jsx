import React, { useEffect } from 'react'
import "../About/About.css"
export default function About() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("About")
    return (
        <>
            <div className="about flex flex-col justify-center items-center mt-24 pt-80">
            <div className="title flex flex-col justify-center items-center">
                <div className="text">
                <h2 className=' text-white font-bold mb-3'>ABOUT COMPONENT</h2>
                <div className="flex items-center justify-center mb-3">
                <div  className="line me-3"  ></div>
                    <i className="star fa-solid fa-star"></i>
                <div className="line ms-3" ></div>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 m-4">
                <div className="content text-white col-span-12 md:col-span-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="content text-white col-span-12 md:col-span-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            </div>
        </>
    )
}
