import Product from "./Product"
import { productDetails } from "./Product"
import { Product1 } from "./Product"
import { Product2 } from "./Product"
import { Product3 } from "./Product"
import UserList from "./UserList"

export default function NavBar() {
    let name = "Raghu's car gallery"
    let users = ["Raghu", "Kumar", "Singh"]
    return (
        <>
        {users.map(function(each){
            return (<li>{each}</li>)
        })}
        <div className="card col">
            <h1>Users List</h1>
            <ul>
                {users.map(function(each){
                    return (<button>{each}</button>)
                })}
            </ul>
        </div>
        <div>
            <UserList />
        </div>
        <div>
            <h1>NavBar Component {name}</h1>
            <label>Product Name: {productDetails.name}</label>
            <label>Product Price: {productDetails.price}</label>
            <label>Product Color: {productDetails.color}</label>
        </div>
        <div className="row">
            <Product />
            <Product1 name="iphone" price="100" color="black" />
            <Product1 name="samsung" price="200" color="blue" />
            <Product1 name="oneplus" price="300" color="green" />
        </div>
        <Product2 name="xiaomi" price="400" color="red" />
        <Product3 name="nokia" price="500" color="white" />
        </>
    )
}

