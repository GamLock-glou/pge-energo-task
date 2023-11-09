import { FC, useCallback, useEffect, useState } from "react";

import { ICard } from "../../../app/providers/storeProvider/config/reducers/types";

import styles from "./cardsInfo.module.scss";
import { CardInfoWrapper } from "./components/cardInfoWrapper/cardInfoWrapper";
import { useAppDispatch } from "../../../app/providers/storeProvider";
import { changeStatusMessage } from "../../../app/providers/storeProvider/config/reducers/cardsSlice";

interface CardsInfoProps {
  cards: ICard[];
}

export const CardsInfo: FC<CardsInfoProps> = ({ cards }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.code === "Space" && activeId) {
      dispatch(changeStatusMessage(activeId));
    }
  }, [activeId]);
  useEffect(() => {
    if (activeId) {
      window.addEventListener("keyup", handleKeyUp)
  } else {
      window.removeEventListener("keyup", handleKeyUp)
  }

  return () => window.removeEventListener("keyup", handleKeyUp)
  }, [activeId, handleKeyUp]);

  const onCardClick = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
      return;
    }
    setActiveId(id);
  };
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <CardInfoWrapper
          key={card.id}
          card={card}
          activeId={activeId}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
