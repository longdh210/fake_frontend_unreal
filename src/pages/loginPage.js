import "../styles/loginPage.css";
import logo from "../assets/logo.webp";
import game from "../assets/game.png";
import tidIcon from "../assets/tidIcon.png";
import kakaoIcon from "../assets/kakaoIcon.png";
import fbIcon from "../assets/fbIcon.png";
import ggIcon from "../assets/ggIcon.png";
import Button from "../components/ReuseButton";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("home");
  };

  return (
    <div className='login'>
      <div className='loginCenter'>
        <img src={logo} style={{ widtd: "150px", height: "150px" }}></img>
        <br></br>
        <label>User login is required</label>
        <br></br>
        <img
          src={game}
          style={{ widtd: "150px", height: "150px", marginTop: "20px" }}
        ></img>
        <div>
          <Button
            icon={tidIcon}
            text='Sign in with T ID'
            onClick={handleOnClick}
          ></Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button icon={kakaoIcon} text='Sign in with Kakao'></Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button icon={fbIcon} text='Sign in with Facebook'></Button>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Button icon={ggIcon} text='Sign in with Google'></Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
