/** @format */
import axios from "axios";
import swal from "sweetalert";

const queryString = require("query-string");

export const GET_DATA_SIGNIN = "GET_DATA_SIGNIN";

export const postSignIn = (values, history, event) => (dispatch) => {
    event.preventDefault();
    const email = values.email;
    const password = values.password;

    return axios
        .post(
            "https://backend-go-charity.herokuapp.com/login",
            queryString.stringify({ email, password })
        )
        .then((response) => {
            if (response.data.token !== undefined) {
                console.log(response);
                localStorage.setItem("token", response.data.token);

                dispatch(getSignIn(response.data));
                swal({
                    title: "Good job!",
                    text: "Login success!",
                    icon: "success",
                });
                history.push("/");
            }
        })

        .catch(() =>
            swal({
                title: "Warning!",
                text: "Login failed!",
                icon: "error",
            })
        );
};

export const getSignIn = (data) => {
    return {
        type: GET_DATA_SIGNIN,
        payload: data,
    };
};
