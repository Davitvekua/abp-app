import UserRoute, { type UserProps } from "../user/User";
import { Link } from "react-router-dom";

type Props = {
  users: UserProps[];
  setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>;
};

function OverviewRoute({ users, setUsers }: Props) {
  function deleteUser(userId: number) {
    const updatedUsers = users.filter((user) => user.userid !== userId);

    localStorage.setItem("user", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  }

  return (
    <>
      {users.length === 0 && <p>Keine User vorhanden</p>}

      {users.map((user) => (
        <Link key={user.userid} to={`${user.userid}`}>
          <UserRoute
            key={user.userid}
            userName={user.userName}
            birthday={user.birthday}
            address={user.address}
            gender={user.gender}
            tel={user.tel}
            email={user.email}
            website={user.website}
            userid={user.userid}
            deleteUser={(e: MouseEvent) => {
              e.preventDefault();
              deleteUser(Number(user.userid));
            }}
          />
        </Link>
      ))}
    </>
  );
}

export default OverviewRoute;
