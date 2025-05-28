type SongTitleProps = {
    title: String;
    artist: String;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
    return (
        <div>
            <h1 className="text-2xl font-bold pb-2 pt-4">{title}</h1>
            <p className="text-gray-400 text-base pb-2">{artist}</p>
        </div>
    )
}
