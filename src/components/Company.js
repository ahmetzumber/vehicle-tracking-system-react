import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import '../assets/Company.css'
import { Form, Button } from 'react-bootstrap';
import { insertNewCompany } from '../actions'

function Company() {

    const [company, setCompany] = useState({
        companyName: "",
        companyLocation: ""
    });

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(company.companyName === "" || company.companyLocation === ""){
            window.alert('Please fill in the required fields!')
        }else{
            dispatch(insertNewCompany(company))
            window.alert('New company added !!')
            window.location.replace("/company")
        }
    }

    return (
        <div className="container">
            <h3>CREATE COMPANY</h3>
            <br/>
            <Form>
                <Form.Group className="mb-3" controlId="formCompanyName">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCompany({ ...company, companyName: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCompanyLocation">
                    <Form.Label>Company Location</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCompany({ ...company, companyLocation: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Company
