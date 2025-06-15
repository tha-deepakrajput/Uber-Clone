import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = function () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()

        setCaptainData({
            email: email,
            password: password,
        });

        setEmail('')
        setPassword('')
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your Email</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
                        required
                        placeholder="email@example.com"

                    />

                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        type="password"
                        className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder="password"
                    />

                    <button
                        className="bg-[#111] text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg"
                    >
                        Login
                    </button>

                </form>
                <p className="text-center">Join a fleet? <Link to="/captain-signup" className="text-blue-600">Register as a Captain</Link></p>
            </div>

            <div>
                <Link
                    to="/login"
                    className="bg-[#254D70] flex items-center justify-center text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg"
                >Sign in as User
                </Link>
            </div>
        </div>
    )
}

export default CaptainLogin;