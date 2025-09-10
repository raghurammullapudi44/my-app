import Cake from "./Cake"

function CakesList({ cakes }) {
    return (
        <div className="row" style={{ marginTop : "70px" }}>
            {cakes?.map((each, index) => (
                <Cake
                    key={index}
                    name={each.name}
                    price={each.price}
                    image={each.image}
                    cakeid={each.cakeid}
                />
            ))}
        </div>
    );
}

export default CakesList