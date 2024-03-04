
import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Archive, CircleDollarSign, ClipboardCheck, ClipboardList, Dumbbell, FilePlus2, UserRoundCog } from "lucide-react"
import Link from "next/link"

export const CardAcoesAlunos = () => {
    return (
        <DialogContent>
            <DialogHeader className="space-y-4">
                <DialogTitle>Ações</DialogTitle>
                <div className="flex justify-evenly items-center flex-wrap" >
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <Dumbbell className="h-10 w-10 text-slate-600" />
                        <span>Treinos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <FilePlus2 className="h-10 w-10 text-slate-600" />
                        <span>Novos Treinos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <ClipboardList className="h-10 w-10 text-slate-600" />
                        <span>Avaliações</span>
                    </div>
                </div>
                <div className="flex justify-evenly items-center flex-wrap">
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <ClipboardCheck className="h-10 w-10 text-slate-600" />
                        <span>Progresso</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <CircleDollarSign className="h-10 w-10 text-slate-600" />
                        <span>Posição Financeira</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 w-36">
                        <Archive className="h-10 w-10  text-slate-600" />
                        <span>Arquivos</span>
                    </div>
                </div>
                <Link href="painel-professor/gerenciamento-aluno/1/modulo-aluno" className="bg-sky-600 hover:bg-sky-700 text-sm w-full flex gap-2 items-center justify-center text-white font-semibold rounded-sm py-2 ">
                    Ir pro Aluno
                    <UserRoundCog className="h-4 w-4 text-white" />
                </Link>
            </DialogHeader>
        </DialogContent>
    )
}