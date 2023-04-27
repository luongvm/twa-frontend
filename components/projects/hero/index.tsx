/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}
    >
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Thewebmasters.agency
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We work collaboratively with you to understand your business needs
            and deliver customized solutions that meet your goals and exceed
            your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
