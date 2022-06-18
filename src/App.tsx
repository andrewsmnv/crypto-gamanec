import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import { useSelector } from "react-redux";
import classes from "./App.module.scss";

function App() {
  const isDarkMode = useSelector((state: any) => state.ui.isDarkMode);

  let appClasses: any = "app";
  if (isDarkMode) {
    appClasses = "app_dark";
  }

  return (
    <div className={classes[appClasses]}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
