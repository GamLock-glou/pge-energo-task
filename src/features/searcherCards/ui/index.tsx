import {FC, useState, ChangeEvent} from "react";

import styles from "./searcherCards.module.scss"
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface SearcherCardsProps {
  onFind: (value: string) => void
}

export const SearcherCards: FC<SearcherCardsProps> = ({onFind}) => {
  const [value, setValue] = useState<string>("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    onFind(value);
  }

  return (
    <div className={styles.container}>
      <InputText value={value} onChange={onChange} />
      <Button onClick={onClick} className={styles.btn} label="Поиск" text raised />
    </div>
  );
};
