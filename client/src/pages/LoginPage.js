import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { RegisterContext } from "../context/RegisterContext";

export const LoginPage = () => {
  const regContext = useContext(RegisterContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
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

  // const registerHandler = async () => {
  //   try {
  //     const data = await request("/api/regstatus/register", "POST", {
  //       ...form,
  //     });
  //     message(data.message);
  //   } catch (e) {}
  // };

  const loginHandler = async () => {
    try {
      const data = await request("/api/regstatus/login", "POST", { ...form });
      // message(data.message);
      regContext.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <form className="form-horizontal">
      <fieldset>
        <div id="legend">
          <legend className="">Login</legend>
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
          <div className="controls">
            <button
              className="btn btn-success"
              disabled={loading}
              onClick={loginHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
