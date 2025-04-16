import Image from "next/image";
import Link from "next/link";
import React from "react";

const ParticularNews = ({ news }) => {
  const formattedDate = new Date(news.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      <figure>
        <img
          src={news.imageUrl}
          alt={news.title}
          width={600}
          height={400}
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body p-5 space-y-3">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="badge badge-secondary">{news.category}</span>
          <span>{formattedDate}</span>
        </div>
        <h2 className="card-title text-xl font-semibold">{news.title}</h2>
        <p className="text-sm ">{news.summary}</p>
        <div className="card-actions justify-end">
          <Link href={`/news/${news.id}`}>
            <button className="btn btn-sm btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParticularNews;
