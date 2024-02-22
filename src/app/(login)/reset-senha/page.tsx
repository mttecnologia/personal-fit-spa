'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"
import { Auth } from "@/service/auth"
import { Loader } from "lucide-react"
import { ResetSenha } from "@/interface/auth"

const Signin = () => {

    const sgninForm = z.object({
        password: z.string().min(1, { message: "o campo password é obrigatório" }),
        password_confirmation: z.string().min(1, { message: "o campo password_confirmation é obrigatório" })
    })

    type SigninForm = z.infer<typeof sgninForm>;

    const {
        register,
        handleSubmit,
        reset,
        formState,
        watch
    } = useForm<SigninForm>({
        resolver: zodResolver(sgninForm)
    })

    const handleResetSenha = async (data: ResetSenha) => {
        try {
            await Auth.ResetSenha(data)
            toast.success("login with success")
            reset();
        } catch (e) {
            toast.error("email or password invalid");
        }

    }

    const senha = watch("password")
    const verificarSenha = watch("password") === watch("password_confirmation")

    return (
        <>
            <div className="p-8">
                <Button
                    asChild
                    variant="ghost"
                    className="absolute right-8 top-8">
                    <Link href="/signin">
                        Login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                        <h1 className="text-2xl font-semibold tracking-tighter">Reset sua senha</h1>
                        <p className="text-sm text-muted-foreground">Por favor, gere uma senha forte</p>
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleResetSenha)}>
                        <div className="space-y-2">
                            <Label htmlFor="password">Sua nova senha</Label>
                            <Input
                                type="text"
                                id="password"
                                {...register("password")}
                            />
                        </div>

                        {
                            formState.errors.password &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.password.message}</span>
                        }

                        <div className="space-y-2">
                            <Label htmlFor="password_confirmation">Confirme sua nova senha</Label>
                            <Input
                                className={`${senha ? (verificarSenha ? 'bg-green-600 opacity-90' : 'bg-red-600 opacity-90 placeholder:text-white') : ''
                                    }`}
                                type="password_confirmation"
                                id="password_confirmation"
                                {...register("password_confirmation")}
                            />
                        </div>

                        {
                            formState.errors.password &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.password.message}</span>
                        }
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!verificarSenha || formState.isSubmitting}
                        >
                            {formState.isSubmitting ?
                                (<Loader type="TailSpin" className="cursor-not-allowed animate-spin h-8 w-8 text-white" />)
                                : "Salvar"}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signin