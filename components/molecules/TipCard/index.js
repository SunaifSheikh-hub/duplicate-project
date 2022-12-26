import React from 'react'
import {Body} from "./TipCard.styles"

const TipCard = ({ title, date, tipped_at }) => {
  return (
    <Body>
        <div className="info_card">
            <p className='info_card_heading'>Tipped At</p>
            <p className='info_card_text'>{tipped_at}</p>
        </div>
        <div className='content'>
            <p className='heading'>{date}</p>
            <p className='title'>{title}</p>
        </div>
    </Body>
  )
}

export default TipCard
