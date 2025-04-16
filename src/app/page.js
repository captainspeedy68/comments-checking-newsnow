import Image from "next/image";
import CommentSection from "./components/CommentSection";
import ParticularNews from "./components/ParticularNews";
const newsData = [
  {
    id: 1,
    title: "Global Leaders Meet to Discuss Climate Crisis",
    summary:
      "World leaders gather in Geneva to address the urgent need for climate action amid rising global temperatures.",
    imageUrl: "https://picsum.photos/seed/climate/600/400",
    category: "World",
    author: "Jane Doe",
    publishedAt: "2025-04-15T10:30:00Z",
  },
  {
    id: 2,
    title: "New Breakthrough in Quantum Computing",
    summary:
      "Scientists at MIT have developed a new quantum processor that significantly boosts computing speed.",
    imageUrl: "https://picsum.photos/seed/quantum/600/400",
    category: "Technology",
    author: "Dr. Alan Turing",
    publishedAt: "2025-04-14T14:20:00Z",
  },
  {
    id: 3,
    title: "Elections 2025: What You Need to Know",
    summary:
      "The national elections are around the corner. Here's a breakdown of key candidates and their manifestos.",
    imageUrl: "https://picsum.photos/seed/elections/600/400",
    category: "Politics",
    author: "Samantha Reed",
    publishedAt: "2025-04-13T08:00:00Z",
  },
  {
    id: 4,
    title: "New Species of Bird Discovered in Amazon",
    summary:
      "Researchers have identified a colorful new bird species deep in the Amazon rainforest.",
    imageUrl: "https://picsum.photos/seed/amazonbird/600/400",
    category: "Science",
    author: "David Attenborough",
    publishedAt: "2025-04-12T18:45:00Z",
  },
  {
    id: 5,
    title: "Stock Markets Soar Amid Economic Recovery",
    summary:
      "Markets around the world are seeing a strong recovery as inflation rates decline and jobs rebound.",
    imageUrl: "https://picsum.photos/seed/stockmarket/600/400",
    category: "Business",
    author: "Elon Trader",
    publishedAt: "2025-04-11T11:15:00Z",
  },
  {
    id: 6,
    title: "Champions League: Historic Final Match Ahead",
    summary:
      "Fans gear up for one of the most anticipated Champions League finals in years.",
    imageUrl: "https://picsum.photos/seed/champions/600/400",
    category: "Sports",
    author: "Alex Ferguson",
    publishedAt: "2025-04-10T16:50:00Z",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16 bg-base-100 text-base-content">
      {/* Navbar */}
      

      <section className="w-full bg-blue-500 text-white py-20 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Stay Informed with NewsNow</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Get the latest headlines, breaking stories, and world updates all in
          one place.
        </p>
      </section>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* News Articles */}
      <section className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news, i) => (
          <ParticularNews news={news} key={news.id}></ParticularNews>
        ))}
      </section>

      {/* Comment Section */}
      <section className="container mx-auto px-4 flex justify-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
          <CommentSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
          <p>© 2025 NewsNow. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}
