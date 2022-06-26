import { useSelector } from 'react-redux'

const ItemsCard = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price } = product
        return (
            <div className='col-12 col-md-4 col-lg-3' key={id}>
                <div className="card p-4" style={{width:"auto", height: "450px"}}>
                    <img src={image} className="card-img-top img-fluid" alt={title} style={{height: "240px"}} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
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