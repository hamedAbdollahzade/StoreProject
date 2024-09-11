import { Navigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Login = () => {
  const { handleLogin } = useShoppingCart();

  return (
    <div>
      <Container>
        <div className="bg-slate-400 flex flex-col gap-5 p-12  justify-center items-center m-10">
          <h1>Login Form</h1>
          <div>
            <input type="text" placeholder="USER NAME" />
          </div>
          <div>
            <input type="password" placeholder="PASSWORD" />
          </div>
          <div>
            <button
              className="bg-slate-600 px-4 py-1 rounded text-white  "
              onClick={() => {
                handleLogin();
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
