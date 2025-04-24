import { useState } from "react";

function Nav() {
  const [activepage, setactivepage] = useState("home");

  const rendernav = () => {
    switch (activepage) {
      case "home":
        return (
          <div style={{ backgroundColor: "red", padding: "20px" }}>
            <h2>Welcome</h2>
            <p>This is the home page</p>
          </div>
        );
      case "about":
        return (
          <div style={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
            <h2>Welcome</h2>
            <p>This is the about page</p>
          </div>
        );
      case "contact":
        return (
          <div style={{ backgroundColor: "green", color: "white", padding: "20px" }}>
            <h2>Welcome</h2>
            <p>This is the contact page</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav style={{ backgroundColor: "#eee", padding: "10px" }}>
        <span style={{ margin: "0 10px", cursor: "pointer" }} onClick={() => setactivepage("home")}>
          Home
        </span>
        <span style={{ margin: "0 10px", cursor: "pointer" }} onClick={() => setactivepage("about")}>
          About
        </span>
        <span style={{ margin: "0 10px", cursor: "pointer" }} onClick={() => setactivepage("contact")}>
          Contact
        </span>
      </nav>
      {rendernav()}
    </>
  );
}

export default Nav;
