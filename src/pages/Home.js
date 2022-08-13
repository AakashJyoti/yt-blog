import { useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import SinglePost from "../components/SinglePost";
import "./Home.css";

function Home() {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(postCollectionRef, orderBy("timestamp", "desc")));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [setPostLists, postCollectionRef]);

  return (
    <div className="homePage">
      <div className="header">
        <span>List of Blogs:-</span>
      </div>
      <div className="postCard">
        {postLists.map((post) => {
          return <SinglePost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
