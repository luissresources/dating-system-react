export const Error = ({message}) => {
  return (
    <div>
        <p 
            className='text-white bg-red-700 py-1 px-1 my-4 uppercase text-center'
        >
            {message}
        </p>
    </div>
  )
}

export default Error;