"use client";

import React, { useState, useEffect } from "react";

const mockComments = [
  {
    id: 1,
    text: "I hate how this works!",
    sentiment: 1,
    isHate: true,
    isStressed: true,
  },
  {
    id: 2,
    text: "This is amazing, love it!",
    sentiment: 4,
    isHate: false,
    isStressed: false,
  },
  {
    id: 3,
    text: "I'm really tired of this",
    sentiment: 2,
    isHate: false,
    isStressed: true,
  },
];

const sentimentLabels = [
  "Very Negative",
  "Negative",
  "Neutral",
  "Positive",
  "Very Positive",
];

const AdminCommentsPanel = () => {
  const [comments, setComments] = useState(mockComments);

  const handleDelete = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛠️ Admin Comments Panel</h2>

      <div className="grid gap-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
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
            <div className="flex justify-end">
              <button
                onClick={() => handleDelete(comment.id)}
                className="self-end mr-4 mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                
                className="self-end mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Add to Comments Section
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCommentsPanel;
