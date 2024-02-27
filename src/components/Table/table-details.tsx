import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const TableDetails = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Detalhes do Aluno.</DialogTitle>
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                                        <span className="font-medium text-muted-foreground">Pendente</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Aluno
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    Fernando Henrique da Silva
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Data de nascimento
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    23/05/2002
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Idade
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    22
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </DialogHeader>
        </DialogContent>
    )
}