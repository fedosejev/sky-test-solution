import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, setItemIsComplete } from '../../logic/todos';
import { setFilterIsHideComplete } from '../../logic/filters';
import './styles.css';

import Item from './components/Item';

export function ItemsList({ items, filters, onDelete, setItemIsComplete, setFilterIsHideComplete }) {
  return (
    <div>
      <button
        onClick={() => setFilterIsHideComplete({ isHideComplete: !filters.isHideComplete })}
      >
        {filters.isHideComplete ? 'Show complete' : 'Hide complete'}
      </button>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {
          items
            .filter(item => (filters.isHideComplete && !item.isComplete) || !filters.isHideComplete)
            .map(item =>
              <Item
                key={item.id}
                item={item}
                onDelete={() => onDelete(item)}
                onToggleIsComplete={() => setItemIsComplete({ id: item.id, isComplete: !item.isComplete })}
              />
            )
        }
      </ul>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  setItemIsComplete: PropTypes.func.isRequired,
  setFilterIsHideComplete: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: state.todos.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: item => dispatch(deleteItem(item)),
  setItemIsComplete: (itemId, isComplete) => dispatch(setItemIsComplete(itemId, isComplete)),
  setFilterIsHideComplete: (isHideComplete) => dispatch(setFilterIsHideComplete(isHideComplete)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
