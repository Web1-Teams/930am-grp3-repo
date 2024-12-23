//import 
import '../../../styles/acco.css';
//function 
const Yaccordion = () =>{
    return(
        <div className="custom-accordion">
    <div className="accordion-item">
        <input type="checkbox" id="caretaker" className="accordion-checkbox"/>
        <label className="accordion-toggle" for="caretaker">Animal Caretaker:</label>
        <div className="accordion-content">
            <p>
                For individuals who love spending time with animals, ensuring their comfort and well-being by feeding, grooming, and cleaning their spaces.
            </p>
        </div>
    </div>
    <div className="accordion-item">
        <input type="checkbox" id="organizer" class="accordion-checkbox"/>
        <label className="accordion-toggle" for="organizer">Event Organizer:</label>
        <div className="accordion-content">
            <p>
                A fun and engaging way to plan and execute community events that bring people together for a great cause.
            </p>
        </div>
    </div>
    <div className="accordion-item">
        <input type="checkbox" id="gardener" className="accordion-checkbox"/>
        <label className="accordion-toggle" for="gardener">Community Garden Helper:</label>
        <div className="accordion-content">
            <p>
                For those who want to roll up their sleeves and get hands-on in planting, watering, and maintaining a shared garden to provide fresh produce to families in need.
            </p>
        </div>
    </div>
</div>

    )
}
//export
export default Yaccordion