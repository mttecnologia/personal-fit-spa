
import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Archive, CircleDollarSign, ClipboardCheck, ClipboardList, Dumbbell, FilePlus2, UserRoundCog } from "lucide-react"

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
                <Button variant="default" size="sm" className="bg-sky-600 hover:bg-sky-700 text-sm w-full flex gap-2 items-center">
                    Ir pro Aluno
                    <UserRoundCog className="h-4 w-4"/>
                </Button>
            </DialogHeader>
        </DialogContent>
    )
}