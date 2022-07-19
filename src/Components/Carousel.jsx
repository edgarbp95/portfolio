import React from 'react'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.ibb.co/5LHmmwn/ecommerce.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/T264hY8/rick-morty-project.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/Gk1rVJ4/Instant-Gif-2022-07.gif" className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
    </>
  )
}


export default Carousel
