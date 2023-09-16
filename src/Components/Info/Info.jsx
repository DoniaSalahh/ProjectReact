import React from 'react'

export default function Info() {
    return<>
    <div className="info text-center text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <span>Clark, MO 65243</span>
                </div>
                <div className="col-md-4 mb-5">
                    <h2 className='mb-3'>AROUND THE WEB</h2>
                    <div className="icons d-flex align-items-center justify-content-center">
                        <div className="icon">
                        <i class="fa-brands fa-facebook me-2"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-brands fa-twitter me-2"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-brands fa-linkedin me-2"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-solid fa-globe me-2"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap 
                        theme created by Route
                    </p>
                </div>
            </div>
        </div>
    </div>

    </>
}
