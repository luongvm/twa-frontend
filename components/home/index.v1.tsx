import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Hero from "./Hero";
import LogoCloud from "./LogoCloud";
import Product from "./Product";
import Team from "./Team";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white isolate">
      <div className="absolute inset-x-0 overflow-hidden -z-10 transform-gpu blur-3xl">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        {/* Hero section */}
        <Hero />

        {/* Logo Cloud */}
        <LogoCloud />

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden">
          <div className="py-24 overflow-hidden bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                      Deploy faster
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      A better workflow
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                    <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              className="absolute w-5 h-5 text-indigo-600 top-1 left-1"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="mt-0">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-flow-col-dense">
                <div className="max-w-xl px-4 mx-auto lg:pl-8 lg:pt-4 sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                      Deploy faster
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      A better workflow
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                    <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              className="absolute w-5 h-5 text-indigo-600 top-1 left-1"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="lg:col-start-1">
                  {/* <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.pngl
                    alt="Product screenshot"
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                  /> */}
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What we do */}
        <Product />
        {/* Gradient Feature Section */}
        {/* <Team /> */}
      </main>
    </div>
  );
}
