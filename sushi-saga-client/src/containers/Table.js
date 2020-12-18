import React, { Fragment } from 'react'

const Table = ({eaten}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const sushiPrice = eaten.reduce((total, currentValue) => total - currentValue.price, 100) 

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${sushiPrice <= 0 ? 0 : sushiPrice} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table