import Product from "./Product"
import { productDetails } from "./Product"

export default function NavBar() {
    let name = "Raghu's car gallery"
    return (
        <>
        <div>
            <h1>NavBar Component {name}</h1>
            <label>Product Name: {productDetails.name}</label>
            <label>Product Price: {productDetails.price}</label>
            <label>Product Color: {productDetails.color}</label>
        </div>
        <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        <Product />
        <Product />
        </>
    )
}

