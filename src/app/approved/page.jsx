"use client";

import React, { useState, useEffect } from "react";
import { getFinalComments, deleteFinalComment } from "../utils/commentStorage";

const Page = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const finalComments = getFinalComments();
    setComments(finalComments);
  }, []);

  const handleDelete = (id) => {
    deleteFinalComment(id);
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">✅ Approved Comments</h2>

      <div className="grid gap-4">
        {comments.length === 0 ? (
          <p>No approved comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 border"
            >
              <p className="text-gray-800 font-medium">💬 {comment.text}</p>
              <div className="flex flex-wrap items-center text-sm gap-4">
                <span className="text-blue-600">
                  Sentiment: {comment.sentiment}
                </span>
                <span
                  className={comment.isHate ? "text-red-600" : "text-green-600"}
                >
                  {comment.isHate ? "🚫 Hate" : "✅ Not Hate"}
                </span>
                <span
                  className={
                    comment.isStressed ? "text-yellow-600" : "text-gray-500"
                  }
                >
                  {comment.isStressed ? "⚠️ Stressed" : "🧘 Not Stressed"}
                </span>
              </div>

              <button
                onClick={() => handleDelete(comment.id)}
                className="text-sm text-red-500 hover:underline self-end"
              >
                🗑 Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
