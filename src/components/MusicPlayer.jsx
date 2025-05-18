import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";

export default function MusicPlayer() {
  return(
    <div>
      <CoverArt />
      <PlayControls />
      <SongTitle />
    </div>
  );
}
