const Patient = ({patient, setPatient}) => {

  const {petsName, petOwner, email, discharge, symtomDetail} = patient;

  return (
    <div className="patient-list bg-white rounded-md shadow-md px-4 py-4">
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
      <div className="flex justify-between pt-4">
        <button 
          type="text" 
          className="py-1 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-all"
          onClick={() => setPatient(patient)}
          >
            Edit
        </button>
        <button 
          type="text" 
          className="py-1 px-6 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all">
            Delete
        </button>
      </div>
    </div>
  )
}

export default Patient;