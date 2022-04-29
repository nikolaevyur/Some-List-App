import React from "react";
import Card from "../card/card";
import DeleteArchive from "../delete-archive/delete-archive";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";

const Board = ({ events }) => {

  return (
    <div className="board">
      {
        window.location.pathname === AppRoute.MAIN && <Sorting />
      }
      <div className="board__events">
        {events.map(event => <Card {...event} key={event._id} />)}
      </div>
      <LoadMore />
      {
        window.location.pathname === AppRoute.ARCHIVE && <DeleteArchive />
      }
    </div>
  )
}

export default Board;