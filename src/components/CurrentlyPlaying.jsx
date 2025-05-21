import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayControls from "./PlayControls";

export default function CurrentlyPlaying() {
  return (
    <div>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
    )
}
