import { Paginacao } from "../paginacao"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table"
import { TableFilter } from "./table-filter"
import { TableRowDashboard } from "./table-row"

export const Tabela = () => {
    return (
        <div className="flex flex-col gap-4 col-span-6">
            <div className="space-y-2.5">
                <TableFilter />
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Imagem</TableHead>
                                <TableHead>Plano</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Sobrenome</TableHead>
                                <TableHead>Data de Nascimento</TableHead>
                                <TableHead>Idade</TableHead>
                                <TableHead>Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRowDashboard />
                            <TableRowDashboard />
                            <TableRowDashboard />
                            <TableRowDashboard />
                        </TableBody>
                    </Table>
                </div>
                <Paginacao pageIndex={0} perPage={10} totalCount={105} />
            </div>
        </div>
    )
}