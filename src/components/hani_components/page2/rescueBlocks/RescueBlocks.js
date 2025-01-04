import "./RescueBlocks.css"
const Block=(props)=>{
    const typeTitle= (props.type) ? props.type : "text";
    const classes= (props.className) ? props.className : "non";  


    const handleChange = (event) => {
        localStorage.setItem(props.title, event.target.value); 
      };

      
    return(
        <>
    <div id="input" className="absulute">
        <lable for="type"> {props.title} <br/> </lable>
        <input id="type" type={typeTitle} className={classes}  placeholder={props.placeholder}   onChange={handleChange}/>
        <br/>
    </div>
    </>
    );
}

export default Block;