export var productDetails = {
        name: "Car",
        price: 100000,
        color: "Red"
    } 
function Product(){
    
    return (
        <div className="card col">
            <h1>Product Component</h1>
            <label>Product Name: {productDetails.name}</label>
            <label>Product Price: {productDetails.price}</label>
            <label>Product Color: {productDetails.color}</label>
        </div>
    )
}

function Product1(props:any){

    return (
        <div className="card col">
            <h1>Product Component</h1>
            <label>Product Name: {props.name}</label>
            <label>Product Price: {props.price}</label>
            <label>Product Color: {props.color}</label>
        </div>
    )
}

function Product2({name, price, color}:any){ 

    return (
        <div className="card col">
            <h1>Product Component</h1>
            <label>Product Name: {name}</label>
            <label>Product Price: {price}</label>
            <label>Product Color: {color}</label>
        </div>
    )
}

function Product3({name, price, color}:{name:string, price:string, color:string}){

    return (
        <div className="card col">
            <h1>Product Component</h1>
            <label>Product Name: {name}</label>
            <label>Product Price: {price}</label>
            <label>Product Color: {color}</label>
        </div>
    )
}


export default Product
export { Product1, Product2 , Product3 }