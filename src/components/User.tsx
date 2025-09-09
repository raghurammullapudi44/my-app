function User({data}:any){
    var {name, age, email, location} = data; // destructuring props object and u can direcltly use like in step 12 to ste 18 r
    return (  
        <>
        <div className="card">
            <h1>User Component</h1>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
            <p>Location: {data.location}</p>
        </div>
        <div className="card">
            <h1>User Component</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
        </div>
        </>
    )
}
export default User