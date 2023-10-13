import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
export default function login() {
    return (
        <>
            <button type="button" class="btn btn-outline-warning btun">
                <Link to='/'>Back⇦</Link>
            </button>
            <div className='photo-left'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"></img></div>
            <form>
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </>
    )
}
