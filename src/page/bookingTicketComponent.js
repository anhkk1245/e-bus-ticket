import { Form, Row, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import seatPosition from "./seats.png";

export default function BookingTicket() {
  let availableSeat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [chosenListSeat, setSeat] = useState([]);
  function onSelect(selectedList, selectedItem) {
    setSeat(selectedList);
  }

  function onRemove(selectedList, selectedItem) {
    setSeat(selectedList);
  }

  const initialState = {
    name: "",
    phone: "",
    otherInfor: "",
    paymentMethod: "",
  };

  const [
    { name, phone, otherInfor, paymentMethod },
    setTicketDetail,
  ] = useState(initialState);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setTicketDetail((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketDetail = {
      list: chosenListSeat,
      name: name,
      phone: phone,
      otherInfor: otherInfor,
      paymentMethod: paymentMethod,
    };
    console.log(ticketDetail);
  };

  return (
    <>
      <section className="booking-form mt-4">
        <Form onSubmit={handleSubmit}>
          <h4>Choose seat</h4>
          <p>
            Here is seat position, please choose available seat in list below
          </p>
          <p>
            <img src={seatPosition} alt="seat model" />
          </p>


          <Multiselect
            options={availableSeat}
            onSelect={onSelect}
            onRemove={onRemove}
            isObject={false}
            placeholder="Select available seats"
          />
          <h4 className="mt-3">Enter your information</h4>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Enter name"
              id="name"
              value={name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="Enter phonenumber"
              id="phone"
              value={phone}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Other infor</Form.Label>
            <Form.Control
              placeholder="Enter other infor if you want"
              id="otherInfor"
              value={otherInfor}
              onChange={handleOnChange}
            />
          </Form.Group>

          <h4>Choose your payment method</h4>
          <Form.Group>
            <Form.Label>Payment method</Form.Label>
            <Form.Control
              id="paymentMethod"
              value={paymentMethod}
              onChange={handleOnChange}
              as="select"
            >
              <option>Visa</option>
              <option>Master Card</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Book
          </Button>
        </Form>
      </section>
    </>
  );
}
