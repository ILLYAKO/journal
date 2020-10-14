import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { RegisterContext} from "../context/RegisterContext"

export const RegisterPage = () => {

  const regContext = useContext(RegisterContext)
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm:""
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  // useEffect(()=>{
  //   window.M.updateTextFields()
  // },[])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/regstatus/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  return (
    <form className="form-horizontal">
      <fieldset>
        <div id="legend">
          <legend className="">Register</legend>
        </div>
        <div className="control-group">
          {/* <!-- Username --> */}
          <label className="control-label" htmlFor="username">
            Username
          </label>
          <div className="controls">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter User Name"
              className="input-xlarge"
              value={form.username}
              onChange={changeHandler}
            />
            <p className="help-block">
              Username can contain any letters or numbers, without spaces
            </p>
          </div>
        </div>
        <div className="control-group">
          <label className="control-label" htmlFor="email">
            E-mail
          </label>
          <div className="controls">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              className="input-xlarge"
              value={form.email}
              onChange={changeHandler}
            />
            <p className="help-block">Please provide your E-mail</p>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label" htmlFor="password">
            Password
          </label>
          <div className="controls">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="input-xlarge"
              value={form.password}
              onChange={changeHandler}
            />
            <p className="help-block">
              Password should be at least 6 characters
            </p>
          </div>
        </div>

        <div className="control-group">
          {/* <!-- Password --> */}
          <label className="control-label" htmlFor="password_confirm">
            Password (Confirm)
          </label>
          <div className="controls">
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              placeholder="Repeat password"
              className="input-xlarge"
              value={form.password_confirm}
              onChange={changeHandler}
            />
            <p className="help-block">Please confirm password</p>
          </div>
        </div>

        <div className="control-group">
          <div className="controls">
            <button
              className="btn btn-success"
               disabled={loading} 
               onClick={registerHandler} 
            >
              Register
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
