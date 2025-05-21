import placeholder from "../assets/placeholder.svg"

export default function CoverArt() {
    return(
        <div className="w-full aspect-square mx-auto rounded-xl overflow-hidden bg-gray-100">
            <img 
            src={placeholder}
            alt="Placeholder image"
            className="object-cover w-full h-full" />
        </div>
    )
}
