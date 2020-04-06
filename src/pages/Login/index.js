import React, {useState, useContext} from  'react';
import { AuthContext } from '../../config/Auth';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../class/Users';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [erro, setErro]= useState(false);
    async function auter(){
        setLoader(true)
        try{            
            await login(email,password).then(()=>{
                setLoader(false)               
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
    return loader === false ?(
        <>
        <h1 className="home">Login</h1>
            <input
                onChange={(e) => setEmail(e.target.value) }
                type="email" placeholder="email" className="form-control mr-sm-2 mt-2" />
            <input
                onChange={(e) => setPassword(e.target.value) } 
                type="password" placeholder="password" className="form-control mr-sm-2 mt-2" />
                <p className="erro-msg">{erro}</p>
            <button onClick={auter} className="btn btn-lg btn-block btn-secondary btn-login mt-2" type="button">Entrar</button>
        <p><Link to="/register">Nâo possue conta?</Link></p>
        <p><Link to="/forgot">Esqueceu a senha?</Link></p>
        </>
    ): <h1>loading...</h1>
}