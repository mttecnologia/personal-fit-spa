import { InputControl, InputLabel, InputPrefix, InputRoot, InputRootInside } from "@/components/inputComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MailIcon, MapPin, Pencil, Phone, SquareUser, User } from "lucide-react";

const Profile = () => {
    return (
        <form>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="grid col-span-1">
                    <Card className="h-64">
                        <CardContent className="flex flex-col justify-center border-b ">
                            <div className="flex justify-end mt-3">
                                <Button variant="outline" size="xs" >
                                    <Pencil className="text-right h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <img
                                    src="http://github.com/diego3g.png"
                                    className="h-24 w-24 rounded-full"
                                    alt=""
                                />
                                <span className="text-base font-semibold">Fernando Henrique da Silva</span>
                            </div>

                        </CardContent>
                        <CardFooter className="flex flex-col itens-center justify-center gap-1 mt-1">
                            <span className="font-semibold text-sm">Membro Desde:</span>
                            <span className="text-muted-foreground text-xs">Maio, 23/05/2024 </span>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-3 flex flex-col gap-5">
                    <Card className="bg-zinc-50">
                        <CardContent className="mt-3 grid grid-cols-4 grid-rows-2">
                            <div className="col-span-3 row-span-1">
                                <InputRoot>
                                    <InputLabel>Nome</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <User className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            id="email"
                                            type="text"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-1 row-span-1">
                                <InputRoot>
                                    <InputLabel>CPF</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-1 row-span-2 mt-2">
                                <InputRoot>
                                    <InputLabel>Nascimento</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-2 row-span-2 flex flex-col justify-center gap-3 mt-2">
                                <Label className="font-normal">Gênero</Label>
                                <Select>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Todos" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Todos</SelectItem>
                                        <SelectItem value="pending">Pendente</SelectItem>
                                        <SelectItem value="canceled">Cancelado</SelectItem>
                                        <SelectItem value="processing">Em preparo</SelectItem>
                                        <SelectItem value="delivering">Em entrega</SelectItem>
                                        <SelectItem value="delivered">Entregue</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="col-span-1 row-span-2 mt-2">
                                <InputRoot>
                                    <InputLabel>Telefone</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-50">
                        <CardHeader className="border-b ">
                            <CardTitle className="text-md">Endereço</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-3 grid grid-cols-4 grid-rows-3">
                            <div className="col-span-1 row-span-1">
                                <InputRoot>
                                    <InputLabel>Cep</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <User className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            id="email"
                                            type="text"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-3 row-span-1">
                                <InputRoot>
                                    <InputLabel>Rua</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-1 row-span-1 mt-2">
                                <InputRoot>
                                    <InputLabel>Número</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-3 row-span-1 mt-2">
                                <InputRoot>
                                    <InputLabel>Número</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>

                            <div className="col-span-1  row-span-1 mt-2">
                                <InputRoot>
                                    <InputLabel>Telefone</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-2  row-span-1 mt-2">
                                <InputRoot>
                                    <InputLabel>Telefone</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                            <div className="col-span-1  row-span-1 mt-2">
                                <InputRoot>
                                    <InputLabel>Telefone</InputLabel>
                                    <InputRootInside className="gap-5">
                                        <InputPrefix>
                                            <MailIcon className="text-gray-400 h-6 w-6" />
                                        </InputPrefix>
                                        <InputControl
                                            type="number"
                                        />
                                    </InputRootInside>
                                </InputRoot>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="w-full flex justify-end items-center mt-3">
                <Button variant="default" size="lg" className="bg-sky-600 hover:bg-sky-800 text-white">
                    Salvar
                </Button>
            </div>
        </form>
    )
}
export default Profile;