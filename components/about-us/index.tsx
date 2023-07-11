/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Avatar from "./assets/images/avatar/avatar.png";
//Avatar gen by https://www.avatartion.com/
import Avatar_1 from "./assets/images/avatar/avatar_(1).png";
import Avatar_2 from "./assets/images/avatar/avatar_(2).png";
import Avatar_3 from "./assets/images/avatar/avatar_(3).png";
import Avatar_4 from "./assets/images/avatar/avatar_(4).png";
import Avatar_5 from "./assets/images/avatar/avatar_(5).png";
import Image from "next/image";

const teams = [
  {
    name: "Luong Vu",
    role: "CTO",
    linkedin: "https://www.linkedin.com/in/luongvm183/",
    github: "https://github.com/luongvm",
    image: Avatar,
  },
  {
    name: "Nghia Than",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/nghiatv/",
    github: "http://github.com/nghiatv",
    image: Avatar_1,
  },
  {
    name: "Quan Khong",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/quankm/",
    github: "https://github.com/quanKM",
    image: Avatar_3,
  },
  {
    name: "Tung Do",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/tungdotien/",
    github: "https://github.com/dotungvp1994",
    image: Avatar_4,
  },
  {
    name: "Dai Pham",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/daipm/",
    github: "https://github.com/Friend13th",
    image: Avatar_2,
  },
  {
    name: "Nghia Nguyen",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/nghia-nguyen-19b3a4183/",
    behance: "https://www.behance.net/hipwon",
    github: "",
    image: Avatar_5,
  },
];

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

      <div className="flex flex-col mx-auto max-w-7xl ">
        {/* Meet the Team */}

        {/* Section Header */}
        <div className="flex flex-wrap justify-center mb-24 text-center">
          <div className="w-full px-4 lg:w-6/12">
            {/* Header */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the Team
            </h1>
            {/* Description */}
            <p className="mt-2 text-lg leading-8 text-gray-600">
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap">
          {teams.map((member) => (
            <div
              className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4"
              key={member.name}
            >
              <div className="flex flex-col">
                {/* Avatar */}
                <a href="#" className="mx-auto">
                  <Image
                    alt="Avatar"
                    className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                    src={member.image}
                    height={294}
                    width={320}
                  />
                </a>
                {/* Details */}
                <div className="mt-6 text-center">
                  {/* Name */}
                  <h1 className="mb-1 text-xl font-bold text-gray-900">
                    {member.name}
                  </h1>
                  {/* Title */}
                  <div className="mb-2 text-base text-gray-700">
                    {member.role}
                  </div>
                  {/* Social Icons */}
                  <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                    {/* Linkedin */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                      >
                        <Icon
                          className="mx-auto mt-2 text-indigo-500"
                          icon={"mdi-linkedin"}
                        />
                      </a>
                    )}
                    {member?.github && (
                      <a
                        href={member.github}
                        className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                      >
                        <Icon
                          className="mx-auto mt-2 text-indigo-500"
                          icon={"mdi-github"}
                        />
                      </a>
                    )}
                    {member?.behance && (
                      <a
                        href={member.behance}
                        className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                      >
                        <Icon
                          className="mx-auto mt-2 text-indigo-500"
                          icon={"mdi-dribbble"}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
