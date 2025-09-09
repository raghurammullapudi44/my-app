import User from "./User"

function UserList() {
    var user1:any = [{ gender:"male", name: "Raghu", age: 28, email: "raghu@example.com", location: "India" }, {gender:"female", name:"Sudha", age:22, email:"sudha@example.com", location:"India", phoneNumber:"123"}]
        // adding new property to object
    user1.map(function(each:any){
        if(each.phoneNumber){
            var phLabel = "contact exists"
        }
        else{
            var phLabel = "contact does not exists"
        }
        each.phLabel = phLabel
    })
    return (
        <>  
        <h1>User List Component</h1>
        <div>
            <h1>User List Component</h1>
            <User data={user1} />
        </div>
        <div className="card col">
            <h1>User List Component with list display</h1>
            <ul>
                {user1.map(function(each:any,index:number){
                    if(each.name){ // conditional rendering
                        return (
                        <>
                        <div className="card col">
                            <li key={index}>{each.name}</li>
                            <li>{each.age}</li>
                            <li>{each.email}</li>
                            <li>{each.location}</li>
                            {each.age>20 && each.gender==="male" ? <li>{"Eligible"}</li> : <li>{"Not Eligible"}</li>}
                            <li>{each.phLabel}</li>
                        </div>
                        </>
                    )
                }
                    else{
                        return (<h1>No data found</h1>)
                    }
                })}
            </ul>
        </div>
        </>
    )
}

export default UserList


 // passing object as props means data is prop name and user1 is value so in User component we can access it by props.data
 //  or we can destructure it like function User({data}:any) and then use data.name, data.age etc
 // or we can destructure it again like var {name, age, email, location} = data; and then use name, age etc directly
 // we can also destructure it in function parameter like function User({data}:any) and then var {name, age, email, location} = data;
 // we can also destructure it directly in function parameter like function User({data}:{data:{name:string, age:number, email:string, location:string}}) and then use data.name, data.age etc directly
 // we can also destructure it directly in function parameter like function User({data:{name, age, email, location}}:{data:{name:string, age:number, email:string, location:string}}) and then use name, age etc directly
 // we can also define interface for props and use it like interface UserProps { data: { name: string; age: number; email: string; location: string; } } function User({data}:UserProps) { ... }
 // we can also define type for props and use it like type UserProps = { data: { name: string; age: number; email: string; location: string; } } function User({data}:UserProps) { ... }
 // we can also use default props like function User({data} = {data: {name: "Default", age: 0, email: "default@example.com", location: "Unknown"}}) { ... }
 // in step 4 we can just keep var user1 = { name: "Raghu", age: 24, email: "raghu@example.com", location: "India" } and in step 5 we can add user1.gender = "Male" it works but will show warning in typescript for that to 
 // avoid that we can use var user1:any = { name: "Raghu", age: 24, email: "raghu@example.com", location: "India" }