/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";
const AboutUs = () => {
  return (
    <div className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="flex flex-col px-6 mx-auto mt-8 max-w-7xl lg:px-8">
        {/* Meet the Team */}

        {/* Section Header */}
        <div className="flex flex-wrap justify-center mb-24 text-center">
          <div className="w-full px-4 lg:w-6/12">
            {/* Header */}
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Meet the Team
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-700">
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
        </div>
        {/* Team Members */}
        <div className="flex flex-wrap">
          {/* Member #1 */}
          <div className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  alt="Avatar"
                  className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                  src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                />
              </a>
              {/* Details */}
              <div className="mt-6 text-center">
                {/* Name */}
                <h1 className="mb-1 text-xl font-bold text-gray-900">
                  Luong Vu
                </h1>
                {/* Title */}
                <div className="mb-2 text-base text-gray-700">CTO</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                  {/* Linkedin */}
                  <a
                    href="#"
                    className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                  >
                    <Icon
                      className="mx-auto mt-2 text-indigo-500"
                      icon={"mdi-linkedin"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #2 */}
          <div className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  alt="Avatar"
                  className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                  src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                />
              </a>
              {/* Details */}
              <div className="mt-6 text-center">
                {/* Name */}
                <h1 className="mb-1 text-xl font-bold text-gray-900">
                  Nghia Than
                </h1>
                {/* Title */}
                <div className="mb-2 text-base text-gray-700">
                  Front-end Leader
                </div>
                {/* Social Icons */}
                <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                  {/* Linkedin */}
                  <a
                    href="#"
                    className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                  >
                    <Icon
                      className="mx-auto mt-2 text-indigo-500"
                      icon={"mdi-linkedin"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #3 */}
          <div className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  alt="Avatar"
                  className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                  src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                />
              </a>
              {/* Details */}
              <div className="mt-6 text-center">
                {/* Name */}
                <h1 className="mb-1 text-xl font-bold text-gray-900">
                  Quan Khong
                </h1>
                {/* Title */}
                <div className="mb-2 text-base text-gray-700">Team Memeber</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                  {/* Linkedin */}
                  <a
                    href="#"
                    className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                  >
                    <Icon
                      className="mx-auto mt-2 text-indigo-500"
                      icon={"mdi-linkedin"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #4 */}
          <div className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  alt="Avatar"
                  className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                  src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                ></img>
              </a>
              {/* Details */}
              <div className="mt-6 text-center">
                {/* Name */}
                <h1 className="mb-1 text-xl font-bold text-gray-900">
                  Doesn't matter
                </h1>
                {/* Title */}
                <div className="mb-2 text-base text-gray-700">
                  Will be fired
                </div>
                {/* Social Icons */}
                <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                  {/* Linkedin */}
                  <a
                    href="#"
                    className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                  >
                    <Icon
                      className="mx-auto mt-2 text-indigo-500"
                      icon={"mdi-linkedin"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
