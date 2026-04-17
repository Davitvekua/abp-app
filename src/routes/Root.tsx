import { Link, Outlet } from "react-router-dom";
import "./Root.css";

function Root() {
  return (
    <div className="main-container">
      <nav className="sideBar">
        <div className="label">ABP-APP</div>
        <Link to="/abp-app/overview">
          <button className="buttons">Übersicht</button>
        </Link>
        <Link to="/abp-app/create">
          <button className="buttons">Erstellen</button>
        </Link>
      </nav>
      <main className="mineBar">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
