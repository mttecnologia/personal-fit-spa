'use client'

import * as Tabs from "@radix-ui/react-tabs"
import { TabsItems } from "./tabsItems"
import { useState } from "react"
import Profile from "./profile"
import VisaoGeral from "./overview"

export const SettingsTabls = () => {
    const [currentTabs, setCurrentTabs] = useState("tab1")
    return (
        <Tabs.Root value={currentTabs} onValueChange={setCurrentTabs} defaultValue="tab1">
            <Tabs.List className="mt-4 flex w-full items-center gap-4 border-b border-zinc-200">
                <TabsItems value="tab1" titulo="Visão Geral" isSelected={currentTabs === 'tab1'} />
                <TabsItems value="tab2" titulo="Dados Pessoais" isSelected={currentTabs === 'tab2'} />
                <TabsItems value="tab3" titulo="Dados de Acesso" isSelected={currentTabs === 'tab3'} />
                <TabsItems value="tab4" titulo="Assinatura e Compras" isSelected={currentTabs === 'tab4'} />
            </Tabs.List>

            <Tabs.Content value="tab1">
                <VisaoGeral />
            </Tabs.Content>

            <Tabs.Content value="tab2">
                <Profile />
            </Tabs.Content>

            <Tabs.Content value="tab3">
                <p>tab3</p>
            </Tabs.Content>

            <Tabs.Content value="tab4">
                <p>tab4</p>
            </Tabs.Content>
        </Tabs.Root>
    )
}