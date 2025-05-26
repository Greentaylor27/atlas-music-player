import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";


export default function MusicPlayer() {
  return(
    <div className="flex flex-col md:flex-row gap-8 p-4 mx-auto h-full w-full">
      <div className="flex-1 border-2">
        <CurrentlyPlaying />
      </div>
      <div className="flex-1">
        <Playlist />
      </div>
    </div>
  );
}
