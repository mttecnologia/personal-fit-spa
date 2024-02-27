'use client'

import { SettingsTabls } from "./tabs";

const SettingProfessor = () => {
    return (
        <div className="flex-col">
            <div className="flex items-center gap-3 w-full">
                <img
                    src="http://github.com/diego3g.png"
                    className="h-14 w-14 rounded-full"
                    alt=""
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                    <span className="text-black text-xl font-semibold">Minha Conta</span>
                    <span className="text-muted-foreground text-sm ">Gerencie as informações de conta, dados pessoais e assinaturas</span>
                </div>
            </div>
            <SettingsTabls />
        </div>
    )
}
export default SettingProfessor;