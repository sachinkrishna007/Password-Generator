import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";


const Home = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const generatePassword = () => {
    const numbersArray = "0123456789";
    const symbolsArray = "!@#$%^&*()_-+=<>?";
    const characterCodes = Array.from(Array(26).keys()).map((i) => i + 97);
    const lowercaseLetters = characterCodes.map((letter) =>
      String.fromCharCode(letter)
    );
    const uppercaseLetters = lowercaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const availableCharacters = [
      ...(password.lowercase ? lowercaseLetters : []),
      ...(password.uppercase ? uppercaseLetters : []),
      ...(password.numbers ? numbersArray.split("") : []),
      ...(password.symbols ? symbolsArray.split("") : []),
    ];

    const crypto = window.crypto || window.msCrypto; 

    const getRandomInt = (max) => {
      const cryptoArray = new Uint32Array(1);
      crypto.getRandomValues(cryptoArray);
      return cryptoArray[0] % max;
    };

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const characters = shuffleArray(availableCharacters).slice(
      0,
      password.length
    );
    setGeneratedPassword(characters.join(""));
  };

  const handleUppercase = () => {
    setPassword((prev) => ({ ...prev, uppercase: !prev.uppercase }));
  };

  const handleLowercase = () => {
    setPassword((prev) => ({ ...prev, lowercase: !prev.lowercase }));
  };

  const handleSymbols = () => {
    setPassword((prev) => ({ ...prev, symbols: !prev.symbols }));
  };

  const handleNumbers = () => {
    setPassword((prev) => ({ ...prev, numbers: !prev.numbers }));
  };

  const setPasswordLength = (val) => {
    setPassword((prev) => ({ ...prev, length: val }));
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(65deg, rgba(189,42,223,0.4), rgba(81,226,37,0.8))",
        borderRadius: "40px",
        paddingBottom: "29px",
      }}
    >
      <div>
        <div>
          <div>
            <h2 className="heading" style={{ padding: "20px" }}>
              Password Generator
            </h2>
            <div className="field">
              <InputText
                className="input"
                id="name1"
                type="text"
                value={generatedPassword}
                onChange={(e) => setGeneratedPassword(e.target.value)}
              />
            </div>
            <div className="second">
              <label htmlFor="length">Enter Length</label>
              <InputText
                id="length"
                type="text"
                value={password.length}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </div>
            <div
              className="flex justify-content-center "
              style={{ paddingTop: "20px" }}
            >
              <label className="third" htmlFor="email1">
                Upper Case
              </label>
              <InputSwitch
                className="checkbox"
                checked={password.uppercase}
                onChange={handleUppercase}
              />
            </div>
            <div
              className="flex justify-content-center "
              style={{ paddingTop: "20px" }}
            >
              <label className="third" htmlFor="email1">
                Lower Case
              </label>
              <InputSwitch
                className="checkbox"
                checked={password.lowercase}
                onChange={handleLowercase}
              />
            </div>
            <div
              className="flex justify-content-center "
              style={{ paddingTop: "20px" }}
            >
              <label className="four" htmlFor="email1">
                Numbers
              </label>
              <InputSwitch
                className="fourCheckbox"
                checked={password.numbers}
                onChange={handleNumbers}
              />
            </div>

            <div
              className="flex justify-content-center "
              style={{ paddingTop: "20px" }}
            >
              <label className="four" htmlFor="email1">
                Include symbols
              </label>
              <InputSwitch
                className="fiveCheckbox"
                checked={password.symbols}
                onChange={handleSymbols}
              />
            </div>
            <div
              className="flex justify-content-center "
              style={{ paddingTop: "20px" }}
            >
              <Button
                id="button"
                label="Generate Password"
                onClick={generatePassword}
                text
                raised
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
