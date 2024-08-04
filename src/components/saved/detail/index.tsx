import { Button } from "@nextui-org/react";
import { ISavedData } from "../../../background/background";
import DetailTranslations from "./list";

interface SavedWordDetailProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  detail?: ISavedData;
}
const SavedWordDetail: React.FC<SavedWordDetailProps> = ({
  setShow,
  detail,
}) => {
  return (
    <div>
      <Button className="mb-2" onClick={() => setShow(false)}>
        Back
      </Button>
      <DetailTranslations detail={detail?.data} />
    </div>
  );
};

export default SavedWordDetail;
