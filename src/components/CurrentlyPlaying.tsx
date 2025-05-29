import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayControls from "./PlayControls";
import { Song } from './Playlist';

type CurrentlyPlayingProps = {
  song: Song | null;
  currentIndex: number;
  playlistLength: number;
  isShuffle: boolean;
  onBack: () => void;
  onForward: () => void;
  onToggleShuffle: () => void;
};

export default function CurrentlyPlaying({ song, currentIndex, playlistLength, isShuffle, onBack, onForward, onToggleShuffle }: CurrentlyPlayingProps) {
  if (!song) return null;

  return (
    <div className="rounded-lg p-8 bg-fist1-300">
      <CoverArt songId={song.id} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls currentIndex={currentIndex} playlistLength={playlistLength} isShuffle={isShuffle} onBack={onBack} onForward={onForward} onToggleShuffle={onToggleShuffle} />
      <VolumeControls />
    </div>
    )
}
