import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/ResidentsCard.css'


const ResidentsCard = ({url}) => {
const [resident, getResident, error, isLoading] = useFetch(url)

useEffect(() => {
    getResident()
}, [])


   return (
   <article className="resident">
      {isLoading ? (
        <p className='text'>Loading...</p>) : (
        <div>
          <header className="resident__header">
            <img
              className="resident__image"
              src={resident?.image}
              alt={resident?.name}
            />
            <div className="resident__status-container flex-container">
              <div
                className={`resident__status-circle ${resident?.status}`}
              ></div>
              <div className="resident__status">{resident?.status}</div>
            </div>
          </header>
          <section className="resident__body">
            <h3 className="resident__name">{resident?.name}</h3>
            <hr className="resident__hr" />
            <ul className="resident__list grid-container">
              <li className="resident__item grid-container">
                <span className="resident__label">Specie:</span>
                <span className="resident__value">{resident?.species}</span>
              </li>
              <li className="resident__item grid-container">
                <span className="resident__label">Origin:</span>
                <span className="resident__value">{resident?.origin.name}</span>
              </li>
              <li className="resident__item grid-container">
                <span className="resident__label">Episodes where appear:</span>
                <span className="resident__value">
                  {resident?.episode.length}
                </span>
              </li>
            </ul>
          </section>
        </div>
      )}
    </article>
  );
}
export default ResidentsCard