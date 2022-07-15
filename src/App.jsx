import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='container mx-auto mt-6 flex justify-center flex-col'>
        <Header />
        <div className='grid md:grid-cols-2 gap-1 mt-12 lg:px-32'>
          <Form />
          <PatientList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
