import {useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';
import Footer from './components/Footer';
import Patient from './components/Patient';

function App() {

  const [patients, setPatients] = useState([]);

  return (
    <>
      <div className='container mx-auto mt-6 flex justify-center flex-col'>
        <Header />
        <div className='grid md:grid-cols-2 gap-1 mt-12 lg:px-32'>
          <Form 
            // onClickCreatePatient = {savePatients}
            setPatients = {setPatients}
            patients = {patients}
          />
          <PatientList 
            patients = {patients}
          />
          <Patient />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
