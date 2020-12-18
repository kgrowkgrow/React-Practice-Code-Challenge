import React, { Fragment } from 'react'

const Sushi = ({data, handleSushiClick, eaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eaten.includes(data) ? null : handleSushiClick(data.id)}>
          { eaten.includes(data) ? null : <img src={ data.img_url } width="100%" />}      
      </div>
      <h4 className="sushi-details">
        {data.name} - ${data.price}
      </h4>
    </div>
  )
}

export default Sushi