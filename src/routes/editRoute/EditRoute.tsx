import "./EditRoute.css";
import { useParams } from "react-router-dom";
import type { UserProps } from "../user/User";
import { useEffect, useState } from "react";

function EditRoute() {
  const { userId } = useParams();
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [adressValue, setAdressValue] = useState("");
  const [telValue, setTelValue] = useState("");
  const [webValue, setWebValue] = useState("");
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      const users = JSON.parse(userString) as UserProps[];
      const updatedUsers: UserProps[] = users.filter(
        (user) => user.userid !== Number(userId),
      );
      setUsers(updatedUsers);

      const currentUser = users.find((user) => user.userid === Number(userId));

      if (currentUser) {
        setNameValue(currentUser.userName ?? "");
        setDateValue(currentUser.birthday ?? "");
        setAdressValue(currentUser.address ?? "");
        setEmailValue(currentUser.email ?? "");
        setWebValue(currentUser.website ?? "");
        setTelValue(currentUser.tel ?? "");
        setGenderValue(currentUser.gender ?? "");
      }
    }
  }, [userId]);

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
      return;
    }

    const newUser: UserProps = {
      userName: nameValue,
      birthday: dateValue,
      address: adressValue,
      gender: genderValue,
      tel: telValue,
      email: emailValue,
      website: webValue,
      userid: Number(userId),
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
  }

  return (
    <>
      <div className="iputsContainer">
        <label>
          Username <br />
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </label>
        <label>
          Geburtsdatum <br />
          <input
            type="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          ></input>
        </label>
        <label>
          Geschlecht <br />
          <select
            value={genderValue}
            onChange={(e) => setGenderValue(e.target.value)}
          >
            <option value="" disabled hidden></option>
            <option value="Männlich">Männlich</option>
            <option value="Weiblich">Weiblich</option>
            <option value="Divers">Divers</option>
          </select>
        </label>
        <label>
          Email Adresse <br />
          <input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          ></input>
        </label>
        <label>
          Post Adresse <br />
          <input
            type="text"
            value={adressValue}
            onChange={(e) => setAdressValue(e.target.value)}
          />
        </label>
        <label>
          Telefonnummer <br />
          <input
            type="tel"
            value={telValue}
            onChange={(e) => setTelValue(e.target.value)}
          ></input>
        </label>
        <label>
          Webseite <br />
          <input
            type="url"
            value={webValue}
            onChange={(e) => setWebValue(e.target.value)}
          ></input>
        </label>
        <button className="btnSubmit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default EditRoute;
