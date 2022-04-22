import React from "react";
import { useParams } from "react-router-dom";

const Event = (props) => {

  const { id } = useParams();

  const changeTitle =() => {
      if (id) {
        return <h2 className="board__title">Редактирование события</h2>
      } else {
        return <h2 className="board__title">Добавление события</h2>
      }

  }

  const changeButton =() => {
    if (id) {
      return <button type="submit" className="btn-submit">Сохранить</button>
    } else {
      return <button type="submit" className="btn-submit">Добавить</button>
    }

}



  return (
    <section className="board">
      <form className="board__form">
        {changeTitle()}
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
          />
        </fieldset>
        <div className="btns">
          {changeButton()}
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default Event;