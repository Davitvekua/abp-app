import "./User.css";
import "./icons";
import {
  AdressIcon,
  BirthdayIcon,
  DeleteBtnIcon,
  EmailIcon,
  GenderIcon,
  TelIcon,
  WebsiteIcon,
} from "./icons";

export type UserProps = {
  userName: string | null;
  birthday: string | null;
  address: string | null;
  gender: string | null;
  tel: string | null;
  email: string | null;
  website: string | null;
  userid: number | null;
  deleteUser: any;
};

function UserRoute({
  userName,
  birthday,
  address,
  gender,
  tel,
  email,
  website,
  deleteUser,
}: UserProps) {
  return (
    <>
      <div className="userContainer">
        <img className="usersfoto" src="./usersfoto.jpeg" alt="Users Foto" />
        <div className="leftContainer">
          <div className="leftSubContainer">
            <div className="username">{userName}</div>
            <button className="deleteBtn" onClick={deleteUser}>
              <DeleteBtnIcon />
            </button>
          </div>
          <div className="userData">
            <div className="birthday">
              <BirthdayIcon />
              {birthday}
            </div>
            <div className="address">
              <AdressIcon />
              {address}
            </div>
            <div className="gender">
              <GenderIcon />
              {gender}
            </div>
            <div className="tel">
              <TelIcon />
              {tel}
            </div>
            <div className="email">
              <EmailIcon />
              {email}
            </div>
            <div className="website">
              <WebsiteIcon />
              {website}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRoute;
