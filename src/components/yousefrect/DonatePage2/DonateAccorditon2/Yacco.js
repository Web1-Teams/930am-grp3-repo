//import 
import './acco.css';
import {useState } from 'react'
//function
const Yacco = () => {
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
        title :'Secondhand Items' ,
        dec :(
            <>
              <strong>
                We will happily accept your second-hand pet items. We ask that any
                used items are cleaned prior to donating. Rafeeq can accept:
              </strong>
              <ul>
                <li>Unopened and unexpired food and treats</li>
                <li>Blankets, Towels, Sheets</li>
                <li>Leashes and Harnesses</li>
                <li>Crates and Carriers</li>
                <li>Enrichment Toys</li>
                <li>Unopened Litter, Pellets</li>
              </ul>
              <strong>
                Our care centers accept donations daily between 10AM and 5PM.
                <br />
                Please note we cannot accept open/expired food and treats,
                medications, pillows, or mattresses.
              </strong>
            </>
          ), 
    },
    {
        title :'Towels for Tails' ,
        dec :'Donate your gently used bath-sized towels, sheets, and linens so we can keep our animals warm and cozy while they await their forever homes!' , 
    },
    {
        title :'Wish List' ,
        dec : (
            <>
             <strong>Send needed items directly to ACC from our Wish List and you can help feed and comfort the Boroughbreds in our care.<br/>
             To make a wish list, please contact us via email at <b>Rafeeq-Heroes@Nabacc.org</b>.</strong>
            </>
          ),
    },
]

//export
export default Yacco
