import { ChevronDown, Home } from "lucide-react"
import Link from "next/link"
import { ElementType } from "react"

interface NaviItemsProps {
    title: string
    icon: ElementType,
    link: string 
}

export const NaviItem = ({title, icon: Icon, link} : NaviItemsProps) => {
    return (
        <Link className="group flex items-center gap-3 rounded px-3 py-2 cursor-pointer hover:bg-sky-50" href={link}>
            <Icon className="h-5 w-5 text-zinc-500" />
            <span className="font-medium text-zinc-700  group-hover:text-sky-500">
                {title}
            </span>
            <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-sky-300" />
        </Link>
    )
}