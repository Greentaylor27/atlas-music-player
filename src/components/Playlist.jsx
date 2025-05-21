import React, { useState, useEffect } from "react";
import PlayListItem from "./PlayListItem";

// Helper function to turn duration from seconds to minutes and seconds
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function Playlist() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/playlist')
      .then(response => response.json())
      .then(data => {
        setPlaylist(data);
        setLoading(false);
        })
      .catch(error => {
        console.error('Error fetching playlist:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading playlist...</p>;
  if (!playlist || playlist.length === 0) return <p>No playlist found.</p>;


  return (
    <div className="w-full px-4">
        <h1 className="font-bold text-lg mb-4">Playlist</h1>
        <ul>
          {playlist.map((item) => (
            <PlayListItem
              key={item.id}
              title={item.title}
              artist={item.artist}
              duration={formatDuration(item.duration)}
            />
          ))}
        </ul>
    </div>
  )
}
