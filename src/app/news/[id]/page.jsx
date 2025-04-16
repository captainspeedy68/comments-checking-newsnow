import Image from "next/image";
import Link from "next/link";
import React from "react";
import newsData from "../../../../data/newsData";
import CommentSection from "@/app/components/CommentSection";

const page = async ({ params }) => {
  const id = params?.id;

  const news = newsData.find((news) => news.id === parseInt(id));

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            404 - Article Not Found
          </h1>
          <Link href="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="container mx-auto px-4 py-6">
        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1>{news.title}</h1>
          <p className="text-sm text-gray-500">
            {news.category} • {new Date(news.publishedAt).toLocaleDateString()}{" "}
            • by {news.author}
          </p>

          <div className="my-4">
            <Image
              src={null}
              alt={news.title}
              width={800}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>

          <p>{news.summary}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
          </p>
          <p>
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
            lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
      
      <div className="ml-30 mb-10 mx-5">
      <h1 className="text-2xl ">Comment</h1>
        <CommentSection></CommentSection>
      </div>
      <Link href="/" className="btn btn-sm btn-outline mb-4 ml-30">
        ← Back to Home
      </Link>
    </div>
  );
};

export default page;
