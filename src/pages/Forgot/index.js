import React, {useState, useContext} from 'react';
import { AuthContext } from '../../config/Auth';
import {Link, Redirect} from 'react-router-dom';
import { MudarSenha } from '../../class/Users';

export default function Forgot(){
    const [email, setEmail] = useState('');    
    const [loader, setLoader] = useState(false);
    const [erro, setErro]= useState(false);
    async function reset(){
        setLoader(true)
        try{            
            await MudarSenha(email).then(()=>{
                setLoader(false) 
                setErro("Acesse o link em seu email e mude sua senha!")              
            })          
        }catch(error){
            setLoader(false)
            setErro(error.message)            
        }
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
    return <Redirect to="/dashboard" />;
    }   
    return loader === false ? (
        <div>              
            <h1 className="h3 mb-5 font-weight-normal font-weight-bold">Reset senha</h1>               
            
            <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="email" className="form-control mr-sm-2 mt-2" />                
            <p className="erro-msg">{erro}</p>
            <button onClick={reset} className="btn btn-lg btn-block btn-secondary btn-login mt-2" type="button">Confirmar</button>
            <p>
                <Link to="/login" className="mx-2">Lembrei a senha?</Link>               
            </p>
        </div>
       
    ): <h1>loading...</h1>
}