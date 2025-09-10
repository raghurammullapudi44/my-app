import { useState } from "react";

function Login({peformLogin,isLoggedIn}){
    const [user,setUser]=useState({userName:"",password:""})
    var loginStatus

    function recordUserName(event:any){
        setUser({...user, userName:event.target.value })
    }
    function recordPassword(event:any){
        setUser({ ...user, password:event.target.value})
    }
    function handleLogin(){
        if(user.userName === "raghu" && user.password === "test"){
            loginStatus=true
        }
        else{
            loginStatus=false
        }
        return peformLogin(loginStatus)
    }

    return (
        <>
            {!isLoggedIn && <h1>Welcome, Please login</h1>}
            {!isLoggedIn && <div className="form-group">
                <input type="text" className="form-control" placeholder="enter username" onChange={recordUserName}/>
                <input type="password" className="form-control" placeholder="enter password" onChange={recordPassword}/>
                <br />
                {isLoggedIn==false && <button className="btn btn-primary" onClick={handleLogin}>Login</button>}
            </div>
            }
        </>
    )
}

export default Login;