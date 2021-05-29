import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// import "../App.css";

export default class SwipeToSlide extends React.Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <div className="main-slider">
                <Slider {...settings}>
                    <div className="upper-list">
                        <div className="list-slider">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Slice of Life</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>165 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >
                        <div className="list-slider-1">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Pun Ki Baat</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>6 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >
                        <div className="list-slider-2">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Townhall</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>16 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >
                        <div className="list-slider-3">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Off The Record</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>6 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-4">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Cheap Vs Expensive</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>12 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-5">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Interviews</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>19 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-6">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Om Nom Nom</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>85 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-7">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>FIQ</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>4 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-8">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Scoopwhoop Investigates</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>5 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-9">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Specials</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>73 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-10">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Invisible Humans</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>8 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-11">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Sneh</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>5 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-12">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Ok Tested</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>143 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-13">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Scoopwhoop Investigates</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>5 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-14">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Street View</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>33 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-15">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>Sw Cafe</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span>6 videos</span>
                            </div>

                        </div>
                    </div>
                    <div className="upper-list" >

                        <div className="list-slider-16">
                            <div className="slider-shadow"></div>
                            <div className="show-list-body">
                                <div className="slider-heading">
                                    <h4>In My Opinion</h4>
                                </div>
                                <div className="list-more">
                                    <Link to="#"><p>Watch More</p></Link>
                                </div>
                                <span> videos</span>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}