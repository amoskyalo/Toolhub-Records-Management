import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="heading"> Toolhub Records</h1>
      <p> Welcome to Toolhub Records</p>
      <p>
        Toolhub Records is a tool that one can be able to search for various
        tools, add tools and edit tools. It has a representation of all users
        that have engeaged with it and one can be able to access the total
        amount of records, missing records and edited records. A chart has been
        used for visual representation to view the accessible data.
      </p>

      <form>
        <label>
          Search for a tool:
          <input type="text" name="name" />
        </label>
        <buttton type="submit"> Submit </buttton>
      </form>
    </div>
  );
};

export default Homepage;
