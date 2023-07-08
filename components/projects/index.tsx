import Image from "next/image";
import Hero from "./Hero";
import { projects } from "../../contants/project";

export default function ProjectsPage() {
  return (
    <div className="bg-white isolate pt-20 pb-10">
      <main>
        {/* Hero section */}
        <Hero />

        <section className="px-6 mx-auto mt-6 max-w-7xl lg:px-8">
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
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80 border shadow">
                  <Image
                    alt="Product image"
                    src={product.image}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <p className="text-gray-600 pt-2 text-center">
                  {product.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
