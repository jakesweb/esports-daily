import React, { Component } from "react";
import { Query } from "react-apollo";
import Submit from "../components/Submit";
import User from "../components/User";
import Signin from "../components/Signin";

const submit = () => <User>{({ data }) => <Submit isLoggedIn={data} />}</User>;
export default submit;
