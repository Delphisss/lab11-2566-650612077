"use client";
import { useState } from "react";

export default function RegisFormPage() {
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState(false);
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState(false);
  const [plan, setPlan] = useState("");
  const [planError, setPlanError] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderError, setGenderError] = useState(false);
  const [buyBottle, setBuyBottle] = useState(false);
  const [buyShoes, setBuyShoes] = useState(false);
  const [buyCap, setBuyCap] = useState(false);
  const [fuck, KK] = useState(false);

  const inputFnameOnChange = (event) => {
    setFnameError(false);
    setFname(event.target.value);
  };

  const inputLnameOnChange = (event) => {
    setLnameError(false);
    setLname(event.target.value);
  };

  const selectPlanOnChange = (event) => {
    setPlanError(false);
    setPlan(event.target.value);
  };

  const radioGenderMaleOnChange = () => {
    setGenderError(false);
    setGender("male");
  };

  const radioGenderFemaleOnChange = () => {
    setGenderError(false);
    setGender("female");
  };

  const cbBuyBottleOnChange = (event) => {
    setBuyBottle(event.target.checked);
  };

  const cbBuyShoesOnChange = (event) => {
    setBuyShoes(event.target.checked);
  };

  const cbBuyCapOnChange = (event) => {
    setBuyCap(event.target.checked);
  };

  const termOnChange = (event) => {
    KK(event.target.checked);
  };

  function computeTotalPayment() {
    let total = 0;
    if (plan === "fun") total += 500;
    else if (plan === "mini") total += 800;
    else if (plan === "half") total += 1200;
    else if (plan === "full") total += 1500;

    if (buyBottle) total += 200;
    if (buyShoes) total += 600;
    if (buyCap) total += 400;

    if ((buyBottle, buyShoes, buyCap)) total = total * 0.8;

    return total;
  }

  const registerBtnOnClick = () => {
    let F_Name = true;
    let L_Name = true;
    let T_Plan = true;
    let T_Gender = true;
    if (fname === "") {
      F_Name = false;
      setFnameError(true);
    }
    if (lname === "") {
      L_Name = false;
      setLnameError(true);
    }
    if (plan === "") {
      T_Plan = false;
      setPlanError(true);
    }
    if (gender === null) {
      T_Gender = false;
      setGenderError(true);
    }
    if (F_Name && L_Name && T_Plan && T_Gender) {
      alert(
        `Registration complete. Please pay money for ${computeTotalPayment().toLocaleString()} THB.`
      );
    }
  };

  return (
    <div className="mx-auto vstack gap-3" style={{ width: "400px" }}>
      <h3 className="text-center fst-italic">Register CMU Marathon 🏃‍♂️</h3>
      {/* First name & Last name */}
      <div className="d-flex gap-2">
        <div>
          <label className="form-label">First name</label>
          <input
            className={"form-control" + (fnameError ? " is-invalid" : "")}
            onChange={inputFnameOnChange}
            value={fname}
          />
          <div className="invalid-feedback">Invalid first name</div>
        </div>
        <div>
          <label className="form-label">Last name</label>
          <input
            className={"form-control" + (lnameError ? " is-invalid" : "")}
            onChange={inputLnameOnChange}
            value={lname}
          />
          <div className="invalid-feedback">Invalid last name</div>
        </div>
      </div>

      {/* Running Plan */}
      <div>
        <label className="form-label">Plan</label>
        <select
          className={"form-select" + (planError ? " is-invalid" : "")}
          onChange={selectPlanOnChange}
          value={plan}
        >
          <option value="">Please select..</option>
          <option value="fun">Fun run 5.5 Km (500 THB)</option>
          <option value="mini">Mini Marathon 10 Km (800 THB)</option>
          <option value="half">Half Marathon 21 Km (1,200 THB)</option>
          <option value="full">Full Marathon 42.195 Km (1,500 THB)</option>
        </select>
        <div className="invalid-feedback">Please select a Plan</div>
      </div>

      {/* Gender */}
      <div>
        <label className="form-label">Gender</label>
        <div>
          <input
            className="me-2 form-check-input"
            type="radio"
            onChange={radioGenderMaleOnChange}
            checked={gender === "male"}
          />
          Male 👨
          <input
            className="mx-2 form-check-input"
            type="radio"
            onChange={radioGenderFemaleOnChange}
            checked={gender === "female"}
          />
          Female 👩
          {genderError ? (
            <div className="text-danger">Please select gender</div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Extra Items */}
      <div>
        <label className="form-label">Extra Item(s)</label>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={cbBuyBottleOnChange}
            checked={buyBottle}
          />{" "}
          <label className="form-check-label">Bottle 🍼 (200 THB)</label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={cbBuyShoesOnChange}
            checked={buyShoes}
          />{" "}
          <label className="form-check-label">Shoes 👟 (600 THB)</label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={cbBuyCapOnChange}
            checked={buyCap}
          />{" "}
          <label className="form-check-label">Cap 🧢 (400 THB)</label>
        </div>
      </div>

      <div className="alert alert-primary" role="alert">
        Promotion📢 Buy all items to get 20% Discount
      </div>

      {/* Total Payment */}
      <div>
        Total Payment : {computeTotalPayment().toLocaleString()} THB
        {buyBottle && buyCap && buyCap ? (
          <span className="text-success d-block">(20% Discounted)</span>
        ) : (
          ""
        )}
      </div>

      {/* Terms and conditions */}
      <div>
        <input
          className="me-2"
          type="checkbox"
          onChange={termOnChange}
          checked={fuck}
        />
        I agree to the terms and conditions
      </div>

      {/* Register Button */}
      <button
        className="btn btn-success my-2"
        onClick={registerBtnOnClick}
        disabled={!fuck}
      >
        Register
      </button>
    </div>
  );
}
