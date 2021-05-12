import { Link } from "react-router-dom";
export default function SearchResult(props) {
  console.log("aa", props.data);
  return (
    <>
      {props.data.length > 0 &&
        props.data.map((el) => {
          return (
            <>
              <div className="card m-3 p-1">
                <Link
                  className="card-block stretched-link text-decoration-none text-dark"
                  to="/booking-ticket"
                >
                  <div className="row">
                    <div className="product-image col-md-2">
                      <img src={el.url_photo} style={{ maxWidth: "150px" }} />
                    </div>
                    <div className="col">
                      <div classNameName="d-flex mt-1">
                        <strong>{el.name}</strong>
                      </div>
                      <div className="d-flex mt-1">
                        {/* <div className="mr-4 product-price font-weight-bold">Số ghế</div> */}
                        <div className="mr-4 product-area">
                          Giờ khởi hành: {el.start_time}
                        </div>
                        <div className="product-location">
                          Giờ đến: {el.end_time}
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="mr-4 product-price">
                          Nơi đi: {el.start_point}
                        </div>
                        <div className="mr-4 product-area">
                          Nơi đến: {el.end_point}
                        </div>
                      </div>
                      <div className="d-flex mt-1 text-muted">
                        Mô tả: {el.description}
                      </div>
                      <div className="d-flex mt-1 text-muted">
                        Giá: {el.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
    </>
  );
}
