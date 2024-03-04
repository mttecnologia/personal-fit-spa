import { InputControl, InputPrefix, InputRoot, InputRootInside } from "@/components/inputComponent"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cake, CalendarFold, Mail, UploadCloud, User } from "lucide-react"
import Link from "next/link"

const EdicaoAluno = () => {
    return (
        <div>
            <div className="border-b border-zinc-200 pb-4">
                <h1 className="text-3xl font-bold tracking-tighter">Edição Aluno</h1>
            </div>
            <form action="" id="setting" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-300">
                <div className="grid gap-3 grid-cols-form">
                    <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
                        Nome e Sobrenome
                    </label>
                    <div className="grid gap-6 grid-cols-2">
                        <InputRoot>
                            <InputRootInside>
                                <InputPrefix>
                                    <User className="w-5 h-5 text-zinc-500" />
                                </InputPrefix>
                                <InputControl
                                    defaultValue="diego"
                                    id="firstName"
                                />
                            </InputRootInside>
                        </InputRoot>
                        <InputRoot>
                            <InputRootInside>
                                <InputPrefix>
                                    <User className="w-5 h-5 text-zinc-500" />
                                </InputPrefix>
                                <InputControl
                                    defaultValue="silva"
                                    id="firstName"
                                />
                            </InputRootInside>
                        </InputRoot>
                    </div>
                </div>

                <div className="grid gap-3 grid-cols-form pt-5">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                        Email
                    </label>
                    <div>
                        <InputRoot>
                            <InputRootInside>
                                <InputPrefix>
                                    <Mail className="w-5 h-5 text-zinc-500" />
                                </InputPrefix>
                                <InputControl
                                    type="email"
                                    defaultValue="fernando@gmail.com"
                                    id="firstName"
                                />
                            </InputRootInside>
                        </InputRoot>
                    </div>
                </div>

                <div className="grid gap-3 grid-cols-form pt-5">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 ">
                        Foto do aluno
                    </label>
                    <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200">
                            <User className="w-8 h-8" />
                        </div>
                        <label
                            htmlFor="photo"
                            className="text-zinc-500 flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center shadow-sm">
                            Selecionar arquivo
                            <div className="w-full flex justify-center p-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200">
                                    <UploadCloud className="h-5 w-5 text-zinc-600" />
                                </div>
                            </div>
                        </label>
                        <input type="file" className="sr-only" id="photo" />
                    </div>
                </div>

                <div className="grid gap-3 grid-cols-form pt-5">
                    <label htmlFor="role" className="text-sm font-medium text-zinc-700">
                        Data de Nascimento e idade
                    </label>
                    <div className="grid gap-6 grid-cols-2">
                        <InputRoot>
                            <InputRootInside>
                                <InputPrefix>
                                    <CalendarFold className="w-5 h-5 text-zinc-500" />
                                </InputPrefix>
                                <InputControl
                                    type="date"
                                    defaultValue="diego"
                                    id="firstName"
                                />
                            </InputRootInside>
                        </InputRoot>
                        <InputRoot>
                            <InputRootInside>
                                <InputPrefix>
                                    <Cake className="w-5 h-5 text-zinc-500" />
                                </InputPrefix>
                                <InputControl
                                    type="number"
                                    defaultValue="silva"
                                    id="firstName"
                                />
                            </InputRootInside>
                        </InputRoot>
                    </div>
                </div>

                <div className="grid gap-3 grid-cols-form pt-5">
                    <label htmlFor="country" className="text-sm font-medium text-zinc-700">
                        Gênero
                    </label>
                    <div className="w-full">
                        <Select>
                            <SelectTrigger className="h-12 w-full">
                                <SelectValue placeholder="escolha um gênero"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Agender</SelectItem>
                                <SelectItem value="pending">Bi-Gendered</SelectItem>
                                <SelectItem value="canceled">Man</SelectItem>
                                <SelectItem value="processing">Non-Binary Transgender</SelectItem>
                                <SelectItem value="delivering">Other</SelectItem>
                                <SelectItem value="delivered">Transexual</SelectItem>
                                <SelectItem value="delivered">Woman</SelectItem>
                                <SelectItem value="delivered">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                    <Link href="/painel-professor/gerenciamento-aluno/1/modulo-aluno" className="border border-zinc-200 hover:bg-zinc-100 text-black text-sm flex gap-2 items-center justify-center  font-semibold rounded-lg py-2 px-4 ">Cancel</Link>
                    <Button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-sky-700 hover:bg-sky-900 text-white">Submit</Button>
                </div>
            </form>
        </div>
    )
}
export default EdicaoAluno