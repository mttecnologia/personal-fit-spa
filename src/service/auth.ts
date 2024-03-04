import { RegisterLogin, ResetSenha, login } from "@/interface/auth";
import { tokenService } from "./token-service";

export const Auth = {

  async Login(dados: login) {
    try {
      const response = await fetch("http://localhost:8787/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      })

      const authResponse = await response.json()
      console.log(authResponse)
      tokenService.save(authResponse.data.token)
    } catch (e) {
      console.log(e)
    }
  },

  async RegisterLogin(dados: RegisterLogin) {
    try {
      const response = await fetch("http://localhost:8787/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      })

      const authResponse = response.json()

      return authResponse;
    } catch (e) {
      console.log(e)
    }
  },

  async ResetSenha(dados: ResetSenha) {
    const response = await fetch("http://localhost:8787/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })

    const authResponse = response.json()
    console.log("login", authResponse)
    return authResponse;

  }
}