import React from "react";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col xs:flex-row items-center gap-8 px-8 pt-28 md:pt-32 lg:pt-36 xl:pt-40">
      <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-700 border-4 border-cyan-500">
        <img
          src="../profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <p className="text-justify text-cyan-500 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Tôi là một lập trình viên Unity đầy đam mê và ham học hỏi. <br />
          Tôi mong muốn được trải nghiệm môi trường làm việc chuyên nghiệp để học những điều mới, trau dồi thêm kiến thức và kỹ năng của bản thân.
        </p>
      </div>
    </section>
  );
}
