import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 Tous" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

const Links = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === "search") {
      setToggle(true);
    } else {
      setToggle(false);
    }
    if (e.target.id === "news") {
      setToggle2(true);
    } else {
      setToggle2(false);
    }
    if (e.target.id === "images") {
      setToggle3(true);
    } else {
      setToggle3(false);
    }
    if (e.target.id === "videos") {
      setToggle4(true);
    } else {
      setToggle4(false);
    }
  };
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      <Link
        id="search"
        onClick={handleClick}
        to="/search"
        className={`m-2 mb-0 ${
          toggle
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
            : null
        }`}
      >
        Tous 🔎
      </Link>
      <Link
        id="news"
        to="/news"
        onClick={handleClick}
        className={`m-2 mb-0 ${
          toggle2
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
            : null
        }`}
      >
        News 📰
      </Link>
      <Link
        id="images"
        onClick={handleClick}
        to="/images"
        className={`m-2 mb-0 ${
          toggle3
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
            : null
        }`}
      >
        Images 📸
      </Link>
      <Link
        id="videos"
        onClick={handleClick}
        to="/videos"
        className={`m-2 mb-0 ${
          toggle4
            ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
            : null
        }`}
      >
        Videos 📺
      </Link>
    </div>
  );
};

export default Links;
