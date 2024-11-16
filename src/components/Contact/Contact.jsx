import React, { useEffect } from 'react'
import "../Contact/Contact.css"
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from "yup"
export default function Contact() {


    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Contact")

    const yupSchema = Yup.object().shape({
        name: Yup.string().required().min(5).max(15) ,
        age: Yup.number().required().min(18).max(80),
        email: Yup.string().email().required().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,"Email is not Valid"),
        password: Yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Password is not Valid"),
    })

    const formic = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            password: "",
        },
        validationSchema : yupSchema
    })



    return (
        <>
            <div className="contact flex flex-col justify-center items-center mt-28">
                <div className="title flex flex-col justify-center items-center">
                    <div className="text mt-8">
                        <h2 className=' font-bold mb-2 '>CONTACT COMPONENT</h2>
                        <div className="flex items-center justify-center mb-3">
                            <div className="line me-3"  ></div>
                            <i className="star fa-solid fa-star"></i>
                            <div className="line ms-3" ></div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={formic.handleSubmit} className="lg:max-w-2xl max-w-md  mx-auto mt-28 mb-72">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.name} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>

                {
                    formic.errors.name &&
                    <div className="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formic.errors.name}
                    </div>
                }

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.age} type="number" name="age" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_age" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                </div>

                {
                    formic.errors.age &&
                    <div className="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formic.errors.age}
                    </div>
                }

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                {
                    formic.errors.email &&
                    <div className="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formic.errors.email}
                    </div>
                }

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>

                {
                    formic.errors.password &&
                    <div className="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formic.errors.password}
                    </div>
                }


                <button type="submit" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
        </>
    )
}
