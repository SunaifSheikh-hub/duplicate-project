import React from 'react'
import { Body } from '../TipCard/TipCard.styles'

const lastPara = ({ title, date, tipped_at }) => {
  return (
    <Body>
        <div className="info_card">
            <h3 className='info_card_heading'>Your Football Tips</h3>
            {/* <p className='info_card_text'>{tipped_at}</p> */}
            <h4 className='secondheading'>Welcome to football World</h4>
        </div>
        <div className='content'>
                    <br /> <br /> <br /><br /><br />
                
                 <p className='heading'>Free Super Tips is the home of free sports betting tips</p>   

                 <p>Our experienced tipsters have been finding value in betting for years.Whether <br />
                  you’re a seasoned stat-loving sports fan  
                  who’s addicted to analytics or a passionate <br />
                   punter looking for that perfect accumulator, we can help.</p>
            {/* <p className='heading'>{date}</p> */}
            {/* <p className='title'>{title}</p> */}
        </div>
    </Body>
  )
}

export default lastPara