import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Index from "./routes";
import OverviewRoute from "./routes/overviewRoute/OverviewRoute";
import CreateRoute from "./routes/createRoute/CreateRoute";
import { type UserProps } from "./routes/user/User";
import { useEffect, useState } from "react";
import EditRoute from "./routes/editRoute/EditRoute";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [adressValue, setAdressValue] = useState("");
  const [telValue, setTelValue] = useState("");
  const [webValue, setWebValue] = useState("");
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const usersString: string | null = localStorage.getItem("user");

    if (usersString) {
      const parsed = JSON.parse(usersString);
      if (Array.isArray(parsed)) {
        setUsers(parsed);
      }
    }
  }, []);

  function handleSubmit() {
    if (
      !nameValue ||
      !dateValue ||
      !genderValue ||
      !emailValue ||
      !adressValue ||
      !telValue ||
      !webValue
    ) {
      alert("Alle Feldern ausfühlen");
      return false;
    }

    const newUser: UserProps = {
      userName: nameValue,
      birthday: dateValue,
      address: adressValue,
      gender: genderValue,
      tel: telValue,
      email: emailValue,
      website: webValue,
      userid: Date.now(),
      deleteUser: undefined,
    };
    const newUsers = [...users, newUser];
    localStorage.setItem("user", JSON.stringify(newUsers));

    setUsers(newUsers);
    alert("User erfolgreich hinzugefügt");
    setNameValue("");
    setDateValue("");
    setGenderValue("");
    setEmailValue("");
    setAdressValue("");
    setTelValue("");
    setWebValue("");
    return true;
  }

  const router = createBrowserRouter([
    {
      path: "/abp-app",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Index /> },
        {
          path: "overview",
          children: [
            {
              path: "",
              element: <OverviewRoute users={users} setUsers={setUsers} />,
            },
            {
              path: ":userId",
              element: <EditRoute />,
            },
          ],
        },
        {
          path: "create",
          element: (
            <CreateRoute
              nameValue={nameValue}
              nameOchange={(e) => setNameValue(e.target.value)}
              dateValue={dateValue}
              dateOchange={(e) => setDateValue(e.target.value)}
              genderValue={genderValue}
              genderOchange={(e) => setGenderValue(e.target.value)}
              emailValue={emailValue}
              emailOchange={(e) => setEmailValue(e.target.value)}
              adressValue={adressValue}
              adressOchange={(e) => setAdressValue(e.target.value)}
              telValue={telValue}
              telOchange={(e) => setTelValue(e.target.value)}
              webValue={webValue}
              webOchange={(e) => setWebValue(e.target.value)}
              handleSubmit={handleSubmit}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
