import { ChevronDown, Home } from "lucide-react"
import { ElementType } from "react"

interface NaviItemsProps {
    title: string
    icon: ElementType
}

export const NaviItem = ({title, icon: Icon} : NaviItemsProps) => {
    return (
        <a className="group flex items-center gap-3 rounded px-3 py-2 cursor-pointer hover:bg-violet-50">
            <Icon className="h-5 w-5 text-zinc-500" />
            <span className="font-medium text-zinc-700  group-hover:text-violet-500">
                {title}
            </span>
            <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
        </a>
    )
}