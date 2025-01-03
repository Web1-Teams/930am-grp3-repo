//import 
import './acco.css';
import {useState } from 'react'
//function
const Yacco2 = () => {
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
        title :'Make a Gift Online:' ,
        dec :' You can use your credit or debit card to make a one-time gift using our donation form online.' , 
    },
    {
        title :'Donate via Mail:' ,
        dec :'Send a contribution: Rafeeq Care Centers of Nablus at zipcode = P403 Nablus.' , 
    },
    {
        title :'Make a Planned Gift:' ,
        dec :'If you have questions about making a bequest, please contact Ashley Masullo, Director of Development at Rafeeq-Heroes@Nabacc.org.' , 
    },
]

//export
export default Yacco2

