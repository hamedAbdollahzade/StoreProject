import React, { useState } from "react";
import Container from "../../components/container/Container";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Login = () => {
  const { handleLogin } = useShoppingCart();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Container>
        <div className="bg-slate-400 flex flex-col gap-5 p-12  justify-center items-center m-10">
          <h1>Login Form</h1>
          <div>
            <input
              onChange={hadleChange}
              type="text"
              placeholder="USER NAME"
              name="username"
              value={user.username}
            />
          </div>
          <div>
            <input
              onChange={hadleChange}
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={user.password}
            />
          </div>
          <div>
            <button
              className="bg-slate-600 px-4 py-1 rounded text-white  "
              onClick={() => {
                handleLogin(user.username, user.password);
              }}
            >
              Login{" "}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
