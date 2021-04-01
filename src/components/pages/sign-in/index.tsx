import { useState } from "react";

import { useUserContext } from "../../../context/user";
import {
  emailValidation,
  passwordValidation,
} from "../../../utils/inputs-validation";

import "./index.scss";
const SignIn = () => {  
  const { logIn,message } = useUserContext();
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <form>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          onChange={handleChangeInput}
          placeholder="Enter email"
          onBlur={(e) =>
            setErrors({ ...errors, email: !emailValidation(e.target.value) })
          }
        />
        <div className="invalid-feedback">
          Svp entrez une adresse email valide.
        </div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className={`form-control ${errors.password && "is-invalid"}`}
          onChange={handleChangeInput}
          placeholder="Enter password"
          onBlur={(e) =>
            setErrors({
              ...errors,
              password: !e.target.value,
            })
          }
        />
        <div className="invalid-feedback">
          Svp entrez un mot de passe valide.
        </div>
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={(e) => {
          e.preventDefault();
          const { email, password } = errors;
          if (!email && !password && data.email && data.password) {
            logIn(data.email, data.password);
          } else
            setErrors({
              ...errors,
              email: !emailValidation(data.email),
              password: !passwordValidation(data.password),
            });
        }}
      >
        Soumettre
      </button>
      {message && <div className="invalid-message">{message}</div>}
    </form>
  );
};
export default SignIn;
