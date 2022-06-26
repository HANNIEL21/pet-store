// Icons
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
    return (
        <form className="col-12                                                                                                                                                                                                                                                                                                                                                                                                                 ms-auto d-flex">
            <div className="d-flex align-items-center justify-content-between border border-muted rounded-3 ps-2 w-100">
                <FaSearch className='text-primary m-0 h3 me-2' />
                <input type="search" className="form-control form-control-dark border-0 me-2" placeholder="Search for Pets, Brands, services" aria-label="Search" />
                <button className="btn btn-primary shadow fw-bold">Search</button>
            </div>
        </form>
    )
}

export default SearchBar