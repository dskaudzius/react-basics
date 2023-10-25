import React from 'react'
import './CarItem.css';

const CarItem = ({ data }) => {
  let { basePrice, brand, color, engine, fotoUrl, mileage, model } = data;
  let renderInfoList = (basePrice || color || engine || mileage);
  let carName = model ? `${brand} (${model})` : brand; 

  return (
    <div className='car-item'>
      <h2 className='car-title'>{carName}</h2>
      {fotoUrl && <img className='car-image' src={fotoUrl} alt={`${brand} ${model} car ${color} color`} />}

      {renderInfoList && (
        <ul className='car-info-list'>
          {basePrice && <li><strong>Base price: </strong>{basePrice}€</li>}
          {color && <li><strong>Color: </strong>{color}</li>}
          {engine && <li><strong>Engine: </strong>{engine}</li>}
          {mileage && <li><strong>Mileage: </strong>{mileage}km</li>}
        </ul>
      )}
    </div>
  )
}

export default CarItem