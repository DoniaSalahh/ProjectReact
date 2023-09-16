import React from 'react'

export default function Portfolio() {
    return <>
    <div className="portfolio">
        <div className="container">
            <div className="text mb-3">
                <h1 className='text-center fw-bold mb-2'>PORTFOLIO COMPONENT</h1>
                <div className="icon mb-2 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 mb-2">
                    <div className="image">
                        <div className="overlay d-flex justify-content-center  align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/poert1.png " className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="image">
                        <div className="overlay  d-flex justify-content-center  align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/port2.png" className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="image">
                        <div className="overlay  d-flex justify-content-center  align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/port3.png" className='w-100' alt=""  />
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 mb-2">
                    <div className="image">
                        <div className="overlay  d-flex justify-content-center  align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/poert1.png" className='w-100' alt=""  />
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="image">
                        <div className="overlay  d-flex justify-content-center  align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/port2.png" className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <div className="overlay  d-flex justify-content-center  align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <img src="images/port3.png" className='w-100' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
