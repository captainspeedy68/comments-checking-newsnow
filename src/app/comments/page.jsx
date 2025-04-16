"use client";

import React, { useState, useEffect } from "react";
import { getPendingComments, deletePendingComment, addFinalComment } from "../utils/commentStorage";

const AdminCommentsPanel = () => {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    setComments(getPendingComments());
  }, []);

  const handleDelete = (commentId) => {
    deletePendingComment(commentId);
    setComments(getPendingComments());
  };

  const handleApprove = (commentId) => {
    const commentToApprove = comments.find((comment) => comment.id === commentId);
    if (commentToApprove) {
      addFinalComment(commentToApprove);
      deletePendingComment(commentId);
      setComments(getPendingComments());
    }
  };
  console.log()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛠️ Admin Comments Panel</h2>

      {comments.length === 0 ? (
        <p className="text-gray-600">No pending comments.</p>
      ) : (
        <div className="grid gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 border"
            >
              <p className="text-gray-800 font-medium">💬 {comment.text}</p>
              <div className="flex flex-wrap items-center text-sm gap-4">
                <span className="text-blue-600 capitalize">
                  Sentiment: {comment?.sentiment}
                  {console.log(comment)}
                </span>
                <span
                  className={comment.Hate === 1 ? "text-red-600" : "text-green-600"}
                >
                  {comment.Hate === 1 ? "✅ Not Hate" : "🚫 Hate" }
                </span>
                <span
                  className={
                    comment.Stress_or_Anxiety === 1
                      ? "text-yellow-600"
                      : "text-gray-500"
                  }
                >
                  {comment.Stress_or_Anxiety === 1
                    ? "⚠️ Stressed"
                    : "🧘 Not Stressed"}
                </span>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleApprove(comment.id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Add to Comments Section
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminCommentsPanel;
