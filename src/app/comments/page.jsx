"use client";

import React, { useState, useEffect } from "react";
import { getPendingComments, deletePendingComment, addFinalComment } from "../utils/commentStorage";
// import {
//   getPendingComments,
//   deletePendingComment,
//   addFinalComment,
// } from "@/utils/commentStorage";

const sentimentLabels = [
  "Very Negative",
  "Negative",
  "Neutral",
  "Positive",
  "Very Positive",
];

const AdminCommentsPanel = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(getPendingComments());
  }, []);

  const handleDelete = (commentId) => {
    deletePendingComment(commentId); // Pass the comment id for deletion
    setComments(getPendingComments());
  };

  const handleApprove = (commentId) => {
    const commentToApprove = comments.find((comment) => comment.id === commentId); // Find the comment by id
    if (commentToApprove) {
      addFinalComment(commentToApprove); 
      deletePendingComment(commentId); 
      setComments(getPendingComments());
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛠️ Admin Comments Panel</h2>

      {comments.length === 0 ? (
        <p className="text-gray-600">No pending comments.</p>
      ) : (
        <div className="grid gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id} // Use the unique id as the key
              className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 border"
            >
              <p className="text-gray-800 font-medium">💬 {comment.text}</p>
              <div className="flex flex-wrap items-center text-sm gap-4">
                <span className="text-blue-600">
                  Sentiment: {sentimentLabels[comment.sentiment]}
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
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleDelete(comment.id)} // Pass the id to handleDelete
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleApprove(comment.id)} // Pass the id to handleApprove
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
