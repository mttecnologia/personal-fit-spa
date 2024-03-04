import { BarChart, CircleDollarSign, Cog, Dumbbell, LibraryBig, LogOut, Users2, Video } from "lucide-react"
import { NaviItem } from "./naveItem"

export const Sidebar = () => {
    return (
        <aside className='fixed flex flex-col border-r gap-2 border-zinc-200 px-3 py-6 dark:bg-black min-h-screen'>
            <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
                <Dumbbell className="h-10 w-10" />
                <span className="text-muted-foreground font-medium text-lg">Personal Fit</span>
                {/* <ModeToggle/> */}
            </div>

            <nav className="space-y-0.5">
                <NaviItem icon={BarChart} title="Dashboard" link="/painel-professor"/>
                <NaviItem icon={Users2} title="Gerenciador de Alunos" link="/painel-professor" />
                <NaviItem icon={LibraryBig} title="Biblioteca de Treinos" link="/painel-professor"/>
                <NaviItem icon={Video} title="Biblioteca de Exercícios" link="/painel-professor"/>
                <NaviItem icon={CircleDollarSign} title="Financeiro" link="/painel-professor"/>
                <NaviItem icon={Cog} title="Setting" link="/setting-professor"/>
            </nav>
            <div className="mt-auto text-black flex flex-col gap-6">
                <div className="h-px bg-zinc-200 "></div>
                <div className="grid items-center gap-3 grid-cols-profile">
                    <img
                        src="http://github.com/diego3g.png"
                        className="h-10 w-10 rounded-full"
                        alt=""
                    />
                    <div className="flex flex-1 flex-col truncate">
                        <span className="text-sm font-semibold text-zinc-700">Fernando Henrique</span>
                        <span className="truncate text-sm text-zinc-500 ">feroficialvolei@gmail.com</span>
                    </div>
                    <button type="button" className="group ml-auto p-2 hover:bg-zinc-500 rounded-md">
                        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-white" />
                    </button>
                </div>
            </div>
        </aside>
    )
}