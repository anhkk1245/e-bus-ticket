import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import SearchResult from "../component/searchResult"

function Home() {
  const initialState = {
    departure: "",
    destination: "",
    date: "",
  };

  const [{ departure, destination, date }, setSearchData] = useState(
    initialState
  );

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      departure: departure,
      destination: destination,
      date: date,
    };
    console.log(searchData);
  };

  return (
    <>
      <section className="search-form">
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Departure</Form.Label>
              <Form.Control
                id="departure"
                value={departure}
                onChange={handleOnChange}
                as="select"
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Destination</Form.Label>
              <Form.Control
                id="destination"
                value={destination}
                onChange={handleOnChange}
                as="select"
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Date</Form.Label>
              <Form.Control
                id="date"
                value={date}
                onChange={handleOnChange}
                type="date"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </section>

      {/* if length > 0 */}
      <section className="search-result">
            <SearchResult />
      </section>
    </>
  );
}

export default Home;
