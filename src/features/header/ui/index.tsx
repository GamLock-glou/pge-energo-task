import {FC, MouseEvent} from "react";

import { useNavigate } from "react-router-dom";

import { ROUTE_CONSTANTS } from "../../../shared/config";

import { Button } from "primereact/button";

import styles from "./header.module.scss"

export const Header: FC = () => {
  const navigate = useNavigate()
  const onClick = (e:  MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    navigate(e.currentTarget.value)
  }
  return (<div className={styles.container}>
    <Button onClick={onClick} className={styles.btn} label="Таблица" value={ROUTE_CONSTANTS.TABLE} text raised />
    <Button onClick={onClick} className={styles.btn} label="Карточки" value={ROUTE_CONSTANTS.CARDS} text raised />
  </div>);
}
