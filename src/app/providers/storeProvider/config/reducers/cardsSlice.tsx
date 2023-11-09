import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "./types";
import { RootState } from "..";

interface CardsState {
  cards: ICard[];
}

const initialState: CardsState = {
  cards: [
    {
      id: 1,
      date: "10.12.2022",
      importance: "Высокая",
      equipment: "Вегас",
      message: "Что-то",
      responsible: "Евгений",
      isRead: true,
    },
    {
      id: 2,
      date: "10.12.2022",
      importance: "Низкая",
      equipment: "Коммутатор",
      message: "Что-то",
      responsible: "Евгений",
      isRead: false,
    },
    {
      id: 3,
      date: "11.12.2022",
      importance: "Низкая",
      equipment: "Люк",
      message: "Что-то",
      responsible: "Евгений",
      isRead: false,
    },
    {
      id: 4,
      date: "12.12.2022",
      importance: "Критическая",
      equipment: "ИБП",
      message: "Что-то",
      responsible: "Евгений",
      isRead: false,
    },
    {
      id: 5,
      date: "13.12.2022",
      importance: "Критическая",
      equipment: "Трансформатор",
      message: "Что-то",
      responsible: "Евгений",
      isRead: false,
    },
    {
      id: 6,
      date: "13.12.2022",
      importance: "Критическая",
      equipment: "Трансформатор",
      message: "Что-то",
      responsible: "Евгений",
      isRead: false,
    },
  ],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state: CardsState, action: PayloadAction<Omit<ICard, "id" | "isRead">>) {
      const id = state.cards[state.cards.length - 1].id + 1;
      const newCard = {
        ...action.payload,
        id: id,
        isRead: false,
      }
      state.cards.push(newCard);
    },
    changeStatusMessage(state: CardsState, action: PayloadAction<number>) {
      const index = state.cards.findIndex((card) => card.id === action.payload)
      state.cards[index].isRead = !state.cards[index].isRead;
    }
  },
})

const cardsState = (state: RootState) => state.cardsReducer;

export const cardSelector = (id: string) => createSelector(cardsState, (state) => {
  const card = state.cards.find((card) => card.id === Number(id));
  return card;
});

export const {addCard, changeStatusMessage} = cardsSlice.actions;
export default cardsSlice.reducer;
