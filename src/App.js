import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { IconButton } from "@mui/material";
import bottle from "./bottle.jpg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="menu">
          <IconButton>
            <MenuIcon style={{ fontSize: 28, color: "white" }} />
          </IconButton>
        </div>
        <div className="cart">
          <IconButton>
            <ShoppingCartOutlinedIcon
              style={{ fontSize: 28, color: "white" }}
            />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className="content">
        <div className="image">
          <div className="box1">
            <img src={bottle} alt="bottle" className="bottle"></img>
            <img src={bottle} alt="bottle" className="bottle1"></img>
            <img src={bottle} alt="bottle" className="bottle2"></img>
          </div>
        </div>
        <h1 className="heading">Everyday rinse and reload</h1>
        <p className="para">
          Achieve your dream skin goal with this complete package of skincare
          produts that will rejuvenate your day.
        </p>
        <div className="review">
          <div className="rating">
            <StarOutlinedIcon style={{ fontSize: 12, color: "white" }} />
            <StarOutlinedIcon style={{ fontSize: 12, color: "white" }} />
            <StarOutlinedIcon style={{ fontSize: 12, color: "white" }} />
            <StarOutlinedIcon style={{ fontSize: 12, color: "white" }} />
            <StarHalfOutlinedIcon style={{ fontSize: 12, color: "white" }} />
          </div>
          <div className="ratingNo">4.5</div>
          <div className="readReview">Click to read reviews</div>
          <div id="arrow">
            <IconButton>
              <KeyboardArrowRightOutlinedIcon
                style={{ fontSize: 12, color: "#424648" }}
              />
            </IconButton>
          </div>
        </div>
        <div className="rupees">
          <CurrencyRupeeOutlinedIcon style={{ color: "white", fontSize: 30 }} />
          <p style={{ fontStyle: "Montserrat" }}>899</p>
          <CurrencyRupeeOutlinedIcon
            style={{ color: "#3C464F", marginLeft: 10, fontSize: 30 }}
          />
          <p id="cutThrough" style={{ fontStyle: "Montserrat" }}>
            1299
          </p>
        </div>
        <div className="block1">
          <div id="popular">
            <StarOutlinedIcon
              style={{ fontSize: 8, color: "white", margin: 2 }}
            />
            MOST POPULAR
            <StarOutlinedIcon
              style={{ fontSize: 8, color: "white", margin: 2 }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "DM Sans",
              }}
            >
              1 Months Pack (4 tubes)
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#28333D",
                marginTop: 5,
                fontFamily: "Belgrano",
              }}
            >
              Savings: <CurrencyRupeeOutlinedIcon style={{ fontSize: 12 }} />
              200
            </p>
            <p
              style={{
                fontSize: 12,
                marginTop: 15,
                color: "#24DB6D",
                fontFamily: "DM Sans",
              }}
            >
              38% Saved{" "}
              <span style={{ color: "#DB9D24", marginLeft: 10 }}>
                Best Results
              </span>
            </p>
            <DoneOutlinedIcon className="done" />
          </div>
          <div id="price">
            <div id="price1">
              <CurrencyRupeeOutlinedIcon style={{ fontSize: 15 }} />
              595
            </div>
            <div id="price2">
              <CurrencyRupeeOutlinedIcon
                style={{ fontSize: 15, color: "#28333D" }}
              />
              <p id="cutThrough" style={{ display: "inline", color: "#28333D" }}>
                795
              </p>
            </div>
          </div>
        </div>
        <div className="block2">
          <div>
            <div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                }}
              >
                3 Months Pack (12 tubes)
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#465D68",
                  marginTop: 5,
                  fontFamily: "Belgrano",
                }}
              >
                Savings: <CurrencyRupeeOutlinedIcon style={{ fontSize: 12 }} />
                100
              </p>
              <p
                style={{
                  fontSize: 12,
                  marginTop: 10,
                  color: "#24DB6D",
                  fontFamily: "DM Sans",
                }}
              >
                12% Saved
              </p>
            </div>
            <div id="price7">
              <div id="price1">
                <CurrencyRupeeOutlinedIcon style={{ fontSize: 15 }} />
                899
              </div>
              <div id="price2">
                <CurrencyRupeeOutlinedIcon
                  style={{ fontSize: 15, color: "#3C464F" }}
                />
                <p id="cutThrough" style={{ display: "inline" }}>
                  999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="add">
          <ShoppingCartOutlinedIcon style={{ marginRight: 8 }} /> ADD TO CART
        </div>
      </div>
    </div>
  );
}

export default App;
