import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";


export default function MusicPlayer() {
  return(
    <div className="flex flex-row md:flex-row gap-8 p-4 max-w-6xl mx-auto">
      <div className="flex-1">
        <CurrentlyPlaying />
      </div>
      <div className="flex-1">
        <Playlist />
      </div>
    </div>
  );
}
