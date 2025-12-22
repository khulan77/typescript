import { Search } from 'lucide-react';
import { Moon } from 'lucide-react';
export const Header = () => {
  return (
    <div className="flex w-full h-9.5 justify-between items-center pt-11.5 pl-20 pb-11.5 pr-20">
      <div className="flex gap-1 justify-center items-center">
        <img className="w-5 h-5" src="film.png" alt="" />
        <div className="text-[#4338CA] text-base font-bold">Movie Z</div>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center ">
        <button className="flex justify-center items-center border border-gray-300 rounded-md w-[97px] h-9">Genre</button>
        <div className="w-[379px] h-9 border border-gray-300 rounded-md">
          <input  className="w-94.75 h-9 pl-3" type="text" placeholder="Search.." />
        </div>
        
      </div>
      <div className="w-9 h-9 rounded-md flex justify-center items-center bg-white border border-gray-300">
        <Moon  className="w-5 h-5"/>
      </div>
    </div>
  );
};
