import { FC, useState } from "react";

import cn from "classnames";
import { DataTable, DataTableFilterMeta, DataTableRowClickEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../app/providers/storeProvider";

import { SearcherCards } from "../../../features/searcherCards";

import { ICard } from "../../../app/providers/storeProvider/config/reducers/types";

import styles from "./cardsTable.module.scss";

export const CardsTable: FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<DataTableFilterMeta>();
  const cards = useAppSelector((state) => state.cardsReducer.cards);
  const onFind = (value: string) => {
    setFilter({
      global: {
        value: value,
        matchMode: FilterMatchMode.CONTAINS,
      },
    });
  };

  const readBodyTemplate = (rowData: ICard) => {
    return <i className={cn(styles.read, { [styles.no]: !rowData.isRead })}>
      {rowData.isRead ? "Прочитанно" : "Не Прочитанно"}
    </i>;
  };

  const onRowClick = (e: DataTableRowClickEvent) => {
    navigate(`/cards/${e.data.id}`)
  }

  const addCard = () => {
    navigate('/cards/add')
  }

  return (
    <div className={styles.container}>
      <div className={styles.logicWrapper}>
        <Button onClick={addCard} className={styles.btn} label="Добавить" text raised />
        <SearcherCards onFind={onFind} />
      </div>
      <DataTable onRowClick={onRowClick} paginator rows={5} value={cards} filters={filter}>
        <Column field="date" header="Дата" sortable />
        <Column field="importance" header="Важность" sortable />
        <Column field="equipment" header="Оборудование" sortable />
        <Column field="message" header="Сообщение" sortable />
        <Column field="responsible" header="Ответсвенный" sortable />
        <Column
          field="isRead"
          dataType="boolean"
          sortable
          header="Прочитанно"
          body={readBodyTemplate}
        />
      </DataTable>
    </div>
  );
};
