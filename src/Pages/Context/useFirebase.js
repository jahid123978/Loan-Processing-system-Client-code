import initializeAuthentication from "../Firebase/Firebase.init";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [loans, setLoans] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const savedUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://sheltered-depths-76360.herokuapp.com/users', {
          method: method,
          headers : {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result);
        })
     
     }

     const RegisterNewUser = (name, email, password, history) =>{
        setIsLogin(true); 
       createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in 
             // const user = userCredential.user;
             setError('');
             const newUser = {displayName: name, email}
             setUser(newUser);
             savedUser(email, name, 'POST');
             updateProfile(auth.currentUser, {
               displayName: name
             })
             .then(()=>{
 
             })
             .catch((error)=>{
 
             })
              history('/home');
           })
           .catch((error) => {
             // const errorCode = error.code;
             const errorMessage = error.message;
             setError(errorMessage);
           })
           .finally(()=>{setIsLogin(false)});
     }

     const LoginUser = (email, password, location, history) => {
        setIsLogin(true); 
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            const destination = location?.state?.from || '/home'
             history(destination);
              // const user = userCredential.user;
              setError('');
              
            })
            .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage);
            })
            .finally(()=>{setIsLogin(false)});
      }
    const SignInWithGoogle = () =>{
       return signInWithPopup(auth, GoogleProvider)
        // .then((result) => {
            
        //     // const user = result.user;
        //     // setUser(user);
        //   }).catch((error) => {
           
        //     const errorMessage = error.message;
        //     setError(errorMessage);
        //   });
    }
    const LogOut= () => {
        // setIsLogin(true);
        signOut(auth)
        .then(()=>{
            setUser([]);
        })
        .finally(()=>{setIsLogin(false)})
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
             if(user)
              {
                 setUser(user);
              }
              else{
                setUser({});
              }
              setIsLogin(false);
           })
       }, [])

   useEffect(()=>{
       fetch('https://sheltered-depths-76360.herokuapp.com/loans')
       .then(res => res.json())
       .then(result =>{
           setLoans(result)
       })

   }, [])

   useEffect(() => {
    fetch(`https://sheltered-depths-76360.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data =>setAdmin(data.admin));
  }, [user.email]);
    return {
        admin,
        RegisterNewUser,
        LoginUser,
        loans,
        SignInWithGoogle,
        user,
        LogOut,
        isLogin,
        setIsLogin
    }
}

export default useFirebase;