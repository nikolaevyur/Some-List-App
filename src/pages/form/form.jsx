import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { observer } from 'mobx-react-lite';

const Form = observer(() => {
  return (
    <React.Fragment>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <Event />
      </section>
    </React.Fragment>
  )
}
)
export default Form;