import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableCell, TableRow } from "@/components/ui/table"
import { ArrowRight, Search, Settings, X } from "lucide-react"
import { TableDetails } from "./table-details"
import { TableAcoes } from "./table-acoes"

export const TableRowDashboard = () => {
    return (
        <TableRow>
            <TableCell className="font-mono text-xs font-medium">
                <img
                    src="http://github.com/diego3g.png"
                    className="h-10 w-10 rounded-full"
                    alt=""
                />
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Ativo</span>
                </div>
            </TableCell>
            <TableCell className="text-muted-foreground">Fernando</TableCell>
            <TableCell className="font-medium ">Silva</TableCell>
            <TableCell className="font-medium">
                23/05/2002
            </TableCell>
            <TableCell>
               22
            </TableCell>
            <TableCell className="flex gap-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <TableDetails />
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </DialogTrigger>
                    <TableAcoes />
                </Dialog>
            </TableCell>
        </TableRow>
    )
}