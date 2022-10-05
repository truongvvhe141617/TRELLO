import React, {useState, useEffect} from "react";
import { isEmpty } from 'lodash';

import Column from '../Column.js/Column';

import {initData} from '../../actions/initialData'

import "./BoardContent.scss";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
      const boardFromDB = initData.boards.find((board) => board.id === 'board-1');
      if(boardFromDB){
        setBoard(boardFromDB);
        //sort column
        boardFromDB.columns.sort(function(a,b){
          return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id);
        })
        setColumns(boardFromDB.columns);
      }
  }, [])
  if (isEmpty(board)) {
    return <div className="not-found" style={{'padding' : '10px', 'color' : 'white'}}>Board Not Found</div>;
  }
  return (
    <div className="board-content">
      {columns.map((column, index) => <Column key={index} column = {column}/>)}
     
    </div>
  );
}

export default BoardContent;
