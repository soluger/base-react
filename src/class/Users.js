import app from '../config/firebase';

export function login(email, password){
    return app.auth().signInWithEmailAndPassword(email,password)
    
}

export function MudarSenha(email){
    return app.auth().sendPasswordResetEmail(email)
    
}

export function getCurrentUsername() {
    return app.auth().currentUser && app.auth().currentUser.displayName
}

export function logout() {
    return app.auth().signOut()
}

export function register(nome,email, password){
    return  app.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            app.auth().currentUser.updateProfile({
            displayName: nome
        }).then(()=>{
            addFirestore(email)
        })
    })
}

export function addFirestore(email) {    
    return app.firestore().collection('users').add({
        email:email,
        createAt: new Date()
    }).then(()=>{
        window.location.reload();
    }).catch(error =>{
        console.log(error);
       
    })
}