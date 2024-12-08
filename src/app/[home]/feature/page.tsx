import Image from "next/image";
import { ClockIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      image: "/images/feature-1.png",
      title: "Loudest à la Madison #1 (L'integral)",
      tags: ["Google", "Trending", "New"],
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: "/images/feature-2.png",
      title: "Loudest à la Madison #1 (L'integral)",
      tags: ["Google", "Trending", "New"],
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: "/images/feature-3.png",
      title: "Loudest à la Madison #1 (L'integral)",
      tags: ["Google", "Trending", "New"],
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="bg-white py-12 px-12 md:px-40">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold text-base">Practice Advice</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          Featured Posts
        </h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                New
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={tag === "Google" ? "text-blue-400" : ""}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.description}</p>

              {/* Footer Section */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4 text-blue-400" />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-green-800" />
                  <p>{post.comments}</p>
                </div>
              </div>

              {/* Learn More */}
              <a
                href="#"
                className="mt-4 inline-flex items-center font-medium text-sm"
              >
                Learn More 
                <span className="ml-1 text-blue-400">{">"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
