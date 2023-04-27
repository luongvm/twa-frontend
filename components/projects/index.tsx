import Image from "next/image";
import Hero from "./hero";
import MainNav from "./MainNav";
const projects = [
  {
    title: "Leazo",
    href: "http://leazo.vn/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "E-Commerce", href: "#" },
    image: require("../../assets/projects/leazo.png"),
  },
  {
    title: "VicPartners",
    href: "https://vic.partners/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image: require("../../assets/projects/vic-partners.png"),
  },
  {
    title: "CruiseBook",
    href: "https://www.cruise-book.com/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image: require("../../assets/projects/cruise-book.png"),
  },
  {
    title: "WEEHOURS",
    href: "https://weehours.vn/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "E-Commerce", href: "#" },
    image: require("../../assets/projects/weehours.png"),
  },
  {
    title: "Curnon Watch",
    href: "https://curnonwatch.com/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "E-Commerce", href: "#" },
    image: require("../../assets/projects/curnon-watch.png"),
  },
];
export default function Home() {
  return (
    <div className="bg-white isolate">
      {/* <div className="absolute inset-x-0 overflow-hidden -z-10 transform-gpu blur-3xl">
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
      </div> */}

      <MainNav />

      <main>
        {/* Hero section */}
        <Hero />

        <section className="mt-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              #Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8">
            {projects.map((product, index) => (
              <a
                key={String(index)}
                className="relative group"
                href={product.href}
              >
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    alt="Product image"
                    src={product.image}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
