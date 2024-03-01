import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor } from "lucide-react"

const Subscriptions = () => {
    return (
        <div className="w-full mt-5">
            <Card className="col-span-1 bg-zinc-50">
                <CardHeader className="flex-row space-y-0 items-start  gap-3  pb-2">
                    <Monitor className="w-7 h-7" />
                    <CardTitle className="font-semibold text-base">Assinatura</CardTitle>
                </CardHeader>
                <CardContent className="mt-3">
                    <Card className="bg-sky-300">
                        <CardContent className="flex justify-between items-center mt-5">
                            <span className="text-base text-black font-bold">PersonalFit Pro</span>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-white font-semibold">Início do acesso</span>
                                    <span className="text-black text-sm">12/05/2025</span>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-white font-semibold">Renova em</span>
                                    <span className="text-black text-sm">12/05/2025</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}
export default Subscriptions