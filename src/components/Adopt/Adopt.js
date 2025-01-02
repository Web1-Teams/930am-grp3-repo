//import
import '../Adopt/Adopt.css'
//function
const Adopt =()=>{
    return(
        <section className="Adopt-section">
        <div className="Adopt-div">
            <div className="Adopt-text">
                <h1><strong>Adopt</strong></h1>
                <p>Search our database of available pets!</p>
            </div>
            <div className="Adopt-search">
                <form method="Get" action="">
                    <div className="Search-box">
                        <div className="Search-field">
                            <label for="spacies">Search By Animal</label>
                            <select name="spacies" className="spacies">
                                <option className="op" value="All">All Animals</option>
                                <option className="op" value="Cat">Cat</option>
                                <option className="op" value="Dog">Dog</option>
                                <option className="op" value="Rabbit">Rabbit</option>
                            </select>
                        </div>
                        <div className="Search-field">
                            <label for="location">Search By Location</label>
                            <select name="location" className="location">
                                <option className="op" value="All">Any Location</option>
                                <option className="op" value="Rafedia">Nablus</option>
                                <option className="op" value="DerSharaf">Gaza</option>
                                <option className="op" value="Jarusalem">Jarusalem</option>
                                <option className="op" value="Amaan">Amaan</option>
                                <option className="op" value="Beirut">Beirut</option>
                                <option className="op" value="Hebron">Hebron</option>
                                <option className="op" value="Jenin">Jenin</option>
                                <option className="op" value="Damascus">Damascus</option>
                                <option className="op" value="Alexandria">Alexandria</option>
                                <option className="op" value="Ramallah">Ramallah</option>
                            </select>
                        </div>
                        <button  type="submit" className="Search-button"><a className="lol2" href="../page 2/adoption.html">Search</a></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}
//export
export default Adopt