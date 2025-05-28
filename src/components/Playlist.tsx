import PlayListItem from "./PlayListItem";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
};

type PlaylistProps = {
  playlist: Song[];
  onSelectSong: (song: Song) => void;
  currentSongId: string | null;
};

// Helper function to turn duration from seconds to minutes and seconds
function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function Playlist({ playlist, onSelectSong, currentSongId }: PlaylistProps) {
  return (
    <div className="w-full px-4 bg-fist1-200 rounded-lg pb-14 pt-8 bg-contain h-full ">
        <h1 className="font-bold text-lg mb-4">Playlist</h1>
        <ul>
          {playlist.map((item) => (
            <PlayListItem
            key={item.id}
              title={item.title}
              artist={item.artist}
              duration={formatDuration(item.duration)}
              onClick={() => onSelectSong(item)}
              isActive={item.id === currentSongId}
            />
          ))}
        </ul>
    </div>
  )
}
