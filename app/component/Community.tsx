import Image from "next/image";

function Community() {
  return (
    <div className="max-w-7xl mx-auto pt-32 p-4 flex flex-col items-center space-y-5">
      <img
        className="w-full lg:h-[500px]"
        alt="Welcome"
        src="https://getwallpapers.com/wallpaper/full/0/5/9/1173087-developer-wallpaper-hd-1920x1080-download-free.jpg"
      />
      <p className="text-center font-bold text-xl">
        Join Zero to Full Stack Hero & Get Direct Mentorship from Sonny Himself!
      </p>
      <div className="flex items-center justify-center bg-red-500 lg:w-[46rem] p-4 w-[20rem] rounded-md">
        <button>Click here To InRoll Todays</button>
      </div>
    </div>
  );
}

export default Community;
