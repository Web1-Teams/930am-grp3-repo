import "./HaniStyle.css"
const StickyLinks = () => {
  return (
    <div className="z-2 position-sticky" style={{   }}>
      <nav className="nav justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#section_1">Lost Pet Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_2">Found Pet Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_3">Stray Cats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_4">Additional Information</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default StickyLinks;
