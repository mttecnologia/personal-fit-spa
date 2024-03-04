import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, UserRoundPlus } from "lucide-react"
import { CardFilter } from "./card-filter-alunos"
import CardContentAluno from "./card-content-aluno"
import Link from "next/link"

const CardAluno = () => {
    return (
        <Card className="col-span-2">
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2 border-b ">
                <div>
                    <CardTitle className="text-lg font-semibold">Alunos</CardTitle>
                    <CardDescription>Acompanhe as informações dos seus alunos</CardDescription>
                </div>
                <Link href="painel-professor/cadastro-aluno" className="bg-sky-600 hover:bg-sky-700 text-sm flex gap-2 items-center justify-center text-white font-semibold rounded-sm py-2 px-3 ">
                    Aluno
                    <UserRoundPlus className="h-4 w-4" />
                </Link>
            </CardHeader>
            <CardFilter />
            <div className="relative overflow-hidden h-[500px]">
                <CardContent className="space-y-1 w-full absolute top-0 right-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrolbar-thumb-zinc-900">
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                    <CardContentAluno />
                </CardContent>
            </div>
        </Card>
    )
}
export default CardAluno