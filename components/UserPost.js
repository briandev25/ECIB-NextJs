import Image from "next/image";
import { StarIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import CurrencyFormat from "react-currency-format";
import React, { useState } from "react";
import { useRouter } from "next/router";

function UserPost({
  category,
  postImage,
  title,
  description,
  price,
  timeStamp,
  userImage,
  phoneNo,
  persons,
  firstName,
  lastName,
}) {
  const post = {
    category,
    postImage,
    title,
    description,
    price,
    timeStamp,
    userImage,
    phoneNo,
    persons,
    firstName,
    lastName,
  };
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() =>
        router.push({
          pathname: "/productDetails",
          query: post,
        })
      }
      className="flex flex-col cursor-pointer  min-w-[321px] bg-white rounded-lg overflow-hidden hover:scale-95 transition transform duration-200 ease-in-out mx-6 my-3"
    >
      <div>
        <div className=" relative h-56">
          <Image
            src={postImage}
            layout="fill"
            objectFit="cover"
            className=" brightness-100 hover:brightness-75"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3 p-3">
        <h3 className=" text-center text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-between">
          <img
            className=" rounded-full"
            src={userImage}
            width={20}
            height={20}
          />
          <p className="text-xs text-gray-400">
            {new Date(timeStamp.toDate()).toLocaleString()}
          </p>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between py-3">
          <CurrencyFormat
            renderText={(value) => (
              <p className=" text-lg font-semibold text-orange-600">{value}</p>
            )}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix="Ksh"
          />
          <div
            onClick={() => {
              setLiked(!liked);
            }}
          >
            {!liked ? (
              <HeartIconOutline className="h-7 cursor-pointer hover:float-right" />
            ) : (
              <HeartIconSolid className="h-7 cursor-pointer text-red-500 hover:float-right" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
