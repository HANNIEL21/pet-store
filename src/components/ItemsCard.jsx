import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ItemsCard = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price } = product
        return (
            <div className='col-12 col-md-4 col-lg-3' key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card p-4 w-100" style={{ width: "auto", height: "450px" }}>
                        <img src={image} className="card-img-top img-fluid" alt={title} style={{ height: "240px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">{price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ItemsCard