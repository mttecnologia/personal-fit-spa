'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner';
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Auth } from "@/service/auth"
import { Loader } from "lucide-react"

const Signup = () => {

    const signupForm = z.object({
        name: z.string().min(1, { message: "o campo name é obrigatório" }),
        email: z.string().min(1, { message: "o campo email é obrigatório" }).email("por favor digite no formado de email (test@gmail.com)"),
        password: z.string().min(1, { message: "o campo password é obrigatório" }),
        password_confirmation: z.string().min(1, { message: "o campo password_confirmation é obrigatório" })
    })

    type SigninForm = z.infer<typeof signupForm>;

    const { register, handleSubmit, formState, reset, watch } = useForm<SigninForm>({
        resolver: zodResolver(signupForm)
    })

    const router = useRouter()

    const senha = watch("password")
    const verificarSenha = watch("password") === watch("password_confirmation")

    const handleSignup = async (data: SigninForm) => {
        try {
            await Auth.RegisterLogin(data)
            reset()
            toast.success("Enviamos um link de autenticação para seu email.", {
                action: {
                    label: "Login",
                    onClick: () => {
                        router.replace("/signin")
                    }
                }
            })

        } catch (error) {
            toast.error("Erro ao cadastrar novo personal !")
            console.log(error)
        }

    }

    return (
        <>
            <div className="p-8">
                <Button
                    asChild
                    variant="ghost"
                    className="absolute right-8 top-8">
                    <Link href="/signin">
                        Fazer login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                        <h1 className="text-2xl font-semibold tracking-tighter">Criar conta grátis</h1>
                        <p className="text-sm text-muted-foreground">seja um parceiro e comece suas vendas</p>
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleSignup)}>
                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome</Label>
                            <Input
                                type="text"
                                placeholder="digite seu nome"
                                id="nome"
                                {...register("name")} />
                        </div>

                        {
                            formState.errors.name &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.name.message}</span>
                        }

                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input
                                type="=email"
                                placeholder="digite seu email"
                                id="email"
                                {...register("email")} />
                        </div>

                        {
                            formState.errors.email &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.email.message}</span>
                        }

                        <div className="space-y-2">
                            <Label htmlFor="password">Sua senha</Label>
                            <Input
                                type="password"
                                placeholder="digite sua senha"
                                id="password"
                                {...register("password")} />
                        </div>

                        {
                            formState.errors.password &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.password.message}</span>
                        }

                        <div className="space-y-2">
                            <Label htmlFor="password">Confirme sua senha</Label>
                            <Input
                                className={`${
                                    senha ? (verificarSenha ? 'bg-green-600 opacity-90' : 'bg-red-600 opacity-90 placeholder:text-white') : ''
                                }`}
                                type="password"
                                placeholder="confirme sua senha"
                                id="password"
                                {...register("password_confirmation")} />
                        </div>

                        {
                            formState.errors.password_confirmation &&
                            <span className="text-xs text-red-500 font-medium">{formState.errors.password_confirmation.message}</span>
                        }

                        <Button
                            type="submit"
                            className="w-full disabled:cursor-not-allowed"
                            disabled={!verificarSenha || formState.isSubmitting}
                        >
                            {formState.isSubmitting ?
                                (<Loader type="TailSpin" className="cursor-not-allowed animate-spin h-8 w-8 text-white" />)
                                : "Finalizar Cadastro"}
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar você concorda com nossos serviços e política de pivacidade !
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup