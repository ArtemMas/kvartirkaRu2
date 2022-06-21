import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "../../../../assets/images/img1.jpg";
import img3 from "../../../../assets/images/img3.jpg";
import img2 from "../../../../assets/images/img2.jpg";

const ExampleCarousel = () => {
    return (
        <Carousel fade variant='dark'>
            <Carousel.Item>
                <img
                    className="rounded mx-auto d-block w-60"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="rounded mx-auto d-block w-60"
                    src={img3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="rounded mx-auto d-block w-60"
                    src={img2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ExampleCarousel