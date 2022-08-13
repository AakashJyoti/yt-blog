import { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { AuthStatus } from "../context/ContextProvider";
import "./SinglePost.css";

const SinglePost = ({ post }) => {
  const { authData } = useContext(AuthStatus);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="post">
      <div className="postHeader">
        <div className="userData">
          <img
            className="profileImage"
            src={post?.author?.image}
          />
          <div className="userDataText">
            <p className="autherName">@{post.author?.name}</p>
            <p className="timeStamp">
              {post.timestamp.toDate().toDateString()}
            </p>
          </div>
        </div>
        <div className="title">
          <span className="postTitle">{post.title}</span>
        </div>
        <div className="deletePost">
          {authData && post.author.id === auth.currentUser.uid && (
            <button
              onClick={() => {
                deletePost(post.id);
              }}
            >
              x
            </button>
          )}
        </div>
      </div>
      <div className="desc">{post.description}</div>
    </div>
  );
};
export default SinglePost;
