//import
import '../Footer/Footer.css'
//function
const Footer=()=>{
    return(
        <footer>
        <div className="footerContainer">
            <div class="socialIcons">
                <a href="..//page 1/home.html"><i className="fa-brands fa-twitter"></i></a>
                <a href="..//page 1/home.html"><i className="fa-brands fa-google"></i></a>
                <a href="..//page 1/home.html"><i className="fa-brands fa-instagram"></i></a>
                <a href="..//page 1/home.html"><i className="fa-brands fa-facebook"></i></a>
            </div>
            <div className="footerNav">
                <ul>
                    <li><a href="..//page 1/home.html">HOME</a></li>
                    <li><a href="..//page 1/home.html">Contact us</a></li>
                    <li><a href="..//page 5/leadership.html" target="_blank">Our Team</a></li>

                </ul>
            </div>

        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2024; Designed by <span className="designer">" Our Team"</span></p>
        </div>
    </footer>
    )

}

//export
export default Footer