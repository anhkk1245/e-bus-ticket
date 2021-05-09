import { Link } from "react-router-dom";
export default function SearchResult(props) {
  return (
    <div className="card m-3 p-1">
      <Link
        className="card-block stretched-link text-decoration-none text-dark"
        to="/booking-ticket"
      >
        <div className="row">
          <div className="product-image col-md-2">
            <img src="@item.srcImage" />
          </div>
          <div className="col">
            <div classNameName="d-flex mt-1">
              <strong>Tên nhà xe</strong>
            </div>
            <div className="d-flex mt-1">
              <div className="mr-4 product-price font-weight-bold">Số ghế</div>
              <div className="mr-4 product-area">Giờ khởi hành</div>
              <div className="product-location">Giờ đến</div>
            </div>
            <div className="d-flex mt-1">
              <div className="mr-4 product-price">Nơi đi</div>
              <div className="mr-4 product-area">Nơi đến</div>
            </div>
            <div className="d-flex mt-1 text-muted">Mô tả</div>
            <div className="d-flex mt-1 text-muted">Giá</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
