import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import UserPost from "./UserPost";

function Recent() {
  const [snapshot, loading, error] = useCollection(
    db.collection("posts").orderBy("timeStamp", "desc")
  );

  return (
    <div className="flex flex-col items-center mx-10 py-6">
      <h1 className=" text-2xl text-center font-bold">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
        {snapshot?.docs.map((post) => (
          <UserPost
            key={post.id}
            title={post.data().title}
            postImage={post.data().postImage}
            description={post.data().description}
            category={post.data().category}
            price={post.data().price}
            userImage={post.data().userImage}
            timeStamp={post.data().timeStamp}
          />
        ))}
      </div>
    </div>
  );
}

export default Recent;
