import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ParticularNews = ({news}) => {
    return (
        <div
           
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <figure>
              <Image
                
                alt="News"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.summary}</p>
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