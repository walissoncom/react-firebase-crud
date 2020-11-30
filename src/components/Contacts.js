import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from '../firebase';

const Contacts = () => {

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err);
            }
        )
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
                <div className="col-md-7">
                    <div>List of contacts</div>
                </div>
            </div>
        </>
    );
}

export default Contacts;