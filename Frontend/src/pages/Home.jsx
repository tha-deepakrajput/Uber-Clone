import React from "react";
import { Link } from "react-router-dom";

const Home = function () {
    return (
        <div>
            <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-8 flex justify-between flex-col">
                <img className="w-16 ml-9" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className="py-4 px-4 bg-white">
                    <h2 className="text-[35px] font-bold">Get Started With Uber</h2>
                    <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;