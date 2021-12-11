import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
function Home() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71K96AQwzgL._SX355_.jpg"
                    alt="First slide"
                    height="470" width="500"
                />
                <Carousel.Caption>
                    <h3>mahakal</h3>
                    <p>devo ke dev mahadev.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://t4.ftcdn.net/jpg/02/81/12/05/360_F_281120570_6DYKR8hm8VJNADWae1Zqqx9hEJbu4JC0.jpg"
                    alt="Second slide"
                    height="470" width="500"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://lh3.googleusercontent.com/5lHmN2EhmzKiSlwXuH0YxexUiSS1GBtGlK4uZ10IZk_7HSWJnj0mIUj8ILJjD-3Epz_EyD5DuG5qucyCxfhEINL0=w640-h400-e365-rj-sc0x00ffffff"
                    alt="Third slide"
                    height="470" width="500"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
}
export default Home;
