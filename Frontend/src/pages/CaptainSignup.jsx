import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = function () {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { captain, setCaptain } = React.useContext(CaptainDataContext);


    const submitHandler = async (e) => {
        e.preventDefault()

        const captainData = {
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                type: vehicleType, 
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your Name Mr. Captain</h3>
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

                    <h3 className="text-lg font-medium mb-2">What's your Email Mr. Captain</h3>
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

                    <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg placeholder:text-base"
                            required
                            placeholder="Vehicle Color"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                            type="text"
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg placeholder:text-base"
                            required
                            placeholder="Vehicle Plate"
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4 mb-7">
                        <input
                            type="Number"
                            min="1"
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg placeholder:text-base"
                            required
                            placeholder="Vehicle Capacity"
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select
                            className="bg-[#eeeeee] w-1/2 rounded py-2 px-4 border text-lg"
                            required
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>

                    <button
                        className="bg-[#111] text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg"
                    >
                        Create Captain Account
                    </button>

                </form>
                <p className="text-center">Already have an account? <Link to="/captain-login" className="text-blue-600">Login Here</Link></p>
            </div>

            <div>
                <p className="text-[12px] leading-tight">
                    This site is protected by reCAPTCHA and the <span className="underline">Google privacy policy</span> and <span className="underline">Terms of Services apply</span>.
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup;