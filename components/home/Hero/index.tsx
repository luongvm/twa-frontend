/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";

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
            Semi-Professional Teams That Delivers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are <em className="text-gray-500">(somewhat)</em> experienced
            designers and developers who are passionate about getting your ideas
            off the ground. We work <u>collaboratively</u> with you to
            understand your business needs and give you a realistic goal that
            we'll achieve together.{" "}
            <a href="mailto:me@luongvu.com" className="font-bold">
              Let's talk!
            </a>
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact us
            </Link>
            <Link
              href="/projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
