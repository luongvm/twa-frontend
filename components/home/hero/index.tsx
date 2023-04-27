/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Thewebmasters.agency
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to our team! We are experienced designers and developers
            with passionate for creating exceptional digital products that help
            your business grow and succeed online. We work collaboratively with
            you to understand your business needs and deliver customized
            solutions that meet your goals and exceed your expectations.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact us
            </Link>
            <a
              href="/projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
