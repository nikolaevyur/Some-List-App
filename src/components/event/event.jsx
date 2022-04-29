import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../store/index"
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Event = observer(() => {
  const { id } = useParams(),
    history = useHistory(),
    currentEvent = events.data.filter(event => event._id === id)[0];

  const changeEvent = () => {
    return (
      id ? {
        theme: currentEvent.theme,
        comment: currentEvent.comment,
        date: currentEvent.date
      } : {
        theme: '',
        comment: '',
        date: new Date()
      })
  }

  const [form, setForm] = useState(changeEvent);

  const handleSubmit = (event) => {
    event.preventDefault();
    id ? events.editEvent({
      id: currentEvent._id,
      theme: form.theme,
      comment: form.comment,
      date: form.date,
      favorite: currentEvent.favorite,
      archive: currentEvent.archive,
    })
      : events.addEvent(form);

    history.push('/');
  }

  const handleDelete = () => {
    setForm({
      theme: '',
      comment: '',
      date: new Date(),
    })
  }

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="board">
      <form className="board__form" onSubmit={handleSubmit}>
        <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--theme"
            name="theme"
            value={form.theme}
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--comment"
            name="comment"
            value={form.comment}
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            onChange={handleFieldChange}
            className="board__input board__input--date"
            name="date"
            value={form.date}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{id ? 'Сохранить' : 'Добавить'}</button>
          <button type="reset" className="btn-reset" onClick={handleDelete}>Очистить</button>
        </div>
      </form>
    </div>
  )
})

export default Event