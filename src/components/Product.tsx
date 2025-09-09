export var productDetails = {
        name: "Car",
        price: 100000,
        color: "Red"
    } 
export default function Product(){
    
    return (
        <div className="card col">
            <h1>Product Component</h1>
            <label>Product Name: {productDetails.name}</label>
            <label>Product Price: {productDetails.price}</label>
            <label>Product Color: {productDetails.color}</label>
        </div>
    )
}