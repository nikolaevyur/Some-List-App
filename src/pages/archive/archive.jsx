import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";



const Archive = (props) => {

  // const { id } = props.match.params;

  // const render = () => {
  //   return id ? `There is ID, here it is ${id}` : `There isn't ID`
  // }

  // console.log('id', id)

    return (
      <React.Fragment>
          <Header mode={AppRoute.ARCHIVE}/>
          <section className="main__wrapper">
            {/* <div>{render()}</div> */}
            <Board />
          </section>
      </React.Fragment>
    )
}

export default Archive;