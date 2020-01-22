import React from "react";
import "./style.css";
import { createContext } from "vm";
import { useEffect } from "react";
import { useState } from "react";

const context = createContext(defaultvalue, null);

const UserpProvider = ({ children }) => {
  const [user, setUser] = useState ( initialstate: {});

useEffect( effect: () => {
  fetch( input: '/user')
  .then( onfulfilled: res =>res.json())
  .then( onfulfilled: res =>setUser(res))
  .catch( onrejected: err => {
    console.log(err);
  });
}, deps []);
};


return (
  <context.Provider value={user}>
    {children}
  </context.Provider>
);
};

//render childrened that are passed
UserpProvider.context = context;

export default UserpProvider;

function LoginPages() {
  return (
    <div>
      <h1>Hey There!!</h1>
    </div>
  );
  
}

export default LoginPages;