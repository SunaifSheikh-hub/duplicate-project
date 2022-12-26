import React from "react";
// import styled from "styled-components";
import  {Body} from "../TipCard/TipCard.styles";
// import { CardBody } from "./featuredMatches.styles";
import Image from "next/image";
// import logoImg from '../../../assets/images/logo.png'

const MatchCard = ( {flag, teamName, date, secondTeam, sponser} )=> {
    return (
    <Body>
        
        
        <div className="Match_card">
        <p className="flag"> {flag}</p>
        <p className="heading"> {teamName}</p>
        <p className="info_card_heading">{date}</p>
        </div>
        <div className='content'>
            <p className='info_card_text'>{secondTeam}</p>
            <p className='title'>{sponser}</p>
        </div>

    </Body>
    )
}

export default MatchCard;