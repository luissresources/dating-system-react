import React from 'react'

export const Patient = () => {
  return (
    <div className="patient-list bg-white rounded-md shadow-md px-4 py-8 my-6 sm:my-12">
      <p className="patient-list__pets-name uppercase text-gray-700 font-bold">Pet's name:{" "}
        <span className="font-normal capitalize">Gary</span>
      </p>
      <p className="patient-list__pet-owner uppercase text-gray-700 font-bold">Pet owner:{" "}
        <span className="font-normal capitalize">Kris Est</span>
      </p>
      <p className="patient-list__email uppercase text-gray-700 font-bold">Email:{" "}
        <span className="font-normal lowercase">example@example.com</span>
      </p>
      <p className="patient-list__date uppercase text-gray-700 font-bold">Date:{" "}
        <span className="font-normal capitalize">23/11/2012</span>
      </p>
      <p className="patient-list__discharge uppercase text-gray-700 font-bold">Discharge:{" "}
        <span className="font-normal capitalize">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum deleniti in molestias sed, at iure placeat voluptatem, quisquam aperiam delectus neque iusto eius sequi sint nostrum libero culpa provident fugiat!</span>
      </p>
    </div>
  )
}

export default Patient;