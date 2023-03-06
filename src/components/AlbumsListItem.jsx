import Button from "./Button";
import ExpandablePannel from "./ExpandablePannel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      <h2>{album.title}</h2>
    </>
  );
  return (
    <ExpandablePannel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePannel>
  );
};

export default AlbumsListItem;
