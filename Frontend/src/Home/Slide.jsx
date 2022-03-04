import React from 'react'

import {Carousel} from 'react-bootstrap'
export const Slide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100 slide-pic"
                    src="https://www.perfectcompanion.com/wp-content/uploads/2015/04/PREVIEW_Me-O-Gold_Online-Product-Banner.jpg"
                    alt="First slide"
                />
                {/* <Carousel.Caption className="bg-secondary opacity-50">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-pic w-100"
                    src="https://perfectcompanion.com.my/wp-content/uploads/2020/02/74463110_762032647577972_6544351465459154944_o-1024x379.jpg"
                    alt="Second slide"
                />

                {/* <Carousel.Caption className="bg-secondary">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-pic w-100"
                    src="https://www.perfectcompanion.com/wp-content/uploads/2017/02/website-banner.jpg"
                    alt="Third slide"
                />

                {/* <Carousel.Caption className="bg-secondary">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}

