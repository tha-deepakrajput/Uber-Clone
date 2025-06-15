import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignup = function () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});


    const submitHandler = (e) => {
        e.preventDefault()

        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password,
        });

        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your Name</h3>
                    <div className="flex gap-4 mb-7">
                        <input
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg placeholder:text-base"
                            required
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg placeholder:text-base"
                            required
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">What's your Email</h3>
                    <input
                        type="email"
                        className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
                        required
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        type="password"
                        className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
                        required
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <button
                        className="bg-[#111] text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg"
                    >
                        Login
                    </button>

                </form>
                <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login Here</Link></p>
            </div>

            <div>
                <p className="text-[12px] leading-tight">
                    This site is protected by reCAPTCHA and the <span className="underline">Google privacy policy</span> and <span className="underline">Terms of Services apply</span>.
                </p>
            </div>
        </div>
    )
}

export default UserSignup;