import { useState } from "react";
import Navbar from "../navbar/navbar";
import Login from "./Login";
import DashBoardAdmin from "./dashBoardAdmin";
import { useSelector } from "react-redux";

export default function Home() {
  // const [login, setLogin] = useState(true);
  const { login } = useSelector((state) => state.AuthReducer);

  console.log("loh kok => ?", login);
  return (
    <>
      <main>
        {!login ? <Login /> : <DashBoardAdmin />}
      </main>
    </>
  );
}
