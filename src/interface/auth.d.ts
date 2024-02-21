export interface login {
   email: string
   password: string
}

export interface ResetSenha {
   password: string 
   password_confirmation: string 
}

export interface RegisterLogin {
   name: string
   email: string
   password: string
   password_confirmation: string
}