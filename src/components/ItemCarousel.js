import avt from "../assets/avt.png";
import users from "../assets/users.png";

function Item() {
  return (
    <div
      style={{
        width: "60%",
        height: "95%",
        margin: "0 auto",
        borderRadius: "15px",
        border: "1px solid",
        overflow: "hidden",
      }}
    >
      <img
        width='100%'
        height='50%'
        src='https://picsum.photos/800/600?random=2'
      ></img>
      <img
        width='10%'
        height='25%'
        style={{
          backgroundColor: "brown",
          position: "absolute",
          top: "75px",
          left: "75px",
          borderRadius: "15px",
        }}
        src={avt}
      ></img>
      <div
        className='infor'
        style={{
          float: "left",
          height: "100%",
          marginTop: "20px",
          marginLeft: "15px",
        }}
      >
        <label
          style={{
            fontWeight: "bold",
          }}
        >
          ####
        </label>
        <br></br>
        <span
          style={{
            display: "block",
            marginBottom: "1em",
          }}
        ></span>
        <label style={{ float: "left" }}>Name</label>
        <img
          src={users}
          style={{
            widtd: "15px",
            height: "15px",
            marginLeft: "10px",
          }}
        />
        <br></br>
        <label style={{ float: "left" }}>Language</label>
      </div>
    </div>
  );
}

export default Item;
