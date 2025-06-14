import React from "react";

const UserLogin = function () {
    return (
        <div className="p-7">
            <form>
                <h3 className="text-xl mb-2">What's your Email</h3>
                <input
                    type="email"
                    className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-base"
                    required
                    placeholder="email@example.com"

                />

                <h3>Enter Password</h3>
                <input
                    type="password"
                    required
                    placeholder="password"
                />

                <button>Login</button>
            </form>
        </div>
    )
}

export default UserLogin;