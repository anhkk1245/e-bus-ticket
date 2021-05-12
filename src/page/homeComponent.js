import { Form, Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchResult from "../component/searchResult"
import UserService from "../services/user.service"

function Home() {
  const initialState = {
    departure: "",
    destination: "",
    date: "",
  };


  const [provinceList, setProvinceList] = useState([]);

  useEffect(()=>{
    UserService.getProvincelist().then(res => {
      let list = [];
      res.data.map(el => list.push(el.name));
      setProvinceList(list);
      console.log(provinceList)
    });

  }, [])

  const [{ departure, destination, date }, setSearchData] = useState(
    initialState
  );

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [id]: value }));
  };

  const [searchResult, setSearchResult] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      departure: departure,
      destination: destination,
      date: date,
    };
    console.log(searchData);
    UserService.searchTrip(departure, destination, date).then(
      data => {
        console.log(data.data)
        setSearchResult(data.data);
      }
    );
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
                {
                  provinceList.map(el => <option key = {el}> {el} </option>)
                }
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
                {
                  provinceList.map(el => <option key = {el}> {el} </option>)
                }
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
            <SearchResult data = {searchResult}/>
      </section>
    </>
  );
}

export default Home;
