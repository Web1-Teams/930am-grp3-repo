//import 
import './acco.css';
import {useState } from 'react'
//function
const Yaccopage1 = () => {
    const [selected , setSelected] = useState(null)
    const toggle = i =>{
        if(selected === i ){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="accordion-container">
      {data.map((item, i) => (
        <div key={i} className="accordion-item">
          <div className="accordion-header"  onClick={() => toggle(i)}>
            <h4>{item.title}</h4>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? 'accordion-body' : 'accordion-body-hidden'}>
            {item.dec}
          </div>
        </div>
      ))}
    </div>
        
        
    )
}
const data =[
    {
        title :'Animal Caretaker' ,
        dec :' For individuals who love spending time with animals, ensuring their comfort and well-being by feeding, grooming, and cleaning their spaces.' , 
    },
    {
        title :'Event Organizer' ,
        dec :'A fun and engaging way to plan and execute community events that bring people together for a great cause.' , 
    },
    {
        title :'Community Garden Helper' ,
        dec :'For those who want to roll up their sleeves and get hands-on in planting, watering, and maintaining a shared garden to provide fresh produce to families in need.For those who want to roll up their sleeves and get hands-on in planting, watering, and maintaining a shared garden to provide fresh produce to families in need.' , 
    },
]

//export
export default Yaccopage1

