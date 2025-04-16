"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addPendingComment } from "../utils/commentStorage";

const CommentSection = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      // Call your Python API
      const res = await fetch("http://localhost:8000/predict", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text }),
});

if (!res.ok) {
  const errorText = await res.text();
  throw new Error(`Status ${res.status}: ${errorText}`);
}


      const data = await res.json();
      console.log(res);
      const newComment = {
        id: uuidv4(),
        email,
        text,
        sentiment: data.Sentiment,
        isHate: Boolean(data.Hate),
        isStressed: Boolean(data.Stress_or_Anxiety),
      };

      addPendingComment(newComment);

      setEmail("");
      setText("");
      alert("✅ Comment submitted for review!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("❌ Failed to submit comment for review.");
    }
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
