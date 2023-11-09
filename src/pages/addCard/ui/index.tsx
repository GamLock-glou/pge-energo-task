import {FC} from "react";
import { AddCardForm } from "../../../entities/addCardForm";

interface AddCardProps {
}

export const AddCard: FC<AddCardProps> = () => {
  return (<AddCardForm />);
}
