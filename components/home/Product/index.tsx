import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { projects } from "../../../contants/project";

export default function Product() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What we've done?
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            These are our past projects. Some of them are now de-func.
          </p>
        </div>
        <div className="max-w-2xl pt-10 mx-auto mt-10 border-t border-gray-200 gap-y-16 gap-x-8 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Scrollbar, A11y, Autoplay]}
            loop={true}
          >
            {projects.map((post, index) => (
              <SwiperSlide
                key={String(index)}
                className="flex flex-col items-start justify-between max-w-xl"
              >
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="relative group">
                  <div className="mt-3 lg:h-60 md:h-48">
                    <Image
                      src={post.image}
                      width={400}
                      alt="Post image"
                      className="object-cover aspect-[4/3]  w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                {/* <div className="relative flex items-center mt-8 gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="w-10 h-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
