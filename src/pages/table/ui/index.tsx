import { FC } from "react";

import { CardsTable } from "../../../widgets/cardsTable";

import styles from "./tablePage.module.scss";

export const Table: FC = () => {
  return (<div className={styles.container}>
    <CardsTable />
  </div>);
}
