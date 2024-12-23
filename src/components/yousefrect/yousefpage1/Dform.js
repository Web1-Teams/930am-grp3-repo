//import
import'../../../styles/Dform.css';
//function
const Dform = () =>{
    return (
    <div>
        <h5 class="call-to-action">
        This is your chance to be part of something bigger. To lend a hand, to share your heart, and to make a difference. If you’re ready to get started, reach out to us today! Together, we can create a brighter future.
        </h5>
        <section class="volunteer-form-section">
            <div class="form-container">
                <h2>Volunteer Form : </h2>
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell us why you want to volunteer" required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" id = "vfbutton">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
    )
}
//export
export default Dform