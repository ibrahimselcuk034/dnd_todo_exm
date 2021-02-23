// import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

function Task(props) {
  const { toDo } = props;
  const StyledContainer = styled.div`
    background-color: darkred;
    padding: 15px;
    width: 25%;
    margin: auto;
    border-radius: 5%;
    @media screen and (max-width: 1040px), print and (orientation: portrait) {
        width: 50%;
    }
    @media screen and (max-width: 520px), print and (orientation: portrait) {
        width: 75%;
    }
    @media screen and (max-width: 360px), print and (orientation: portrait) {
        width: 80%;
        font-size: 12px;
    }
    @media screen and (max-width: 270px), print and (orientation: portrait) {
        width: 80%;
        font-size: 10px;
    }
  `;
  let taskHendler = (items) => {
    return items.map((item, index) => <Item index={index} item={item}></Item>);
  };
  return (
    <Droppable droppableId={toDo.id}>
      {(provided) => (
        <StyledContainer ref={provided.innerRef} {...provided.droppableProps}>
          <h2 style={{ margin: "20px" }}>{toDo["title"]}</h2>
          {taskHendler(toDo.list)}
          {provided.placeholder}
        </StyledContainer>
      )}
    </Droppable>
  );
}
export default Task;
