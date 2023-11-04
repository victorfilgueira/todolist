import React from 'react';
import { render } from '../../test-utils';
import { todos } from '../../mocks/todos_mock';
import { ListHeader } from '.';

describe('ListHeader component', () => {
  it('should count the number of todos', () => {
    const { getByText } = render(<ListHeader todos={todos} />);

    expect(getByText('4')).toBeDefined();
  });

  it('should count the number of todos done', () => {
    const { getByText } = render(<ListHeader todos={todos} />);

    expect(getByText('1')).toBeDefined();
  });
});
