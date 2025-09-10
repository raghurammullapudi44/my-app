import Login from "./Login";
import { useState,useEffect } from "react"
import NavigationBar from "./NavigationBar"
import CakesList from "./CakesList"
import axios from "axios"

function Home(){
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [showHome,setShowHome] = useState(true)
    const [showLogin,setShowLogin] = useState(false)

    // useEffect(function(){
    //     alert("use effect triggered with login functionality")
    // },[isLoggedIn])

    function performLogin(logInStatus:any){
        if(logInStatus){
            //alert("Login Sucess")
            setIsLoggedIn(logInStatus)
        }
        else{
            //alert("Login Failure")
            setIsLoggedIn(logInStatus)
        }

    }
    function performLogout(){
        //alert("Logged out")
        setIsLoggedIn(false)
        setShowHome(true)
        setShowLogin(false)
        setOnViewCakes(false)
    }
    function onHome(){
        setShowHome(true)
        setShowLogin(false)
        setOnViewCakes(false)
    }
    function onLogin(){
        setShowHome(false)
        setShowLogin(true)
        setOnViewCakes(false)

    }
    const [cakes, setCakes] = useState([]);
    const [onViewCakes,setOnViewCakes]= useState(false)

    function retrieveAllCakes() {
        setOnViewCakes(true)
        setShowHome(false)
        setShowLogin(false)
        axios({
            method: "get",
            url: "http://cakeapiforvodafone.eu-4.evennode.com/api/allcakes"
        })
            .then((response) => {
                setCakes(response.data.data);
            })
            .catch((error) => {
                console.log("Error from api:", error);
            });
    }
    return (
        <>
            <NavigationBar isLoggedIn={isLoggedIn} performLogout={performLogout} onHome={onHome} onLogin={onLogin} performLogin={performLogin} retrieveAllCakes={retrieveAllCakes} }/>
            {showHome && <h1>Welcome Home</h1>}
            {showLogin && <Login peformLogin={performLogin} isLoggedIn={isLoggedIn}/>}
            {isLoggedIn && <h1>Logged in</h1>}
            {onViewCakes && <CakesList cakes={cakes} />}
        </>
    )
}

export default Home;