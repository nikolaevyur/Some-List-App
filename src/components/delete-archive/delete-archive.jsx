import React from "react";
import "./delete-archive.css";
import { events } from "../../store/index";

const DeleteArchive = () => {

	const handleDeleteArchive = (evt) => {
		evt.preventDefault();
		events.deleteArchiveEvents();
		events.fetch(events);
	}

	return (
		<button
			className='delete-archive'
			type='button'
			onClick={handleDeleteArchive}
		>Очистить архив
		</button>
	)
}

export default DeleteArchive;