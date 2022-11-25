import { useState } from 'react'
import{ getAuth } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import{ provider } from '../services/firebase'
import { async } from '@firebase/util'

const auth= getAuth()

function App() {
  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[foto, setFoto] = useState('');

 async function sigin(){
  const result = await signInWithPopup(auth, provider);
  console.log(result);

setUser(result.user.displayName)
setEmail(result.user.email)
setFoto(result.user.photoURL)

   
}
  
  

  return (
    <div className="App">
      <button onClick={sigin}>Logar</button>
      <p>{user}</p>
      <p>{email}</p>
        <p><img src={foto} alt="" /></p>
    </div>
  )
}

export default App
