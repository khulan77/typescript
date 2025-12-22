export const Header = () => {
  return (
    <div className="flex w-full h-9.5 justify-between pt-11.5 pl-20 pb-11.5 pr-20">
      <div className="flex gap-1">
        <img className="w-5 h-5" src="film.png" alt="" />
        <div>Movie Z</div>
      </div>
      <div className="flex flex-row">
        <button>Genre</button>
        <input className="w-94.75 h-9" type="text" placeholder="Search.." />
      </div>
      <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white border border-gray-400"></div>
    </div>
  );
};
