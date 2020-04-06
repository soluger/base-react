import React, {useState, useContext} from 'react';
import { AuthContext } from '../../config/Auth';
import {Link, Redirect} from 'react-router-dom';
import { register } from '../../class/Users';

export default function Register(){
    const [nome, setNome]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [loader, setLoader] = useState(false);
    const [erro, setErro]= useState(false);

    function addUser(){
        setLoader(true)
        register(nome,email,password).then(()=>{
            setLoader(false)
        }).catch((error)=>{
            setErro(error.message)
            setLoader(false)
        })
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
    return <Redirect to="/dashboard" />;
    }   
    return loader === false ?(
        <div>
            <h1>Registro</h1>           
            <input
                value={nome} onChange={e=> setNome(e.target.value)} 
                type="text" placeholder="Nome" className="form-control mr-sm-2 mt-2" />
            <input
                value={email} onChange={e=> setEmail(e.target.value)} 
                type="email" placeholder="Email" className="form-control mr-sm-2 mt-2" />
            <input
                value={password} onChange={e=> setPassword(e.target.value)} 
                type="password" placeholder="Senha" className="form-control mr-sm-2 mt-2" />
                <p className="erro-msg">{erro}</p>
            <button onClick={addUser} className="btn btn-lg btn-block btn-secondary btn-login mt-2" type="button" >confirmar</button>
            <p>
                <Link to="/login" className="mx-2">já possue conta?</Link>               
            </p>
        </div>
       
    ): <h1>loading...</h1>

}