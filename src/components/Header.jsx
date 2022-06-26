import React from 'react';
import SearchBar from './SearchBar';
import { FaShoppingCart } from "react-icons/fa"
import Dropdown from './Dropdown';


const Header = () => {
    const user = true;
    
    return (
        <header className="p-2 px-3 bg-white shadow text-white sticky-top">
            <div className="container-fluid">
                <div className="row align-items-center d-flex justify-content-lg-start">
                    <div className="col-4 col-md-2 d-flex align-items-center justify-content-center">
                        <a href="/" className="d-flex align-items-center m-0 text-white text-decoration-none logo p-0 ">
                            <img src="./img/logo1.png" alt="" className='img-fluid w-100 h-100' />
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 d-none d-md-flex justify-content-center align-items-center ms-auto">
                        <SearchBar />
                    </div>
                    <div className="col-8 col-md-4 col-lg-3">
                        {(!user)
                            ? 
                                <div className='d-flex align-items-center justify-content-end'>
                                    <a href='/login' className="btn btn-outline-primary fw-bold">
                                        login
                                    </a>
                                </div>
                            : 
                            <div className='d-flex align-items-center justify-content-end'>
                                <Dropdown />
                                <a href='/cart' type="button" className="btn btn-primary fw-bold"><FaShoppingCart className='m-0 h4 me-2' />Cart</a>

                            </div>

                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header