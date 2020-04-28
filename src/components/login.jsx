import React from "react";
import PropTypes from "prop-types";

login.propTypes = {};

function login(props) {
  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="w-48 mx-auto pt-6 border-b-2 border-indigo-500 text-center text-4xl text-indigo-700">
          LOGIN ACCOUNT
        </h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8">
            <form
              method="POST"
              className=""
              action="#"
              onsubmit="return false;"
            >
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Username Or Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  placeholder="Username Or Email"
                />
              </div>
              <div className="mb-5">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <a href="#" className="font-medium text-indigo-500">
              Register
            </a>
            <a href="#" className="text-gray-600">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
