const Portfolio =()=>{
    return(
    <div>
      <main id="main">

{/* <!-- ======= Our Portfolio Section ======= --> */}
<section className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Our Portfolio</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><h1>Our Portfolio</h1></li>
      </ol>
    </div>

  </div>
</section>


{/* <!-- ======= Portfolio Section ======= --> */}
<section className="portfolio">
  <div className="container">

    <div className="row">
      <div className="col-lg-12">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>App 1</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Web 3</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>App 2</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Card 2</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Web 2</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>App 3</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Card 1</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Card 3</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
        <div className="portfolio-item">
          <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h3>Web 1</h3>
            <div>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
 

</main>
    
    
    </div>
   
    )
}
export default Portfolio;