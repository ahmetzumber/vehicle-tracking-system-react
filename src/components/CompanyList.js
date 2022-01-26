import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCompanies } from '../actions'
import '../assets/Company.css'
import { deleteCompanyById } from '../actions'

function CompanyList() {

  const companies = useSelector(state => state.company.companies)
  const dispatch = useDispatch()

  useEffect(() => dispatch(getCompanies()), [dispatch])

  const handleDelete = (ID) => {
    if (window.confirm('Are you sure wanted to delete this company?')) {
        dispatch(deleteCompanyById(ID))
        window.location.replace("/companies")
    }
}

  return (
    <div className="container">
      <h3>COMPANIES</h3>
      <br />
      {companies.map((company) => (
        <div key={company.companyId} id="wrapper">
          <ul key={company.companyId}>
            <li className="company">Company Name: {company.companyName}</li>
            <li className="company">Company Location: {company.companyLocation}</li>
          </ul>
          <button id="remove" type="button" onClick={() => handleDelete(company.companyId)}>
            DELETE
          </button>
        </div>

      ))}
    </div>
  )
}

export default CompanyList
