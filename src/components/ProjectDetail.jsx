import React, { useState, useEffect } from "react";
import { HiUser, HiUsers, HiClock } from "react-icons/hi2";
import ReactPlayer from "react-player";

export default function ProjectDetail({ project }) {
  var details = project.details;

  const [aspectRatio, setAspectRatio] = useState("landscape");

  useEffect(() => {
    if (project.video.includes("youtube.com/shorts")) {
      setAspectRatio("portrait");
    } else {
      // Nếu không phải Shorts, tiếp tục kiểm tra thông qua metadata
      const video = document.createElement("video");
      video.src = project.video;

      video.addEventListener("loadedmetadata", () => {
        const isPortrait = video.videoHeight > video.videoWidth;
        setAspectRatio(isPortrait ? "portrait" : "landscape");
      });
    }
  }, [project.video]);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24 pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 mb-2 xl:mb-4 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {project.title}
        </h2>
      </div>
      <div className="flex justify-center h-fit mb-8">
        <div
          className={`overflow-hidden mt-2 mb-2 xl:mb-6
        ${
          aspectRatio === "landscape"
            ? "aspect-video max-h-[460px]"
            : "aspect-[9/16] max-h-[520px] lg:max-h-[480px] xl:max-h-[460px]"
        }`}
        >
          <div
            className={`flex justify-center ${
              aspectRatio === "landscape" ? "aspect-video" : "aspect-[9/16]"
            }`}
          >
            <ReactPlayer
              url={project.video}
              playing={false}
              controls
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-4 md:px-6 bg-neutral-900 rounded-lg my-2 lg:my-4 xl:my-6">
        <div className="space-y-4 bg-neutral-800 p-4 md:p-6 rounded-lg">
          <h2 className="font-bold text-cyan-200 text-sm sm:text-lg lg:text-2xl xl:text-2xl">
            Mô tả
          </h2>
          <p className="text-justify text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-lg xl:text-lg">
            {project.description}
          </p>
        </div>
        <div className="space-y-4 bg-neutral-800 p-4 md:p-6 rounded-lg">
          <h3 className="font-bold text-cyan-200 text-sm sm:text-lg lg:text-2xl xl:text-2xl">
            Thông tin dự án
          </h3>
          <div className="grid grid-cols-2 gap-y-4 items-center w-full grid-cols-[24px_auto] sm:grid-cols-[32px_auto] lg:grid-cols-[48px_auto]">
            {/* Hàng 1 */}
            <div className="flex justify-left text-white">
              <HiUser className="text-md sm:text-lg lg:text-2xl xl:text-2xl" />
            </div>
            <p className="text-gray-200 text-xs sm:text-sm lg:text-lg xl:text-lg">
              Thể loại: {project.genre}
            </p>

            {/* Hàng 2 */}
            <div className="flex justify-left text-white">
              <HiUsers className="text-md sm:text-lg lg:text-2xl xl:text-2xl" />
            </div>
            <p className="text-gray-200 text-xs sm:text-sm lg:text-lg xl:text-lg">
              Số người tham gia: {project.mem}
            </p>

            {/* Hàng 3 */}
            <div className="flex justify-left text-white">
              <HiClock className="text-md sm:text-lg lg:text-2xl xl:text-2xl" />
            </div>
            <p className="text-gray-200 text-xs sm:text-sm lg:text-lg xl:text-lg">
              Thời gian: {project.time}
            </p>
          </div>
        </div>
      </div>
      {!details || !Array.isArray(details) ? null : (
        <div className="max-w-6xl mx-auto mt-4">
          <h2 className="text-cyan-400 mb-2 xl:mb-4 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Chi tiết dự án
          </h2>
          <div className="space-y-8">
            {details.map((detail, index) => {
              if (!detail) return null;

              return (
                <div key={index} className="space-y-4">
                  {/* Content paragraph */}
                  {detail.content && (
                    <p className="text-justify text-gray-300 leading-relaxed text-sm md:text-lg xl:text-xl">
                      {detail.content}
                    </p>
                  )}

                  {/* Images */}
                  {detail.images &&
                    Array.isArray(detail.images) &&
                    detail.images.length > 0 &&
                    (() => {
                      const imgLength = detail.images.length;

                      let portraitClassName =
                        "grid-cols-1 md:grid-cols-3 xl:grid-cols-4";
                      if (imgLength == 2) {
                        portraitClassName =
                          "grid-cols-1 sm:grid-cols-2 xs:max-w-[60%] sm:max-w-[75%] lg:max-w-[50%]";
                      } else if (imgLength == 3) {
                        portraitClassName =
                          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:max-w-[60%] sm:max-w-[75%]";
                      }

                      return (
                        <div className="flex justify-center">
                          <div
                            className={`grid gap-4 
                        ${
                          aspectRatio === "landscape"
                            ? "grid-cols-1 lg:grid-cols-2 max-w-[100%] sm:max-w-[80%] lg:max-w-[100%]"
                            : portraitClassName
                        }`}
                          >
                            {detail.images.map((image, imgIndex) => {
                              return (
                                image && (
                                  <div
                                    key={imgIndex}
                                    className={`relative h-full flex justify-center `}
                                  >
                                    <img
                                      src={image}
                                      alt={`Project image ${imgIndex + 1}`}
                                      className={`object-cover w-full rounded-lg border-2 border-cyan-800 p-1 md:p-2`}
                                    />
                                  </div>
                                )
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
