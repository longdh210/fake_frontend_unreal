import "../styles/homePage.css";
import logo from "../assets/logo.webp";
import game from "../assets/game.png";
import polish from "../assets/polish.png";
import bell from "../assets/bell.png";
import megaphone from "../assets/megaphone.png";
import search from "../assets/search.png";
import paperLane from "../assets/paper-plane.png";
import users from "../assets/users.png";
import gamepad from "../assets/gamepad.png";
import Carousel from "better-react-carousel";

function Home() {
  return (
    <div className='home'>
      <div className='homeCenter'>
        <div className='icon' style={{ marginTop: "15px" }}>
          <img
            src={polish}
            style={{
              widtd: "40px",
              height: "40px",
              float: "left",
              marginLeft: "20px",
            }}
          ></img>
          <div style={{ float: "right" }}>
            <img
              src={bell}
              style={{
                widtd: "40px",
                height: "40px",
                float: "left",
                marginRight: "20px",
              }}
            ></img>
            <img
              src={megaphone}
              style={{
                widtd: "40px",
                height: "40px",
                float: "left",
                marginRight: "20px",
              }}
            ></img>
            <img
              src={search}
              style={{
                widtd: "40px",
                height: "40px",
                float: "left",
                marginRight: "20px",
              }}
            ></img>
          </div>
        </div>
        <div className='character'>
          <img src={game} style={{ widtd: "150px", height: "150px" }}></img>
          <div className='action'>
            <div
              className='left'
              style={{
                float: "left",
                marginLeft: "15%",
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={gamepad}
                style={{
                  widtd: "30px",
                  height: "30px",
                }}
              ></img>
              <label
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  color: "violet",
                }}
              >
                Lounge
              </label>
            </div>
            |
            <div
              className='right'
              style={{
                float: "right",
                marginLeft: "auto",
                marginRight: "15%",
              }}
            >
              <img
                src={users}
                style={{
                  widtd: "25px",
                  height: "25px",
                  marginRight: "20px",
                }}
              ></img>
              <img
                src={paperLane}
                style={{
                  widtd: "25px",
                  height: "25px",
                  //   marginRight: "40px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className='carousel'>
          <label
            style={{
              fontWeight: "bold",
              float: "left",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            Popular land
          </label>
          <br></br>
          <span
            style={{
              display: "block",
              //   margin: "100px 0",
              marginBottom: "1em",
            }}
          ></span>
          <Carousel cols={2} rows={1} gap={10} loop>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=1' />
            </Carousel.Item>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=2' />
            </Carousel.Item>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=3' />
            </Carousel.Item>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=2' />
            </Carousel.Item>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=3' />
            </Carousel.Item>
            <Carousel.Item>
              <img width='80%' src='https://picsum.photos/800/600?random=3' />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
