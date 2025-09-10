import { useState } from "react";

function Login({onLogin}){
    var user=useState({userName:"",password:""})[0]
    var loginStatus

    function recordUserName(event:any){
        user.userName=event.target.value
    }
    function recordPassword(event:any){
        user.password=event.target.value
    }
    function handleLogin(){
        if(user.userName === "raghu" && user.password === "test"){
            loginStatus="success"
        }
        else{
            loginStatus="failure"
        }
        return onLogin(loginStatus)
    }

    return (
        <>
            <h1>Welcome, Please login</h1>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="enter username" onChange={recordUserName}/>
                <input type="password" className="form-control" placeholder="enter password" onChange={recordPassword}/>
                <br />
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login;