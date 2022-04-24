import React from "react";
import Card from "../card/card";
import LoadMore from "../load_more/load_more";
import Sorting from "../sorting/sorting";

const Board = ({events}) => {

  function ShowSorting () {
    if (window.location.pathname === '/') {
     return <Sorting />
    }
    
  }


  return (
    <section className="board">
      <ShowSorting />
      <div className="board__events">
        {events.map(event => <Card {...event} key={event._id} />)}
      </div>
      <LoadMore />
    </section>
  )

}

export default Board;