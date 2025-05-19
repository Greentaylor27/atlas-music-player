import React, { useState, useEffect } from "react";

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
  <div className="h-11">
    <h1>Playlist</h1>
    <ul>
      {playlist.map((item, index) => (
        <div>
          <li key={index}>
            <p className="text-base">{item.title}</p>
            <p className="text-sm">{item.artist}</p>
            <p className="text-sm">{item.duration}</p>
          </li>
        </div>
        ))}
    </ul>
  </div>
  )
}
