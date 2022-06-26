const Carousel = () => {


  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner img-rounded-1">
        <div className="carousel-item active">
          <div className="card-img-overlay">
            <div className="carousel-caption text-start text-white d-none d-md-block">
              <h5 className="display-5 fw-bold">
                Hassle free Laundry <br />
                Services
              </h5>
              <p className="h3 lead">Enjoy upto 30% off</p>
            </div>
          </div>
          <img src="./img/c1.jpg" className="d-block img-fluid"
            alt="carousel-image of brands or pet" />

        </div>
        <div className="carousel-item">
          <div className="card-img-overlay">
            <div className="carousel-caption text-start text-white d-none d-md-block">
              <h5 className="display-5 fw-bold">
                Hassle free Laundry <br />
                Services
              </h5>
              <p className="h3 lead">Enjoy upto 30% off</p>
            </div>
          </div>
          <img src="./img/c2.jpg" className="d-block w-100 img-rounded-1" alt="carousel-image of brands or pets" />
        </div>
        <div className="carousel-item">
          <div className="card-img-overlay">
            <div className="carousel-caption text-start text-white d-none d-md-block">
              <h5 className="display-5 fw-bold">
                Hassle free Laundry <br />
                Services
              </h5>
              <p className="h3 lead">Enjoy upto 30% off</p>
            </div>
          </div>
          <img src="./img/c3.jpg" className="d-block  img-fluid" alt="carousel-image of brands or pets" />
        </div>
      </div>
    </div>

  )
}

export default Carousel