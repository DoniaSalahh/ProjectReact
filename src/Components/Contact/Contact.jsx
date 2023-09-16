import React from 'react'

export default function Contact() {
    return <>
    <div className="contact">
        <div className="container">
            <div className="text mb-3">
                <h1 className='text-center fw-bold mb-2'>CONATCT SECTION</h1>
                <div className="icon mb-2 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <form >
                <input type="text" className='form-control' placeholder='userName'/>
                <input type="number" className='form-control' placeholder='userAge'/>
                <input type="email" className='form-control' placeholder='userEmail'/>
                <input type="password" className='form-control' placeholder='userPassword'/>
                <button className='btn'>Send Message</button>
            </form>
        </div>
    </div>
    </>
}
