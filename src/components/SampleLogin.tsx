import { useState } from "react"

export function SampleLogin() {
    let [email, setEmail] = useState("None")
    let styleobj = {
    height:20
}
let user:any ={}

function handleEmail(event:any){
    user.email = event.target.value;
}
function handlePassword(event:any){
    user.password = event.target.value;
}

function loginDone(){
    setEmail(user.email)
}

    return (
        <div>
            <h1>Login Component</h1>
            <input onChange={handleEmail} style={styleobj} />
            <input onChange={handlePassword} style={{height:30}} />
            <button onClick={loginDone}>Login</button>
            <h1>Welcome {email}</h1>
        </div>
    )
}
