import { InputText } from "primereact/inputtext";
import { FC, useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { ImportanceType } from "../../../app/providers/storeProvider/config/reducers/types";
import { useAppDispatch } from "../../../app/providers/storeProvider";
import { addCard } from "../../../app/providers/storeProvider/config/reducers/cardsSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../shared/config";

import styles from "./addCardForm.module.scss";

const options: ImportanceType[] = ["Высокая", "Критическая", "Низкая"];

export const AddCardForm: FC = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState<string>("");
  const [importance, setImportance] = useState<ImportanceType>(options[0]);
  const [equipment, setEquipment] = useState("");
  const [message, setMessage] = useState("");
  const [responsible, setResponsible] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const onClick = () => {
    if(!date || !equipment || !message || !responsible) {
      setError("Заполните все поля");
      return
    }
    dispatch(
      addCard({
        date,
        importance,
        equipment,
        message,
        responsible,
      })
    );
    navigate(ROUTE_CONSTANTS.TABLE)
  };
  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}

      <InputText
        type="date"
        value={date}
        onChange={(e) => setDate(e.currentTarget.value)}
        className={styles.inputWrapper}
        placeholder="Дата"
      />
      <Dropdown
        className={styles.inputWrapper}
        onChange={(e) => setImportance(e.value)}
        value={importance}
        options={options}
        placeholder="Важность"
      />
      <InputText
        value={equipment}
        onChange={(e) => setEquipment(e.currentTarget.value)}
        className={styles.inputWrapper}
        placeholder="Оборудование"
      />
      <InputText
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        className={styles.inputWrapper}
        placeholder="Сообщение"
      />
      <InputText
        value={responsible}
        onChange={(e) => setResponsible(e.currentTarget.value)}
        className={styles.inputWrapper}
        placeholder="Ответсвенный"
      />
      <Button
        onClick={onClick}
        className={styles.btn}
        label="Создать"
        text
        raised
      />
    </div>
  );
};
