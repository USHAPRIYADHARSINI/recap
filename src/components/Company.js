import React from 'react'

function Company({ company }) {
  return <div className='company-container'>
    <div className='title'>
      {/* {console.log(company)} */}
        <img src={company.logo} alt = "company logo" className='company-logo'/>
        <p className='company-location'>{company.location}</p>
    </div>
  <div className='company-contents'>
  <p className='company-name'>{company.name}</p>
  
  <p className='company-services'>Department : {company.services}</p>
  <p className='company-tags'>{company.tags}</p>
  <p className='company-vacancies orange'>Job openings :{company.vacancies}</p>
  <p className='company-vacancynumber orange'>vacancies : {company.vacancynumber}</p>
</div>
</div>
}

export default Company
