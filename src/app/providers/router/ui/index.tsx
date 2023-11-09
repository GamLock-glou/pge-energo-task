import { FC } from "react";

import {Routes, Route} from "react-router-dom";
import { StoreProvider } from "../../storeProvider";

import { AddCard, Card, Table } from "../../../../pages";

import { ROUTE_CONSTANTS } from "../../../../shared/config";
import { Cards } from "../../../../pages";

export const Router: FC = () => {
  return (
    <StoreProvider>
      <Routes>
        <Route path={ROUTE_CONSTANTS.TABLE} element={<Table />} />
        <Route path={ROUTE_CONSTANTS.CARDS} element={<Cards />} />
        <Route path={ROUTE_CONSTANTS.ADD_CARD} element={<AddCard />} />
        <Route path={ROUTE_CONSTANTS.CARD} element={<Card />} />
      </Routes>
    </StoreProvider>
  );
}
