import React from "react";

const register = () => {
  function mailInput() {
    console.warn("Yalnız .ru domenlərinə icazə verilir.");
  }
  function passwordInput() {
    console.warn("Ən azı 8 simvol");
  }
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onInput={mailInput} />
        <br />
        <label htmlFor="parol">Parol:</label>
        <input type="text" name="parol" onInput={passwordInput} />
      </form>
      <button>Login</button>
    </div>
  );
};

export default register ;