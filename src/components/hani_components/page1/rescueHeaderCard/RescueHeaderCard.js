import React from 'react';
import Card from '../rescueCard/RescueCard';
// import "./HaniStyle.css";
import "./RescueHeaderCard.css"
const HeaderCard = (props)=>{
    return(
        
        <>
      <h1 className="mb-4" id='header1' style={{color: 'rgb(119, 67, 219)' }}>{props.header}</h1>
    <div id={props.section}>
      <dl className="row-align-items-stretch-justify-content-center">
       <Card
       linkCard={props.link}
       button = {props.button}
       title = {props.TitleHead} 
       description = {props.descriptionHead}
       photo = {props.photoHead}
       />
        <Card
       title = {props.TitleHead1} 
       description = {props.descriptionHead1}
       photo = {props.photoHead1}
       />
        <Card
       title ={props.TitleHead2} 
       description ={props.descriptionHead2}
       photo = {props.photoHead2}
       />
        <Card
       title = {props.TitleHead3}  
       description = {props.descriptionHead3}
       photo = {props.photoHead3}
       />
      </dl>
    </div>
    </>
       
    );
}
export default HeaderCard ;