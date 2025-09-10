import { useState } from "react"
import Cake from "./Cake"

function AddCake(){
    var cake:any={}
    var [cakes, setCakes] = useState([])


    function handleCakeName(event:any) {
        cake.name=event.target.value
    }

    function handleCakePrice(event:any) {
        cake.price=event.target.value
    }

    function handleCakeImage(event:any) {
        cake.image=event.target.value
    }
    function handleAddCake() {
        cakes.push({...cake}) //push is used to add element in array
        setCakes([...cakes])
    }
    return (
        <>
            <div>Add Cakes to cart</div>
            <div className="form-group">
                <input onChange={handleCakeName} className="form-control" type="text" placeholder="Enter Cake Name" />
                <input onChange={handleCakePrice} className="form-control" type="text" placeholder="Enter Cake Price" />
                <input onChange={handleCakeImage} className="form-control" type="text" placeholder="Upload Cake Image" />
                <button onClick={handleAddCake} className="btn btn-primary">Add Cake</button>
            </div>
            <div>
                <h1>List of Cakes in cart</h1>
                <ul>
                    {cakes.map(function(each:any){
                        return (
                            <Cake name={each.name} price={each.price} image={each.image} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default AddCake