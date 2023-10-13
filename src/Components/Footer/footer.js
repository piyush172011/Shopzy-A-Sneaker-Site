import React from 'react'
import './footer.css';


export default function () {
    return (
        <footer className=" text-center" id='foot'>
            <div className="container p-3 pb-0">
                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline mb-4">
                                    <input type="email" id="form5Example27" className="form-control" placeholder='Enter your Email'/>
                                    
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <div className="text-center p-2" id='mainf'>
                © 2023 Copyright:
                <a className="text-dark" href="#">Shopzy.com</a>
            </div>
        </footer>

    )
}
