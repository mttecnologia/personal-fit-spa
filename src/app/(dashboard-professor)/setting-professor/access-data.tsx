import { InputControl, InputLabel, InputPrefix, InputRoot, InputRootInside } from "@/components/inputComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, LockKeyhole, Mail } from "lucide-react";

const AccessData = () => {
    return (
        <div className="grid grid-cols-2">
            <Card className="col-span-1 bg-zinc-100 mt-5">
                <CardHeader className="flex-row space-y-0 items-center pb-2 gap-2">
                    <KeyRound className="w-7 h-7" />
                    <CardTitle className="font-semibold text-base">Dados de Acesso</CardTitle>
                </CardHeader>
                <CardContent className="mt-3">
                    <div className="flex gap-3 items-start">
                        <InputRoot>
                            <InputLabel>Email</InputLabel>
                            <InputRootInside className="gap-5">
                                <InputPrefix>
                                    <Mail className="text-gray-400 h-6 w-6" />
                                </InputPrefix>
                                <InputControl
                                    id="email"
                                    type="text"
                                    defaultValue="feroficialvolei@gmail.com"
                                />
                            </InputRootInside>
                        </InputRoot>
                        <InputRoot>
                            <InputLabel>Senha</InputLabel>
                            <InputRootInside className="gap-5">
                                <InputPrefix>
                                <LockKeyhole className="w-5 h-5" />
                                </InputPrefix>
                                <InputControl
                                    id="email"
                                    type="text"
                                    defaultValue="********"
                                />
                            </InputRootInside>
                        </InputRoot>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default AccessData;