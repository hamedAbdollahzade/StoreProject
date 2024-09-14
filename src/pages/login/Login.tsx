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
        <div className="bg-gray-200 flex flex-col gap-5 p-12  justify-center items-center m-20">
          <h1 className="text-3xl my-5"> ورود به حساب کاربری</h1>
          <div>
            <input
            className="p-3 outline-none"
              onChange={hadleChange}
              type="text"
              placeholder="نام خود را وارد کنید"
              name="username"
              value={user.username}
            />
          </div>
          <div>
            <input
            className="p-3 outline-none"
              onChange={hadleChange}
              type="password"
              placeholder="پسورد خود را وارد کنید"
              name="password"
              value={user.password}
            />
          </div>
          <div>
            <button

              className="bg-gray-500  p-4 flex justify-center items-center rounded text-white  "
              onClick={() => {
                handleLogin(user.username, user.password);
              }}
            >
              ورود
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
