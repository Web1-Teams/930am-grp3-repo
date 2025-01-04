//import
import './vform.css';


//function
const Vform =() =>{
    
    
    return (
        <section className="donate-form-section">
            <div className="form-container">
                <h2>Donate Form:</h2>
                <form action="#" method="POST">
                    <div>
                        <label for="donor-name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="donor-name" name="donor-name" placeholder="Enter your full name" required/>
                    </div>
                    <div>
                        <label for="donor-email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="donor-email" name="donor-email" placeholder="Enter your email address" required/>
                    </div>
                    <div>
                        <label for="donation-type" className="form-label">Donation Type</label>
                        <select className="form-control" id="donation-type" name="donation-type" required>
                            <option value="secondhand-items">Secondhand Items</option>
                            <option value="towels-for-tails">Towels for Tails</option>
                            <option value="wish-list">Wish List</option>
                        </select>
                    </div>
                    <div>
                        <label for="amount" className="form-label">Donation Amount (if applicable)</label>
                        <input type="number" className="form-control" id="amount" name="amount" placeholder="Enter donation amount in USD"/>
                    </div>
                    <div>
                        <label for="message" className="form-label">Message (Optional)</label>
                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Leave a message (optional)"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit">Donate</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

//export
export default Vform