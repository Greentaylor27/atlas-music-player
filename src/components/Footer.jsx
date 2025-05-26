function DarkMode() {
  
}


export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 w-fill flex flex-col items-center">
      &copy; {year} Atlas School
      <button className="bg-fist1-600 hover:bg-fist1-800 text-white font-bold w-fit p-2 rounded-full cursor-pointer">Dark Mode</button>
      <button className="bg-fist1-600 hover:bg-fist1-800 text-white font-bold w-fit p-2 rounded-full cursor-pointer">Theme</button>
    </div>;
}
