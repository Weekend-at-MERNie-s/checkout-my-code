import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = () => {
    return (
        <>
            <div classNameNameName="modal fade" id="orangeModalSubscription" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div classNameNameName="modal-dialog modal-notify modal-warning" role="document">

                    <div classNameNameName="modal-content">

                        <div classNameNameName="modal-header text-center">
                            <h4 classNameNameName="modal-title white-text w-100 font-weight-bold py-2">Join</h4>
                            <button type="button" classNameNameName="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" classNameNameName="white-text">&times;</span>
                            </button>
                        </div>




                        <div classNameNameName="md-form">
                            <i classNameNameName="fas fa-envelope prefix grey-text"></i>
                            <input type="email" id="form2" classNameNameName="form-control validate" />
                            <label data-error="wrong" data-success="right" for="form2">Your email</label>
                        </div>
                    </div>
                    <div classNameNameName="modal-body">
                        <div classNameNameName="md-form mb-5">
                            <i classNameNameName="fas fa-user prefix grey-text"></i>
                            <input type="text" id="form3" classNameNameName="form-control validate" />
                            <label data-error="wrong" data-success="right" for="form3">Password</label>
                        </div>



                        <div classNameNameName="modal-footer justify-content-center">
                            <a type="button" classNameNameName="btn btn-outline-warning waves-effect">Send <i classNameNameName="fas fa-paper-plane-o ml-1"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div classNameNameName="text-center">
                <a href="" classNameNameName="btn btn-default btn-rounded" data-toggle="modal" data-target="#orangeModalSubscription">Launch
                    modal Subscription</a>
            </div>
        </>
    )
}

export default Login;