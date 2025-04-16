"use client"

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addPendingComment } from "../utils/commentStorage";

const CommentSection = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newComment = {
      id: uuidv4(),  // Generate unique id using uuid
      email,
      text,
      sentiment: 2, // default neutral
      isHate: false,
      isStressed: false,
    };

    addPendingComment(newComment);

    // Clear form
    setEmail("");
    setText("");
    alert("✅ Comment submitted for review!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-info w-xl"
        />
        <textarea
          placeholder="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea textarea-info h-32 w-xl"
        ></textarea>
        <button type="submit" className="btn btn-info w-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentSection;