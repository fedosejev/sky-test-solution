import React from 'react';
import PropTypes from 'prop-types';

function Item({ item, onDelete, onToggleIsComplete }) {
  return (
    <li key={item.id}>
      {item.isComplete ? <strike>{item.content}</strike> : <span>{item.content}</span>}
      <button onClick={onDelete}>Delete</button>
      <button onClick={onToggleIsComplete}>{item.isComplete ? 'Undone' : 'Done'}</button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleIsComplete: PropTypes.func.isRequired,
};

export default Item;
