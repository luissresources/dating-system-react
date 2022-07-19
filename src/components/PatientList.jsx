import Patient from './Patient';
import { v4 as uuidv4 } from 'uuid';

const PatientList = ({patients, setPatient}) => {
  
  const numPatients = patients.length;

  return (
    <div className="px-6 md:px-0">
      {
        numPatients > 0 ? 
        <>
          <h2 className="px-1 py-2 text-center text-white bg-indigo-700 rounded-md mb-6">
        Patient List</h2>
          <p className="text-center my-6">
            {" "}
            <span className="text-indigo-700 text capitalize">{`Total (${numPatients})`}</span>
          </p>
          <div className='sm:h-screen sm:overflow-y-scroll'>
            { 
            patients.map((patient) => {
              return ( 
                <Patient 
                  key = {uuidv4()}
                  patient={patient}
                  setPatient = {setPatient}
                />
              ) 
            })
            }
          </div>
        </>
        : 
        <>
          <h2 className="px-1 py-2 text-center text-white bg-indigo-700 rounded-md mb-6">
          No Patients</h2>
          <p className="text-center my-6">
          Start adding patients and{" "}
          <span className="text-indigo-700 text capitalize">you can see them here</span>
      </p>
        </>
      }  
    </div>
  )
}

export default PatientList;