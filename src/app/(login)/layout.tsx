import { Dumbbell, Pizza } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen grid grid-cols-2 antialiased">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                    <Dumbbell className="h-5 w-5" />
                    <span className="font-semibold">Personal FJMBfit</span>
                </div>
                <img src="/img/gim.png" alt="" />
                <footer className="text-sm ">
                    Painel do &copy; Personal FJMBfit - {new Date().getFullYear()}
                </footer>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                {children}
            </div>
        </section>
    );
}
