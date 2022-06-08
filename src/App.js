//import "./styles.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

export default function App() {
  return (
    <BrowserRouter>

        <Header />
        <Routes>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Routes>

    </BrowserRouter>
  );
}
