import React from "react";
import logo from "../../assets/big-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-50">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="md:col-span-1">
            <div className="flex mb-6 md:mb-0 flex-col">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src={logo}
                  className=" me-3 h-16 w-16"
                  alt="FlowBite Logo"
                />
                <span className="self-center  font-bold whitespace-nowrap text-sky-600 text-6xl">
                  Tradiant.
                </span>
              </a>

              <p className=" p-5 text-gray-600 text-sm leading-6 space-x-1">
                Maximize your investment in the capital <br /> market world with
                the convenience and <br /> various features provided by
                Tradiant.
              </p>

              <p className="pl-5 text-gray-600 text-base leading-6 space-x-1 ">
                Montso Matlaletsa
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 md:col-span-2 ">
            <div>col 1</div>
            <div>col 2</div>
            <div>col 3</div>
            <div>col 4</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
