import { FC } from "react";

import cn from "classnames";

import { CardInfo } from "../../../../../entities/cardInfo";
import { ICard } from "../../../../../app/providers/storeProvider/config/reducers/types";

import styles from "./cardInfoWrapper.module.scss";

interface CardInfoWrapperProps {
  card: ICard;
  activeId: number | null;
  onCardClick: (id: number) => void;
}

export const CardInfoWrapper: FC<CardInfoWrapperProps> = ({
  card,
  activeId,
  onCardClick,
}) => {
  const onClick = () => {
    onCardClick(card.id);
  };
  return (
    <div
      key={card.id}
      onClick={onClick}
      className={cn({ [styles.cardActive]: card.id === activeId })}
    >
      <CardInfo card={card} />
    </div>
  );
};
