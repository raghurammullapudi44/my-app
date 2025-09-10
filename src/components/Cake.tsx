function Cake({ name, price, image, cakeid }: { name: string; price: string; image: string; cakeid?: string }) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={name} style={{ height: "180px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: ₹{price}</p>
                {cakeid && <p className="card-text"><small className="text-muted">Cake ID: {cakeid}</small></p>}
            </div>
        </div>
    );
}

export default Cake;