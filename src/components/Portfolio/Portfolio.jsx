import React, { useEffect, useState } from 'react'
import "../Portfolio/Portfolio.css"
import photo1 from "../../assets/poert1.png"
import photo2 from "../../assets/port2.png"
import photo3 from "../../assets/port3.png"
export default function Portfolio() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Portfolio")

const [selectedImage, setSelectedImage] = useState(null)
    function openPhoto(image) {
        setSelectedImage(image)
    }
    function closePhoto(){
        setSelectedImage(null)
    }
    return (
        <>
            <div className="portfolio flex flex-col justify-center items-center mt-28">
                <div className="title flex flex-col justify-center items-center">
                    <div className="text mt-8">
                        <h2 className=' font-bold mb-2 '>PORTFOLIO COMPONENT</h2>
                        <div className="flex items-center justify-center mb-3">
                            <div className="line me-3"  ></div>
                            <i className="star fa-solid fa-star"></i>
                            <div className="line ms-3" ></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="cards-group grid grid-cols-12 lg:grid-cols-3 md:grid-cols-2 gap-12 mb-16 ">
                    <div onClick={()=>openPhoto(photo1)} className="card  cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo1} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    <div onClick={()=>openPhoto(photo2)} className="card cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo2} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    <div onClick={()=>openPhoto(photo3)} className="card cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo3} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    <div onClick={()=>openPhoto(photo1)} className="card  cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo1} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    <div onClick={()=>openPhoto(photo2)} className="card cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo2} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    <div onClick={()=>openPhoto(photo3)} className="card cursor-pointer rounded-lg relative col-span-12 md:col-span-1 group overflow-hidden">
                        <img src={photo3} className="w-full rounded-lg" alt="home pic" />
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500">
                            <i className="fa-solid fa-plus text-white text-8xl"></i>
                        </div>
                    </div>
                    
                </div>
                </div>
                {
                selectedImage && (
                    <div
                        className="floating-photo fixed inset-0 bg-blue-600 bg-opacity-50 flex justify-center items-center z-50"
                        onClick={closePhoto}
                    >
                        <img src={selectedImage} className="max-w-xl max-h-screen rounded-lg" alt="Full size" />
                    </div>
                )}
                </div>
            
        </>
    )
}
