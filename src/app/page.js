import Image from "next/image";
import CommentSection from "./components/CommentSection";
import ParticularNews from "./components/ParticularNews";
import newsData from "../../data/newsData";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16 bg-base-100 text-base-content">
     
      <header className="w-full bg-blue-500 text-white py-20 px-8 text-center flex flex-col lg:flex-row justify-around items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Stay Informed with NewsNow
          </h1>
          <p className="text-lg">
            Get the latest headlines, breaking stories, and world updates all in
            one place.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="News Image"
            width={400}
            height={300}
            className="rounded-lg shadow-2xl object-cover"
          />
        </div>
      </header>

    
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">📰 Latest News</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <ParticularNews key={news.id} news={news} />
          ))}
        </div>
      </section>

  
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">💬 Leave a Comment</h2>
        <div className="flex justify-center">
          <CommentSection />
        </div>
      </section>


      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-12">
        <aside>
          <p>© 2025 NewsNow. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}
