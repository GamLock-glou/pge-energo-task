import {FC} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/providers/storeProvider";
import { cardSelector } from "../../../app/providers/storeProvider/config/reducers/cardsSlice";
import { ROUTE_CONSTANTS } from "../../../shared/config";
import { CardInfo } from "../../../entities/cardInfo";

export const Card: FC = () => {
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate()
  const card = useAppSelector(cardSelector(id ?? ""));
  if(!card) {
    navigate(ROUTE_CONSTANTS.TABLE);
  }
  return (
    <>
      <CardInfo card={card!} />
    </>
  );
}
