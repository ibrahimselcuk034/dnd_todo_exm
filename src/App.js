import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Task from "./Todo";
let toDo = [
  {
    id: "1234",
    title: "Yapılacaklar Listesi",
    list: [
      "Müşteri aranacak.",
      "Login Page bitirilecek.",
      "Proje toplantısına katılılınacak.",
      "Proje tamamlanacak.",
      "Yeni projeye başlanacak.",
    ],
  },
];

let onDragEnd = (result) => {
  if (!result.destination) {
    return;
  }
  let sourceIdx = parseInt(result.source.index);
  let destIdx = parseInt(result.destination.index);
  let draggedLink = toDo[0].list[sourceIdx];
  let newList = toDo[0].list.slice();
  newList.splice(sourceIdx, 1);
  newList.splice(destIdx, 0, draggedLink);
  toDo[0].list = newList;
};

function App() {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Task toDo={toDo[0]} />
    </DragDropContext>
  );
}
export default App;
