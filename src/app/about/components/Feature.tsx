import { Star } from "lucide-react";
import { Play } from "lucide-react";
export const Feature = () => {
  return (
    <div className="flex w-full relative">
      <img className="w-full h-full object-contain" src="wicked.jpg" alt="" />
      <div className="absolute w-101 h-66 flex flex-col gap-4 mt-44.5 ml-35">
        <div className="flex flex-col text-white">
          <h1 className="text-base font-normal">Now Playing:</h1>
          <div className="text-4xl font-bold">Wicked</div>
          <div className="flex flex-row  items-center gap-1">
            <Star color="#fde047" width={28} height={28} />
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="font-semibold text-lg">6.9</div>
              <div className="text-base font-normal text-[#71717A]">/10</div>
            </div>
          </div>
        </div>
        <div className="w-75.5 h-20 font-normal text-xs text-[#fafafa]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </div>
        <button className="w-36.25 h-[40px] bg-white rounded-md flex flex-row justify-center items-center text-sm font-medium gap-1">
          <Play width={16} height={16} />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
