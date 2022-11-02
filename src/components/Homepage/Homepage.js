import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="heading"> Toolhub Records</h1>
      <p className="home-para"> Welcome to Toolhub Records</p>
      <p>
        Toolhub Records is a tool that one can be able to search for various
        tools, add tools and edit tools. It has a representation of all users
        that have engeaged with it and one can be able to access the total
        amount of records, missing records and edited records. A chart has been
        used for visual representation to view the accessible data.
      </p>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for a tool by name:</Form.Label>
          <Form.Control type="text" placeholder="Enter tool" />
        </Form.Group>
        <Button variant="primary">Submit</Button>{" "}
      </Form>
    </div>
  );
};

export default Homepage;
