import React, { useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { isEmpty } from "lodash";

import Column from "../Column.js/Column";

import { initData } from "../../actions/initialData";

import "./BoardContent.scss";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDB = initData.boards.find((board) => board.id === "board-1");
    if (boardFromDB) {
      setBoard(boardFromDB);
      //sort column
      boardFromDB.columns.sort(function(a, b) {
        return (
          boardFromDB.columnOrder.indexOf(a.id) -
          boardFromDB.columnOrder.indexOf(b.id)
        );
      });
      setColumns(boardFromDB.columns);
    }
  }, []);
  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: "10px", color: "white" }}>
        Board Not Found
      </div>
    );
  }

  const onColumnDrop = (dropResult) => {
    console.log(dropResult);
  };
  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) =>  columns[index]  }
        dragHandleSelector=".column-drag-handle" //class for tag which is used for drag
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}

export default BoardContent;
