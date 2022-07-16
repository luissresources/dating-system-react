import React from 'react'

export const Patient = ({petsName, petOwner, email, discharge, symtomDetail}) => {
  return (
    <div className="patient-list bg-white rounded-md shadow-md px-4 py-8 my-6 sm:my-12">
      <p className="patient-list__pets-name uppercase text-gray-700 font-bold">Pet's name:{" "}
        <span className="font-normal capitalize">{petsName}</span>
      </p>
      <p className="patient-list__pet-owner uppercase text-gray-700 font-bold">Pet owner:{" "}
        <span className="font-normal capitalize">{petOwner}</span>
      </p>
      <p className="patient-list__email uppercase text-gray-700 font-bold">Email:{" "}
        <span className="font-normal lowercase">{email}</span>
      </p>
      <p className="patient-list__discharge uppercase text-gray-700 font-bold">Date:{" "}
        <span className="font-normal capitalize">{discharge}</span>
      </p>
      <p className="patient-list__symtom-detail uppercase text-gray-700 font-bold">Discharge:{" "}
        <span className="font-normal capitalize">{symtomDetail}</span>
      </p>
    </div>
  )
}

export default Patient;