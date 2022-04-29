import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Link to={AppRoute.ADD}>
      <button
        name="control"
        className="btn-add"
      >Создать
      </button>
    </Link>
  )
}

export default CreateButton;