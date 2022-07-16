import Patient from './Patient';

const PatientList = (patients, petsName, petOwner, email, discharge, symtomDetail) => {
  
  return (
    <div className="px-6 md:px-0">
      <h2 className="px-1 py-2 text-center text-white bg-indigo-700 rounded-md mb-6">Patient List</h2>
      <div className='sm:h-screen sm:overflow-y-scroll'>
        {/* {
         patients.map ((patient) => {
          <Patient 
            petsName  = {patient.petsName}
            petOwner = {patient.petOwner}
            email = {patient.email}
            discharge = {patient.discharge}
            symtomDetail = {patient.symtomDetail}
          />
         })
        } */}
      </div>  
    </div>
  )
}

export default PatientList;