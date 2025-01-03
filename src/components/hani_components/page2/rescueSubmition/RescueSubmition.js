import "./RescueSubmition.css"
const Submition = () => {
  return (
    <form >
      <input id="submit" type="submit" value="Submit" style={{margin:"0"}} />
      <a href="/page"  id='return'>return</a>
    </form>
  );
};

export default Submition;