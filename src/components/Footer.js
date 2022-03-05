import { useState, useEffect } from "react";
//import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  useEffect(() => {
    const footer = document.querySelector("#footer");
    footer.addEventListener("blur", () => {
      !inputValue.includes("@")
        ? alert("Please enter a valid email address")
        : alert("Ok");
    });
  }, [inputValue]);

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <textarea
        id="footer"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>go</button>
    </footer>
  );
}

export default Footer;
