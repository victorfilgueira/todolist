import React from 'react';
import { render } from '../../test-utils';
import { EmptyList } from '.';

describe('EmptyList component', () => {
  it('should render', () => {
    const { getByText } = render(<EmptyList />);

    const title = 'Você ainda não tem tarefas cadastradas';
    const subtitle = 'Crie tarefas e organize seus itens a fazer';

    expect(getByText(title)).toBeDefined();
    expect(getByText(subtitle)).toBeDefined();
  });
});
