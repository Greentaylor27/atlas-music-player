import placeholder from "../assets/placeholder.svg";
import { useState, useEffect } from "react";

type CoverArtProps = {
    songId: string | null;
}

export default function CoverArt({ songId }: CoverArtProps) {
    const [cover, setCover] = useState(null);

    useEffect(() => {
        if (!songId) return;

        fetch(`api/v1/songs/${songId}`)
          .then((res) => res.json())
          .then((data) => {
            setCover(data.cover);
          })
          .catch((err) => console.error('Error fetching cover art:', err));
    }, [songId]);
    
    return(
        <div className="w-full max-w-3xl aspect-square mx-auto rounded-xl overflow-hidden bg-gray-100">
            <img src={cover || placeholder} 
            alt="Cover Art"
            className="w-full h-full object-cover" 
            />
        </div>
    )
}
