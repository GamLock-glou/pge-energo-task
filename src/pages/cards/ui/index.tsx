import { FC, useMemo, useState } from "react";

import { useAppSelector } from "../../../app/providers/storeProvider";

import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { CardsInfo } from "../../../widgets/cardsInfo";

import styles from "./cards.module.scss";
import { ICard } from "../../../app/providers/storeProvider/config/reducers/types";

const ROWS = 3;

export const Cards: FC = () => {
  const [first, setFirst] = useState(0);
  const cards = useAppSelector((state) => state.cardsReducer.cards);
  const cardsPag = useMemo(() => {
    const callback = (_: ICard, index: number) => {
      return index >= first && index < first + ROWS;
    }
    return cards.filter(callback)
  }, [cards, first])

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
  };
  return (
    <div className={styles.container}>
      <CardsInfo cards={cardsPag} />
      <Paginator
        first={first}
        rows={ROWS}
        totalRecords={cards.length}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      />
    </div>
  );
};
