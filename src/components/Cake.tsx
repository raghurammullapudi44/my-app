function Cake({name,price,image}:{name:string,price:string,image:string}){
    return (
        <>
            <div className="card">
                <ul>
                    <li>{name}</li>
                    <li>{price}</li>
                    <li>{image}</li>
                </ul>
            </div>
        </>
    )
}
export default Cake;    