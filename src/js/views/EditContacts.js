import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function EditForm(){
    
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(()=>{actions.getContact(params.id)},[])    

    const handleClick = (e)=>{
        e.preventDefault()
        const contact = {
            "full_name": document.getElementById('inputName').value,
            "email": document.getElementById('InputEmail').value,
            "agenda_slug": 'Goldor',
            "address": document.getElementById('inputAddress').value,
            "phone": document.getElementById('inputPhone').value
        }
        console.log(contact)
        actions.updateContact(contact, params.id)
        alert('Your contact has been updated')     
    }
    
    return (
        <div className="container-fluid">
            <form>
                <div className="mb-3">
                    <label for="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" />
                </div>
                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress"/>
                </div>
                <div className="container-fluid">
                     <button onClick = {(e)=>{handleClick(e)}} type="submit" className="btn btn-primary">Save</button>
                     <Link to='/'>Go back to your contacts</Link>
                </div>
           </form>
        </div>
    )
}