const Form = () => {
  return (
    <div className='mb-6 px-6 md:px-0'>
      <h2 className="px-1 py-2 text-center text-white bg-indigo-600 rounded-md">Seguimiento pacientes</h2>
      <p className="text-center my-6">
        Añade pacientes y{' '}
        <span className="text-indigo-700 text capitalize">
          administradores
        </span>
      </p>

      <form action="" className="bg-white rounded-md shadow-md px-4 py-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="pets-name" className="uppercase text-gray-800 font-bold">Pet's name</label>
          <input
           type="text" id="pets-name" placeholder="Name" className="py-1 border border-indigo-300 rounded-md placeholder-gray-500"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="pet-owner" className="uppercase text-gray-800 font-bold">Pet owner</label>
          <input
           type="text" id="pet-owner" placeholder="Owner name" className="py-1 border border-indigo-300 rounded-md placeholder-gray-500"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="uppercase text-gray-800 font-bold">Email</label>
          <input
           type="email" id="email" placeholder="Email" className="py-1 border border-indigo-300 rounded-md placeholder-gray-500"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="date" className="uppercase text-gray-800 font-bold">Discharge</label>
          <input
           type="date" id="date" className="py-1 border border-indigo-300 rounded-md placeholder-gray-500"/>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="symptom detail" className="uppercase text-gray-800 font-bold">Symtom detail</label>
          <textarea
           id="symptom detail" className="py-1 border border-indigo-300 rounded-md placeholder-gray-500"/>
        </div>
        <input type="submit" value="Save" className="py-2 text-center bg-indigo-600 w-full text-white hover:bg-indigo-700 transition-all cursor-pointer"/>
      </form>
    </div>
  )
}

export default Form;