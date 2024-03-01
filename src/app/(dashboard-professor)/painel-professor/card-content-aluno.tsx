'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Search, Settings } from "lucide-react";
import { CardAcoesAlunos } from "./card-acoes-alunos";
import CardDetailsAlunos from "./card-details-alunos";

const CardContentAluno = () => {
    return (
        <div className="pt-5 flex justify-between">
            <div className="flex items-center gap-3">
                <img
                    src="http://github.com/diego3g.png"
                    className="h-10 w-10 rounded-full"
                    alt=""
                />
                <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold">Fernando Henrique da Silva</span>
                    <span className="text-xs flex gap-2">
                        feroficialvolei@gmail.com
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-slate-400" />
                            <span className="font-medium text-muted-foreground text-xs">Ativo</span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <CardDetailsAlunos /> 
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </DialogTrigger>
                    <CardAcoesAlunos />
                </Dialog>
            </div>
        </div>
    )
}
export default CardContentAluno;