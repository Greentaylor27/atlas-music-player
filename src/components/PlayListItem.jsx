import React, { useState, useEffect } from "react";

// Helper function to turn duration from seconds to minutes and seconds
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function PlayListItem() {
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
  if (!playlist) return <p>No playlist found.</p>;

  return (
  <div className="">
    <h1 className="font-bold text-lg">Playlist</h1>
    <ul>
      {playlist.map((item, index) => (
        <li key={index} className="flex items-center py-3 w-full">
          <div className="flex-1 flex flex-col">
            <p className="text-base">{item.title}</p>
            <p className="text-sm text-gray-500">{item.artist}</p>
          </div>
          <p className="text-sm text-gray-600 w-20">{formatDuration(item.duration)}</p>
         </li>
        ))}
    </ul>
  </div>
  )
}
