import { useEffect, useRef } from "react";
import { Song } from './Playlist';

type AudioPlayerProps = {
    song: Song | null;
    isPlaying: boolean;
    volume: number;
    playbackRate: number;
    onEnded: () => void;
};

export default function AudioPlayer({ song, isPlaying, volume, playbackRate, onEnded }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if(!audio || !song?.song) return;

        audio.volume = volume;
        audio.playbackRate = playbackRate;

        if (isPlaying) {
            audio.play().catch(console.error);
        } else {
            audio.pause();
        }
    }, [song, isPlaying, volume, playbackRate]);

    useEffect(() => {
        return () => {
            if(audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    if (!song?.song) return null;

    return (
        <audio
        ref={audioRef}
        src={song.song}
        onEnded={onEnded}
        autoPlay
        preload="auto" 
        className="hidden"/>
    );
}
