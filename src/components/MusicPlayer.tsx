import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist, { Song } from "./Playlist";
import AudioPlayer from "./AudioPlayer";


export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentSongData, setCurrentSongData] = useState<Song | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(1);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    fetch("api/v1/playlist")
      .then(res => res.json())
      .then(data => {
        setPlaylist(data);
        setCurrentIndex(0);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading playlist", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const songId = playlist[currentIndex]?.id;
    if(!songId) return;

    fetch(`api/v1/songs/${songId}`)
      .then(res => res.json())
      .then(data => {
        setCurrentSongData(data);
        console.log("Loaded song data:", data);
      })
      .catch(err =>{
        console.error("Error fetching song data", err);
      });
  }, [currentIndex, playlist]);

  const currentSong = playlist[currentIndex] ?? null;

  const handleSelectSong = async (song: Song) => {
    const index = playlist.findIndex(s => s.id === song.id);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }

  const handleForward = () => {
    if (isShuffle) {
      let nextIndex;
      do{
        nextIndex = Math.floor(Math.random() * playlist.length);
      } while (nextIndex === currentIndex && playlist.length > 1);
      setCurrentIndex(nextIndex);
    } else if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!playlist || playlist.length === 0) return <p>No songs found.</p>;

  return(
      <>
        <AudioPlayer
          song={currentSongData}
          isPlaying={isPlaying}
          volume={volume}
          playbackRate={speedIndex === 0 ? 0.5 : speedIndex === 1 ? 1 : 2}
          onEnded={handleForward}
        />
        <div className="flex flex-col md:flex-row gap-8 p-4 mx-auto h-full w-full">
          <div className="flex-1">
            <CurrentlyPlaying
              song={currentSong}
              currentIndex={currentIndex}
              playlistLength={playlist.length}
              isShuffle={isShuffle}
              onBack={handleBack}
              onForward={handleForward}
              onToggleShuffle={() => setIsShuffle(prev => !prev)}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              speedIndex={speedIndex}
              setSpeedIndex={setSpeedIndex}
            />
          </div>
          <div className="flex-1">
            <Playlist
              playlist={playlist}
              onSelectSong={handleSelectSong}
              currentSongId={currentSong?.id ?? null}
            />
          </div>
        </div>
      </>
  );
}
