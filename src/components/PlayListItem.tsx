type PlayListItemProps = {
  title: string;
  artist: String;
  duration: String;
  onClick: () => void;
  isActive?: Boolean;
}

export default function PlayListItem({ title, artist, duration, onClick, isActive=false }: PlayListItemProps) {
  return (
    <li
     onClick={onClick}
     className={`flex items-center justify-between py-3 w-full hover:bg-fist1-400 ${isActive ? "bg-fist1-600 text-white text-shadow-lg/15" : ""} rounded-md`}>
      <div className="flex-1 min-w-0">
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <p className="text-sm text-gray-400 text-right w-16 shrink-0 text-shadow-lg/15">{duration}</p>
    </li>
  )
}
