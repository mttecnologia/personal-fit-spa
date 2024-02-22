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

const Signin = () => {

    const sgninForm = z.object({
        email: z.string().min(1, { message: "o campo email é obrigatório" }).email("por favor digite no formado de email (test@gmail.com)"),
        password: z.string().min(1, { message: "o campo password é obrigatório" }),
    })

    type SigninForm = z.infer<typeof sgninForm>;

    const {
        register,
        handleSubmit,
        reset,
        formState,
    } = useForm<SigninForm>({
        resolver: zodResolver(sgninForm)
    })

    const handleSignin = async (data: SigninForm) => {
        try {
            await Auth.Login(data)
            toast.success("login with success")
            reset();
        } catch (e) {
            toast.error("email or password invalid");
        }

    }
    
    return (
        <>
            <div className="p-8">
                <Button
                    asChild
                    variant="ghost"
                    className="absolute right-8 top-8">
                    <Link href="/sign-up">
                        Novo Professor
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                        <h1 className="text-2xl font-semibold tracking-tighter">Acessar Painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe Seus alunos no painel</p>
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleSignin)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input
                                type="email"
                                id="email"
                                {...register("email")}
                            />
                        </div>

                        {
                            formState.errors.email &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.email.message}</span>
                        }

                        <div className="space-y-2">
                            <Label htmlFor="password">Sua Senha</Label>
                            <Input
                                type="password"
                                id="password"
                                {...register("password")}
                            />
                        </div>

                        {
                            formState.errors.password &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.password.message}</span>
                        }

                        <p className="text-sm">Esqueceu sua senha ?
                            <Link href="/reset-senha" className="text-sky-500">clique aqui</Link>
                        </p>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={formState.isSubmitting}
                        >
                           {formState.isSubmitting ?
                                (<Loader type="TailSpin" className="cursor-not-allowed animate-spin h-8 w-8 text-white" />)
                                : "Acessar Painel"} 
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signin