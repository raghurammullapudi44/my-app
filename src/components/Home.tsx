import Login from "./Login";

function Home(){
    function performLogin(loginStatus:any){
        if(loginStatus){
            alert("Login "+ loginStatus)
        }
    }
    return (
        <>
            <Login onLogin={performLogin} />
        </>
    );
}

export default Home;