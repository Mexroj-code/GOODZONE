import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import "./Card2.css";

function Card2({ title, name, price, img,}) {
  return (
    <>
      <div className="card2-container">
        <Card
          style={{ width: "17rem", height:"28rem", textAlign: "start", }}
        >
          <Card.Body>
            <img className="card2-img" src={img} alt="img" />
            <Card.Title style={{ fontSize: "25px", fontWeight: "300" }}>
              {name}
            </Card.Title>
            <div className="card-stars">
              <FaRegStar size={25} style={{ marginRight: "3px" }} />
              <FaRegStar size={25} style={{ marginRight: "3px" }} />
              <FaRegStar size={25} style={{ marginRight: "3px" }} />
              <FaRegStar size={25} style={{ marginRight: "3px" }} />
              <FaRegStar size={25} style={{ marginRight: "3px" }} />
            </div>
            <p className="price">{price}</p>
            <p className="title">{title}</p>
            <div className="card-btn">
              <button className="card2-btn">Купит</button>
              <div className="card-icon">
                <FaBalanceScaleLeft />
                <FaRegHeart style={{ marginLeft: "10px" }} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Card2;