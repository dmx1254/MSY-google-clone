import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "./contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const {
    results,
    image_results,
    getResults,
    searchTerm,
    setSearchTerm,
    isLoading,
  } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=30`);
      }
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map((result, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a
                href={result?.link && result?.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <p className="text-sm">
                  {result?.link && result?.link.length > 30
                    ? result?.link && result?.link.substring(0, 30)
                    : result?.link}
                </p>
                <p className="text-lg hover:underlined dark:text-blue-300 text-blue-700">
                  {result?.title && result?.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              className="sm:p-3 p-5*"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underlined"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links[0]?.href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR!";
  }
};

export default Results;
