import React from "react";
import PropTypes from "prop-types";

addTodo.propTypes = {};

function addTodo(props) {
  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
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
                  Title
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>
              <div className="mb-5">
                <label
                  for="content"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Content
                </label>
                <input
                  type="text"
                  name="content"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>
            </form>
            <div className="float-right">
              <button className="p-3 ml-4 mb-4 bg-indigo-600 text-white rounded shadow">
                OK
              </button>
              <button className="p-3 ml-4 mb-4 bg-indigo-600 text-white rounded shadow">
                Cancle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addTodo;
