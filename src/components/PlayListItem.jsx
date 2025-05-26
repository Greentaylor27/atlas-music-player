export default function PlayListItem({ title, artist, duration }) {
  return (
    <li className="flex items-center justify-between py-3 w-full hover:bg-fist1-400 rounded-md">
      <div className="flex-1 min-w-0">
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <p className="text-sm text-gray-400 text-right w-16 shrink-0 text-shadow-lg/15">{duration}</p>
    </li>
  )
}
