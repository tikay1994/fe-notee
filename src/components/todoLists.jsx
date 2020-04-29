import React from "react";
import PropTypes from "prop-types";
import trash from "./trash.svg";
import plus from "./plus.svg";
todoLists.propTypes = {};

function todoLists(props) {
  return (
    <div className="container mx-auto">
      <div>
        <ul className="fixed top-0 right-0">
          <li className="mt-2 py-2 w-32 bg-white rounded-lg">
            <img
              class="w-24 h-24 mx-auto rounded-full"
              src="https://picsum.photos/200/300"
            />
            <li className="block mt-2 px-4 py-2 hover:bg-indigo-500 hover:text-white">
              name
            </li>
            <li className="block mt-2 px-4 py-2 hover:bg-indigo-500 hover:text-white">
              logout
            </li>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg-gray-200 mx-auto py-2 border-b-2 text-center text-gray-700 font-semibold uppercase text-4xl">
            TODO sdjsdflk safasfaf asfa asfasfasf sdsdfsdfsdf sdfsdfsdfsdfsdf
            sdfsdfsdfs sdfsdfs sfsdfsd sd
            <img
              className="w-12 h-12 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-75 duration-500"
              src={trash}
            ></img>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg-gray-200 mx-auto py-2 border-b-2 text-center text-gray-700 font-semibold uppercase text-4xl">
            TODO sdjsdflk safasfaf asfa asfasfasf sdsdfsdfsdf sdfsdfsdfsdfsdf
            sdfsdfsdfs sdfsdfs sfsdfsd sd
            <img
              className="w-12 h-12 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-75 duration-500"
              src={trash}
            ></img>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg-gray-200 mx-auto py-2 border-b-2 text-center text-gray-700 font-semibold uppercase text-4xl">
            TODO sdjsdflk safasfaf asfa asfasfasf sdsdfsdfsdf sdfsdfsdfsdfsdf
            sdfsdfsdfs sdfsdfs sfsdfsd sd
            <img
              className="w-12 h-12 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-75 duration-500"
              src={trash}
            ></img>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg-gray-200 mx-auto py-2 border-b-2 text-center text-gray-700 font-semibold uppercase text-4xl">
            TODO sdjsdflk safasfaf asfa asfasfasf sdsdfsdfsdf sdfsdfsdfsdfsdf
            sdfsdfsdfs sdfsdfs sfsdfsd sd
            <img
              className="w-12 h-12 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-75 duration-500"
              src={trash}
            ></img>
          </div>
        </div>
        <img
          className="fixed bottom-0 right-0 w-20 h-20 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-110 duration-500 float-right"
          src={plus}
        ></img>
      </div>
    </div>
  );
}

export default todoLists;
