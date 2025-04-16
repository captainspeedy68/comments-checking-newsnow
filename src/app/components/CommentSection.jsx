import React from "react";

const CommentSection = () => {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Email"
          className="input input-info w-xl"
        />
        <textarea
          type="text"
          placeholder="Comment"
          className="textarea textarea-info h-32 w-xl"
        ></textarea>
        <button className="btn btn-info w-xl">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
