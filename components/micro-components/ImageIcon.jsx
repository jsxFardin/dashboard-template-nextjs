import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function ImageIcon({ src, alt }) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
