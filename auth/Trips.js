import { FaExclamationCircle } from "react-icons/fa";
import { signin, authenticate, isAutheticated } from "../auth/Auth";

export const trips = async (trip, token) => {
  return fetch("https://zoho-expense-server.herokuapp.com/api/createtrip", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(trip),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTrip = (email) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
  return fetch(
    `https://zoho-expense-server.herokuapp.com/api/tripsofuser/${email}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOrg = async (org_name) => {
  const { token } = await isAutheticated();
  // let email = user.email;
  console.log("Inside getorg : " + token);
  return fetch(
    `https://zoho-expense-server.herokuapp.com/api/alltrips/${org_name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      console.log("Inside getorg : " + JSON.stringify(response));
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const deleteTrip = async (_id) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
  return fetch(
    `https://zoho-expense-server.herokuapp.com/api/deletetrips/${_id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getId = async (id) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
  return fetch(`https://zoho-expense-server.herokuapp.com/api/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const statusChange = (id) => {
//   return await fetch(`/api/updateexpensestatus/${id}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization:`bearer ${token}`
//     },
//     body: JSON.stringify({

//     })
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

export const expenses = async (expense) => {
  const { token } = isAutheticated();
  return fetch("https://zoho-expense-server.herokuapp.com/api/createexpense", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(expense),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getExpense = async (email) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
  try {
    const response = await fetch(
      `https://zoho-expense-server.herokuapp.com/api/expenseofuser/${email}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.email);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
