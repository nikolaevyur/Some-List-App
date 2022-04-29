import React from "react";
import Card from "../card/card";
import DeleteArchive from "../delete-archive/delete-archive";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";

const Board = ({ events }) => {

  const [step, setStep] = React.useState(5);

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 5) : setStep(events.length);
  }
  
  return (
    <div className="board">
      {
        window.location.pathname === AppRoute.MAIN && <Sorting />
      }
      <div className="board__events">
        {events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
      </div>
      <button className="load-more" type="button" onClick={handleLoadMore}>Загрузить еще</button>
      {
        window.location.pathname === AppRoute.ARCHIVE && <DeleteArchive />
      }
    </div>
  )
}

export default Board;