import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product`,
          {
            method: "GET",
            //mode: "no-cors",
          }
        );
        console.log(res);
        const resData = await res.json();
        console.log(resData);
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
