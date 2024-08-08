import '../components/styles/Loader.css'

const Loader = () => {
  return (
    <div className='loader flex-container'>
      <img src="/img/portal.webp" alt="loading" />
      <p className='text'>Loading...</p>
    </div>
  )
}

export default Loader