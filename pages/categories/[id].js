import React from "react";
import { useRouter } from "next/router";
import UserPost from "../../components/UserPost";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function CategoriesDetail() {
  const router = useRouter();
  const category = router.query.id;
  console.log(category);

  const [snapshot, loading, error] = useCollection(
    db.collection("posts").where("category", "==", `${category}`)
  );

  console.log(snapshot);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mx-10 py-6">
        <h1 className=" text-2xl text-center font-bold">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
          {snapshot?.docs.map((post) => (
            <UserPost
              key={post.id}
              firstName={post.data().firstName}
              lastName={post.data().lastName}
              title={post.data().title}
              postImage={post.data().postImage}
              description={post.data().description}
              category={post.data().category}
              price={post.data().price}
              userImage={post.data().userImage}
              timeStamp={post.data().timeStamp}
              phoneNo={post.data().phoneNo}
              persons={post.data().persons}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesDetail;
