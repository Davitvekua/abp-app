import { useNavigate } from "react-router-dom";
import "./CreateRoute.css";

type CreateProps = {
  nameValue: string;
  nameOchange: React.ChangeEventHandler<HTMLInputElement>;

  dateValue: string;
  dateOchange: React.ChangeEventHandler<HTMLInputElement>;
  genderValue: string;
  genderOchange: React.ChangeEventHandler<HTMLSelectElement>;

  emailValue: string;
  emailOchange: React.ChangeEventHandler<HTMLInputElement>;

  adressValue: string;
  adressOchange: React.ChangeEventHandler<HTMLInputElement>;

  telValue: string;
  telOchange: React.ChangeEventHandler<HTMLInputElement>;

  webValue: string;
  webOchange: React.ChangeEventHandler<HTMLInputElement>;

  handleSubmit: any;
};

function CreateRoute({
  nameValue,
  nameOchange,
  dateValue,
  dateOchange,
  genderValue,
  genderOchange,
  emailValue,
  emailOchange,
  adressValue,
  adressOchange,
  telValue,
  telOchange,
  webValue,
  webOchange,
  handleSubmit,
}: CreateProps) {
  const navigate = useNavigate();

  function handleSubmitClick() {
    const submitUser = handleSubmit();

    if (submitUser) {
      navigate("/abp-app/overview");
    }
  }

  return (
    <>
      <div className="iputsContainer">
        <label>
          Username <br />
          <input type="text" value={nameValue} onChange={nameOchange} />
        </label>
        <label>
          Geburtsdatum <br />
          <input type="date" value={dateValue} onChange={dateOchange}></input>
        </label>
        <label>
          Geschlecht <br />
          <select value={genderValue} onChange={genderOchange}>
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
            onChange={emailOchange}
          ></input>
        </label>
        <label>
          Post Adresse <br />
          <input type="text" value={adressValue} onChange={adressOchange} />
        </label>
        <label>
          Telefonnummer <br />
          <input type="tel" value={telValue} onChange={telOchange}></input>
        </label>
        <label>
          Webseite <br />
          <input type="url" value={webValue} onChange={webOchange}></input>
        </label>
        <button className="btnSubmit" type="button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </>
  );
}

export default CreateRoute;
