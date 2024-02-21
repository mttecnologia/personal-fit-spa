import { login } from "@/interface/auth";

export const Auth = {
   async authLogin( dados : login ){
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