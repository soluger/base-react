import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../config/Auth';
import app from '../../config/firebase'

    export default function Navbar(){
        const  { currentUser }  = useContext(AuthContext);     
    return (
        <>
        {currentUser ?
        <>
        <p>Olá -   {app.auth().currentUser.displayName} 
            <Link to="#" onClick={() => app.auth().signOut()}>   sair</Link>
        </p>
        </>
        :
        <>
        <Link to="/">Home </Link>
        <Link to="/login">| Entrar</Link>
        <Link to="/register">| Registro</Link>
        </>
        }
        </>
    )
}