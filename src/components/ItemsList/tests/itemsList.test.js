import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';
import Item from '../components/Item';

const defaultProps = {
  items: [],
  filters: {
    isHideComplete: false,
  },
  setItemIsComplete: jest.fn(),
  setFilterIsHideComplete: jest.fn(),
  onDelete: jest.fn(),
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1', isComplete: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1', isComplete: false }, { id: 2, content: 'Test 2', isComplete: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find(Item)).toHaveLength(2);
  });
});
