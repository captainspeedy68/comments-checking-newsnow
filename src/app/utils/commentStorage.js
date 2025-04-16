// utils/commentStorage.js

const PENDING_KEY = "pending_comments";
const FINAL_KEY = "final_comments";


export const getPendingComments = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(PENDING_KEY);
  return data ? JSON.parse(data) : [];
};

export const getFinalComments = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(FINAL_KEY);
  return data ? JSON.parse(data) : [];
};

// Function to add a pending comment to localStorage
export const addPendingComment = (comment) => {
  const existing = getPendingComments();
  localStorage.setItem(PENDING_KEY, JSON.stringify([...existing, comment]));
};


export const addFinalComment = (comment) => {
  const existing = getFinalComments();
  localStorage.setItem(FINAL_KEY, JSON.stringify([...existing, comment]));
};


export const approveComment = (commentId) => {
  const pendingComments = getPendingComments();
  const approvedComment = pendingComments.find((comment) => comment.id === commentId);

  if (approvedComment) {

    const finalComments = getFinalComments();
    localStorage.setItem(FINAL_KEY, JSON.stringify([...finalComments, approvedComment]));


    const newPendingComments = pendingComments.filter((comment) => comment.id !== commentId);
    localStorage.setItem(PENDING_KEY, JSON.stringify(newPendingComments));
  }
};


export const deletePendingComment = (commentId) => {
  const pendingComments = getPendingComments();
  const newPendingComments = pendingComments.filter((comment) => comment.id !== commentId);
  localStorage.setItem(PENDING_KEY, JSON.stringify(newPendingComments));
};

export const deleteFinalComment = (id) => {
  const stored = JSON.parse(localStorage.getItem("finalComments")) || [];
  const updated = stored.filter((comment) => comment.id !== id);
  localStorage.setItem("finalComments", JSON.stringify(updated));
};
