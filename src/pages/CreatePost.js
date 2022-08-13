import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { AuthStatus } from "../context/ContextProvider";
import "./CreatePost.css";

const CreatePost = () => {
  let navigate = useNavigate();
  const { authData } = useContext(AuthStatus);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    if (title === "" || description === "") return;
    await addDoc(postCollectionRef, {
      title,
      description,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        image: auth.currentUser.photoURL,
      },
      timestamp: Timestamp.now(),
    });
    navigate("/");
  };

  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
  }, [authData]);

  return (
    <div className="createPostPage">
      <span className="title">Create a Blog</span>

      <div className="input">
        <div className="inputTitle">
          <label>Title: </label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="inputDesc">
          <label>Blog: </label>
          <textarea
            placeholder="Blog..."
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <button className="createBtn" onClick={createPost} >
          Create
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
