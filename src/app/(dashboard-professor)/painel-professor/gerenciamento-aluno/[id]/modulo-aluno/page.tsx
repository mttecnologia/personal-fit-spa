import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive, CircleDollarSign, ClipboardCheck, ClipboardList, Dumbbell, FilePlus2, History, Pencil, PencilLine, Smartphone, Users2, XSquare } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ModuloAluno = () => {
    return (
        <div className="flex flex-col">
            <div className="border-b border-zinc-200 pb-4">
                <h1 className="text-3xl font-bold tracking-tighter">Aluno</h1>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="grid col-span-1">
                    <Card className="h-64">
                        <CardContent className="flex flex-col justify-center border-b ">
                            <div className="flex flex-col justify-center items-center gap-3 mt-4">
                                <img
                                    src="http://github.com/diego3g.png"
                                    className="h-24 w-24 rounded-full"
                                    alt=""
                                />
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <span className="text-base font-semibold">Fernando Henrique da Silva</span>
                                    <span className="font-semibold text-sm">Grupo: Presencial</span>
                                </div>
                            </div>

                        </CardContent>
                        <CardFooter className="flex itens-center justify-center gap-3 mt-2.5">
                            <Button className="bg-emerald-500 text-white hover:bg-emerald-700 text-xs flex gap-1 justify-center items-center" size="sm">
                                <Smartphone className="h-4 w-4" />
                                Whatsapp
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild >
                                    <Button size="sm" variant="secondary">Opções</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Editar
                                            <DropdownMenuShortcut>
                                                <PencilLine className="h-4 w-4 " />
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Inativar
                                            <DropdownMenuShortcut>
                                                <History className="w-4 h-4" />
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Excluir
                                            <DropdownMenuShortcut>
                                                <XSquare className="h-4 w-4 text-red-600" />
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-3 flex gap-5 flex-wrap justify-center items-center">
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Treinos</span>
                            </CardTitle>
                            <Dumbbell className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                                Rotina de treino do seu aluno ! 
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Novos Treinos</span>
                            </CardTitle>
                            <FilePlus2 className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                                Crie novos ciclos de treino ! 
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Avaliações</span>
                            </CardTitle>
                            <ClipboardList className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                              acompanhe as avaliações do aluno ! 
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Progresso do aluno</span>
                            </CardTitle>
                            <ClipboardCheck className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                                Evolução do seu aluno ! 
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Faturas</span>
                            </CardTitle>
                            <CircleDollarSign className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                             financias desse aluno ! 
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sky-800 w-[250px] hover:cursor-pointer">
                        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">
                                <span className="text-white font-semibold text-lg">Arquivos</span>
                            </CardTitle>
                            <Archive className="h-11 w-11 text-white rounded-full px-2 bg-sky-400" />
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-xs text-white">
                                Arquivos do seu aluno ! 
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default ModuloAluno;