import './styles/LocaationInfo.css'

const LocationInfo = ({location}) => {
    
  return (
    <div>
        {location?.residents.length ? 
        <section className='location'>
            <h2 className='location__name'>{location?.name}</h2>
            <ul className='location__list flex-container'>
                <li className='location__item grid-container'>
                    <span className='location__label'>Type: </span>
                    <span className='location__value'>{location?.type}</span>
                </li>
                <li className='location__item grid-container'>
                    <span className='location__label'>Dimension: </span>
                    <span className='location__value'>{location?.dimension}</span>
                </li>
                <li className='location__item grid-container'>
                    <span className='location__label'>Population: </span>
                    <span className='location__value'>{location?.residents.length}</span>
                </li>
            </ul>
        </section> : (
        <div className='text__container flex-container'>
            <p>The population of {location?.name} is {location?.residents.length}, why?</p>
            <p>Ask Rick Sanchez or... maybe Morty?</p>
        </div>)}
    </div>
  )
}

export default LocationInfo