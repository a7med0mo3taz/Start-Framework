import React, { useEffect } from 'react'
import "../Home/Home.css"

import homePhoto from "../../assets/download.svg"
export default function Home() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Home")
    return (
        <>
            <div className="home flex flex-col justify-center items-center mt-24 pt-44">
                <div className="content flex flex-col justify-center items-center">
                    <img className='w-full mb-10' src={homePhoto} alt="" />
                    <div className="text">
                        <h2 className=' text-white font-bold mb-3'>START FRAMEWORK</h2>
                        <div className="flex items-center justify-center mb-3">
                            <div className="line me-3"  ></div>
                            <i className="star fa-solid fa-star"></i>
                            <div className="line ms-3" ></div>
                        </div>
                    </div>
                    <div className='jops text-white'>Graphic Artist - Web Designer - Illustrator</div>

                </div>
            </div>
        </>
    )
}
