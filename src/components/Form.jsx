import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({setPatients, patients}) => {
  const [petsName, setPetsName] = useState('Pet');
  const [petOwner, setPetOwner] = useState('User');
  const [email, setEmail] = useState('');
  const [discharge, setDischarge] = useState('');
  const [symtomDetail, setSymtomDetail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation 
    if ([petsName, petOwner, email, discharge, symtomDetail].includes('')) {
      setError(true);
    }else {
      setError(false);

      const createPatients = {
        petsName,
         petOwner,
         email,
         discharge,
         symtomDetail
      }

      setPatients([...patients, createPatients]);
      
      // Reset Form

      setPetsName('');
      setPetOwner('');
      setEmail('');
      setDischarge('');
      setSymtomDetail('');
    }
  };

  return (
    <div className="mb-6 px-6 md:px-0">
      <h2 className="px-1 py-2 text-center text-white bg-indigo-600 rounded-md">
        Patient follow-up
      </h2>
      <p className="text-center my-6">
        Add patients y{" "}
        <span className="text-indigo-700 text capitalize">administrators</span>
      </p>

      <form 
        action="" 
        className="bg-white rounded-md shadow-md px-4 py-8"
        onSubmit={handleSubmit}>
          { error && (
            <Error />
          )}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="pets-name"
            className="uppercase text-gray-800 font-bold"
          >
            Pet's name
          </label>
          <input
            type="text"
            id="pets-name"
            placeholder="Name"
            className="py-1 border border-indigo-300 px-2 placeholder-gray-500"
            value={petsName}
            onChange={(e) => setPetsName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="pet-owner"
            className="uppercase text-gray-800 font-bold"
          >
            Pet owner
          </label>
          <input
            type="text"
            id="pet-owner"
            placeholder="Owner name"
            className="py-1 border border-indigo-300 px-2 placeholder-gray-500"
            value={petOwner}
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="uppercase text-gray-800 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="py-1 border border-indigo-300 px-2 placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="discharge" className="uppercase text-gray-800 font-bold">
            Discharge
          </label>
          <input
            type="date"
            id="discharge"
            className="py-1 border border-indigo-300 px-2 placeholder-gray-500"
            value={discharge}
            onChange={(e) => setDischarge(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="symptom detail"
            className="uppercase text-gray-800 font-bold"
          >
            Symtom detail
          </label>
          <textarea
            id="symptom detail"
            className="py-1 border border-indigo-300 px-2 placeholder-gray-500"
            value={symtomDetail}
            onChange={(e) => setSymtomDetail(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Save"
          className="py-2 text-center bg-indigo-600 w-full text-white hover:bg-green-700 transition-all cursor-pointer font-bold"
          // onClick={() => props.onClickCreatePatient(patient)}
        />
      </form>
    </div>
  );
};

export default Form;
