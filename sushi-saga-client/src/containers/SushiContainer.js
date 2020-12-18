import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = ({sushi, page, handlePageClick, handleSushiClick, eaten}) => {
  
  const slicedSushi =  sushi.slice(page * 4, (page * 4 )+ 4 )

  return (
    <Fragment>
      <div className="belt">
        {slicedSushi.map(singleSushi => {
         return <Sushi key={singleSushi.id} data={singleSushi} eaten={eaten} handleSushiClick={handleSushiClick}/>
        })}
        <MoreButton handlePageClick={handlePageClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer