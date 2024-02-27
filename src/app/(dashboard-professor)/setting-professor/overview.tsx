import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, LockKeyhole, Mail, MapPin, Monitor, Phone, SquareUser, User, UserX } from "lucide-react";

const VisaoGeral = () => {
    return (
        <>
            <div className="w-full mt-4">
                <Card className=" bg-zinc-100">
                    <CardHeader className="flex-row space-y-0 items-center pb-2 gap-2">
                        <User className="w-7 h-7" />
                        <CardTitle className="font-semibold text-base">Dados Pessoais</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3 grid grid-cols-2">
                        <div className="flex flex-col justify-center col-span-1">
                            <div className="flex items-center gap-3">
                                <SquareUser className="w-5 h-5" />
                                <span className="text-base">Fernando Henrique da Silva</span>
                            </div>
                            <span className="ml-8 text-muted-foreground text-sm">cpf: 045.567.897.99</span>
                        </div>
                        <div className="col-span-1 flex flex-col gap-3 items-start">
                            <div className="flex justify-start items-center gap-3">
                                <Phone className="w-5 h-5" />
                                <span className="text-muted-foreground text-sm">(91) 992013642</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-muted-foreground text-sm">Rua das flores, 55 Águas Brancas, Ananindeua - PA. CEP 67033-032</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-5 border-b border-zinc-200 pb-6  ">
                <Card className="col-span-1 bg-zinc-100">
                    <CardHeader className="flex-row space-y-0 items-center pb-2 gap-2">
                        <KeyRound className="w-7 h-7" />
                        <CardTitle className="font-semibold text-base">Dados de Acesso</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3">
                        <div className="col-span-1 flex flex-col gap-3 items-start">
                            <div className="flex justify-start items-center gap-3">
                                <Mail className="w-5 h-5" />
                                <span className="text-muted-foreground text-sm">feroficialvolei@gmail.com</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <LockKeyhole className="w-5 h-5" />
                                    <span className="text-muted-foreground text-sm">Senha: ********</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-1 bg-zinc-100">
                    <CardHeader className="flex-row space-y-0 items-start  gap-3  pb-2">
                        <Monitor className="w-7 h-7" />
                        <CardTitle className="font-semibold text-base">Assinatura</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3">
                        <Card className="bg-zinc-200">
                            <CardContent className="flex justify-between items-center mt-5">
                                <span className="text-base text-black">PersonalFit Pro</span>
                                <div className="flex flex-col justify-center ">
                                    <span className="">Validade</span>
                                    <span className="text-muted-foreground text-sm">12/05/2025</span>
                                </div>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-5 space-y-3 ">
                <div className="flex gap-3 items-center">
                    <UserX className="h-5 w-5 text-red-600"/>
                    <span className="text-lg font-semibold">Excluir Conta</span>
                </div>
                <div className="flex flex-col justify-center space-y-1">
                    <span className="text-sm text-black ">Se você excluir sua conta, todos os dados relacionados a você serão deletados e não será possível a restauração.</span>
                    <span className="text-xs text-muted-foreground">A exclusão da conta não elimina o recebimento de e-mails do PersonalFit. Para que isso aconteça, peça no personalfit@gmail.com.br</span>
                </div>
                <Button className="bg-red-700 text-white hover:bg-red-900">Excluir minha conta</Button>
            </div>
        </>

    )
}
export default VisaoGeral;