import React from 'react'

const Dropdown = () => {
    const isVendor = true;
    return (
        <>
            <div className="dropdown">
                <button className="avatar btn-secondary dropdown-toggle shadow-md text-primary me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    H
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item text-primary fw-bold" href="/profile">Profile</a></li>
                    {
                        (isVendor) ?
                            <li><a className="dropdown-item text-primary fw-bold" href="/dashboard">DashBoard</a></li>
                            :
                            ""
                    }
                    <li><a className="dropdown-item text-primary fw-bold" href="/payment">Payment</a></li>
                    <li><a className="dropdown-item text-primary fw-bold" href="/setting">Setting</a></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown