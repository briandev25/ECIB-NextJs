import React from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { image: "/categories/shoes.jpg", name: "Shoes" },
  { image: "/categories/mobile-phone.jpg", name: "Phones" },
  { image: "/categories/laptop.jpg", name: "Electronics" },
  { image: "/categories/kitchenware.jpg", name: "Kitchenware" },
  { image: "/categories/furniture.jpg", name: "Furniture" },
  { image: "/categories/bags.jpg", name: "Bags" },
  { image: "/categories/dogs.jpg", name: "Pets" },
  { image: "/categories/services.jpg", name: "Services" },
  { image: "/categories/fashion.jpg", name: "Fashion" },
  { image: "/categories/beddings.jpg", name: "Beddings" },
  { image: "/categories/jobs.jpg", name: "Jobs" },
];

function CategoriesItem() {
  return (
    <div
      data-aos="fade-up"
      className="flex my-10 xl:mx-20 space-x-10 overflow-x-scroll scrollbar-hide"
    >
      {categories.map(({ image, name }) => (
        <Link href={"/categories/" + name}>
          <div
            className="px-2 lg:p-10 flex flex-col items-center cursor-pointer"
            key={image}
          >
            <div className=" relative h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full overflow-hidden">
              <Image
                className=" hover:brightness-75"
                alt=""
                src={image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className=" text-base mt-4 font-semibold lg:text-lg">{name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoriesItem;
