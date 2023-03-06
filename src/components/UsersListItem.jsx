import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunks";
import { removeUser } from "../store";
import AlbumList from "./AlbumList";
import Button from "./Button";
import ExpandablePannel from "./ExpandablePannel";
const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error delting user...</div>}
      <h1>{user.name}</h1>
    </>
  );

  return (
    <ExpandablePannel header={header}>
      <AlbumList user={user} />
    </ExpandablePannel>
  );
};

export default UsersListItem;
