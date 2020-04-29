import React from "react";
import PropTypes from "prop-types";
import icon from "./edit.svg";
menu.propTypes = {};

function menu(props) {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img
          className="w-8 h-8 m-2 hover:-mt-1 rounded-tl-2xl rounded-br-2xl cursor-pointer transition transform hover:scale-125 duration-500"
          src={icon}
        ></img>
        <span class="font-semibold text-2xl text-black tracking-tight">
          Notee
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-black hover:text-white hover:border-white  hover:bg-white">
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-lighter hover:text-black mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-lighter hover:text-black mr-4"
          >
            Todo List
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-lighter hover:text-black"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-2xl px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
}

export default menu;
