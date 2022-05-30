import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


import logo from "../../assets/logo.png"
import "./styles.css"

export default function SignIn({setToken, setProfile}) {
    return(
        <div className="signIn">
            <Image />
            <Login setToken={setToken} setProfile={setProfile} />
            <ButtonRegister />
        </div>
    )
}
 function Image() {
    return(
        <img src={logo} alt="logo" />
    )
 }

 function Login({setToken, setProfile}){
     const [email, setEmail] = useState("")
     const [password, setPassowrd] = useState("")

     const navigate = useNavigate()

     function logar(event){
        event.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        })
        requisicao.then( response => {
            const {data} = response
            console.log("then test")
            setToken(data.token)
            setProfile(data.image)
            console.log({data})
            navigate("/habitos")
        })
        requisicao.catch(console.log("catch test"))
     }
     return(
         <>
            <div className="login">
                <form onSubmit={logar}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required/>
                    <input type="password" value={password} onChange={e => setPassowrd(e.target.value)} placeholder="senha" required/>

                    <button type="submit">Entrar</button>
                </form>
            </div>
         </>
     )
 }

function ButtonRegister(){
    return(
        <Link to="/cadastro">
            <div className="cadastrar">
                Não tem uma conta? Cadastre-se!
            </div>
        </Link>
    )
}