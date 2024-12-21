import React from 'react';
import Card from'./Card';
import "./HaniStyle.css"
const HeaderCard = (props)=>{
    return(
        
        <>
    <div id="section_1"className="container text-center py-5">
      <h1 className="mb-4" style={{color: 'rgb(119, 67, 219)'}}>{props.header}</h1>
      <dl className="row  align-items-stretch  justify-content-center">
       <Card
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