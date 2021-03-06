import HeadComponent from "../components/HeadComponent";

const Admin: React.FC = () => {
  return (
    <>
      <HeadComponent />
      <div className="container">
        <div className="page-container">
          <h1>Hip-hop Releases Admin</h1>
          <form className="pure-form pure-form-stacked admin-form">
            <fieldset>
              <label>Artist</label>
              <input type="text" />
              <label>Album</label>
              <input type="text" />
              <label>Release Date</label>
              <select id="state">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select id="state">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
              <button type="submit" className="pure-button pure-button-primary">
                Create
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
