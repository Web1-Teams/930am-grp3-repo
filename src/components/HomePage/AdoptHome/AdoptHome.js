
import './AdoptHome.css'

const AdoptHome = () => {


  return (
<section className="Adopt-section25">
        <div className="Adopt-div25">
            <div className="Adopt-text25">
                <h1><strong>Adopt</strong></h1>
                <p>Search our database of available pets!</p>
            </div>
            <div className="Adopt-search25">
                <form method="Get" action="">
                    <div className="Search-box25">
                        <div className="Search-field25">
                            <label for="spacies">Search By Animal</label>
                            <select name="spacies" className="spacies25">
                                <option className="op25" value="All">All Animals</option>
                                <option className="op25" value="Cat">Cat</option>
                                <option className="op25" value="Dog">Dog</option>
                                <option className="op25" value="Rabbit">Rabbit</option>
                            </select>
                        </div>
                        <div className="Search-field25">
                            <label for="location">Search By Location</label>
                            <select name="location" className="location25">
                                <option className="op25" value="All">Any Location</option>
                                <option className="op25" value="Rafedia">Nablus</option>
                                <option className="op25" value="DerSharaf">Gaza</option>
                                <option className="op25" value="Jarusalem">Jarusalem</option>
                                <option className="op25" value="Amaan">Amaan</option>
                                <option className="op25" value="Beirut">Beirut</option>
                                <option className="op25" value="Hebron">Hebron</option>
                                <option className="op25" value="Jenin">Jenin</option>
                                <option className="op25" value="Damascus">Damascus</option>
                                <option className="op25" value="Alexandria">Alexandria</option>
                                <option className="op25" value="Ramallah">Ramallah</option>
                            </select>
                        </div>
                        <a  className="Search-button25"  href="../page 2/adoption.html">Search</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default AdoptHome;
