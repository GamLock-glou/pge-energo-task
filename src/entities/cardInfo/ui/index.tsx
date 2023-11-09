import { FC } from "react";
import { ICard } from "../../../app/providers/storeProvider/config/reducers/types";

import { Button } from "primereact/button";

import styles from "./cardInfo.module.scss"
import { useAppDispatch } from "../../../app/providers/storeProvider";
import { changeStatusMessage } from "../../../app/providers/storeProvider/config/reducers/cardsSlice";

interface CardInfoProps {
  card: ICard;
}

export const CardInfo: FC<CardInfoProps> = ({card}) => {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(changeStatusMessage(card.id))
  }
  return (<div className={styles.container}>
    <div className={styles.infoWrapper}>
      <div className={styles.rowWrapper}>
        <div>Дата</div>
        <div>{card.date}</div>
      </div>
      <div className={styles.rowWrapper}>
        <div>Важность</div>
        <div>{card.importance}</div>
      </div>
      <div className={styles.rowWrapper}>
        <div>Оборудование</div>
        <div>{card.equipment}</div>
      </div>
      <div className={styles.rowWrapper}>
        <div>Сообщение</div>
        <div>{card.message}</div>
      </div>
    </div>
    <div>
      <div>
        Отправитель: {card.responsible}
      </div>
      <div>
        {card.isRead ? "Прочитанно" : "Не прочитанно"}
      </div>
      <Button
        onClick={onClick}
        label={card.isRead ? "Отменить прочтение" : "Прочитать"}
        text raised  />
    </div>
  </div>);
}
