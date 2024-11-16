import React from 'react'
import "../Footer/Footer.css"
export default function Footer() {
    return (
        <>
            <div className="footer">
            <div className="card-group grid grid-cols-12 gap-4 m-4">
                <div className="card col-span-12 md:col-span-4">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold">Location</h2>
                        <p className="mb-3">2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="card col-span-12 md:col-span-4">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="text-3xl mb-3">AROUND THE WEB</h2>
                        <div className="social-icons flex gap-4">
                        <div className="icon border rounded-full">
                            <i className="fa-brands fa-facebook p-3"></i>
                        </div>
                        <div className="icon  border rounded-full">
                            <i className="fa-brands fa-twitter p-3"></i>
                        </div>
                        <div className="icon  border rounded-full">
                            <i className="fa-brands fa-linkedin p-3"></i>
                        </div>
                        <div className="icon  border rounded-full">
                        <i className="fa-solid fa-globe p-3"></i>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card col-span-12 md:col-span-4">
                    <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-3">ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="copyright flex justify-center items-center">
                <p>Copyright © Your Website 2021</p>
            </div>
        </>
    )
}
