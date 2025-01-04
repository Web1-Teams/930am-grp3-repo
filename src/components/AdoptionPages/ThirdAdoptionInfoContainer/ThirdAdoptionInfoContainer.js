import "./ThirdAdoptionInfoContainer.css";
const ThirdAdoptionInfoContainer = () => {
  return (
    <div className="adopt-info-section">
      <p className="adopt-info-paragraph">
        Below is the detailed fee structure for adopting pets through Rafeeq:
      </p>
      <h3 className="adopt-info-title">Adoption Fees</h3>
      <p className="adopt-info-paragraph">Dogs and Puppies</p>
      <table border="1">
        <tr>
          <th>Age</th>
          <th class="right-corner-table">Fee</th>
        </tr>
        <tr>
          <td>6 months and under</td>
          <td>$70</td>
        </tr>
        <tr>
          <td>7 months and over</td>
          <td>$30</td>
        </tr>
        <tr>
          <td>Small dogs (under 20 lbs.), 7 months and over</td>
          <td>$55</td>
        </tr>
      </table>

      <p class="adopt-info-paragraph">Cats and Kittens</p>
      <table border="1">
        <tr>
          <th>Age</th>
          <th class="right-corner-table">Fee</th>
        </tr>
        <tr>
          <td>6 months and under</td>
          <td>$55</td>
        </tr>
        <tr>
          <td>7 months to 4 years</td>
          <td>$35</td>
        </tr>
        <tr>
          <td>Cats 5 years and over</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>Two kittens</td>
          <td>$65</td>
        </tr>
      </table>

      <p class="adopt-info-paragraph">Rabbits</p>
      <table border="1">
        <tr>
          <th>Type</th>
          <th class="right-corner-table">Fee</th>
        </tr>
        <tr>
          <td>All ages</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>Bonded pair</td>
          <td>$40</td>
        </tr>
      </table>

      <p>
        Ready to adopt? Explore the available pets and start your journey toward
        bringing home your new best friend. Adoption fees go directly toward
        providing care for the animals and ensuring their health and safety.
      </p>
    </div>
  );
};

export default ThirdAdoptionInfoContainer;
