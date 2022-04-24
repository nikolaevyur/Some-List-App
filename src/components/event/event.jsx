import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../mocks";
import moment from "moment";
import "moment/locale/ru";

const Event = (props) => {

  const { id } = useParams();

  const changeTitle = () => {
    if (id) {
      return <h2 className="board__title">Редактирование события</h2>
    } else {
      return <h2 className="board__title">Добавление события</h2>
    }

  }

  const changeButton = () => {
    if (id) {
      return <button type="submit" className="btn-submit">Сохранить</button>
    } else {
      return <button type="submit" className="btn-submit">Добавить</button>
    }

  }

  const [form, setForm] = React.useState({
    theme: '',
    comment: '',
    date: new Date()
  });

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  const defaultEvent = {
    theme: '',
    comment: '',
    date: '',
  }

  const findEvent = events.find(n => n._id === id)

  const currentEvent = findEvent ? Object.assign({}, findEvent) : defaultEvent
  
  const formatDate = moment(currentEvent.date).format('YYYY-MM-DDThh:mm:ss')

  return (
    <section className="board">
      <form
        className="board__form"
        onSubmit={handleSubmit}
      >
        {changeTitle()}
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
            onChange={handleFieldChange}
            defaultValue={currentEvent.theme}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
            onChange={handleFieldChange}
            defaultValue={currentEvent.comment}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            onChange={handleFieldChange}
            defaultValue={formatDate}
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