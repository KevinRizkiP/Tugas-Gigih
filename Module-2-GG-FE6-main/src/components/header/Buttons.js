import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  ArrowCircleDownIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Buttons = () => {
  return (
    <div>
      <section className="p-8 flex items-center gap-5">
        <button className="transition transform duration-200 ease-out bg-green-600 hover:bg-green-500 hover:scale-110 text-black font-semibold py-2 px-4 rounded-full">
          <PlayIcon className="h-16 w-12" />
        </button>
        <HeartIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        <ArrowCircleDownIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        <DotsHorizontalIcon className="h-12 w-12 text-gray-500 hover:text-white" />
      </section>
    </div>
  );
};

export default Buttons;
