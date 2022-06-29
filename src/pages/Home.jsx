import React from 'react'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import ProductListing from '../components/ProductListing'

const Home = () => {

  return (
    <>
      <section className='pt-4 px-5 container-fluid'>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 p-0">
            <Carousel />
          </div>
          <div className="col-3 d-none d-md-flex">
            <Categories />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-3 min-vh-100">
          <ProductListing />
        </div>
      </section>
    </>
  )
}

export default Home