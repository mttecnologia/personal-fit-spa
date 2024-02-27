import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const TableFilter = () => {
    return (
        <div className="flex items-center justify-between">
            <Button size="sm" className="bg-sky-600 hover:bg-sky-700 px-10 text-sm">
                Aluno +
            </Button>
            <div className="flex gap-2">
                <Input placeholder="nome do cliente" className="h-8 w-[320px]" />
                <Select>
                    <SelectTrigger className="h-8 w-[180px]">
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
        </div>
    )
}