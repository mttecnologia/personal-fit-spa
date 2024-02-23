import { Tabela } from "@/components/Table/tabela";
// import { PopularChart } from "@/components/pupular-products-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban, DollarSign, Users2 } from "lucide-react";

const PainelProfessor = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="">
                <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 border-t border-zinc-200 mt-2 py-3">
                <Card>
                    <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Total Alunos (mês)</CardTitle>
                        <Users2 className="" />
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tighter">
                            200
                        </span>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-emerald-500 dark:text-emerald-400">+2% </span>{' '}
                            em relção ao mês passado !
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
                        <DollarSign className="" />
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tighter">
                            R$ 1248,60
                        </span>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-emerald-500 dark:text-emerald-400">+2% </span>{' '}
                            em relção ao mês passado !
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
                        <DollarSign className="" />
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tighter">
                            R$ 1248,60
                        </span>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-emerald-500 dark:text-emerald-400">+2% </span>{' '}
                            em relção ao mês passado !
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Cancelados (ano)</CardTitle>
                        <Ban className="" />
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tighter">
                            20
                        </span>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-emerald-500 dark:text-emerald-400">+2% </span>{' '}
                            em relção ao mês passado !
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-9 gap-4">
               <Tabela/>
               {/* <PopularChart/> */}
            </div>

        </div>
    )
}
export default PainelProfessor;