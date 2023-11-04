import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { todos } from '../../mocks/todos_mock';
import { TodoItem } from '.';
import { Todo } from '../../screens/Home';

describe('TodoItem component', () => {
  it('should check todo', () => {
    const onChangeStatus = jest.fn();
    const onDelete = jest.fn();
    const { getByTestId } = render(
      <TodoItem
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        todoItem={todos[0]}
      />
    );

    fireEvent.press(getByTestId('radio-btn'));
    expect(onChangeStatus).toBeCalledTimes(1);
  });

  it('should delete todo', () => {
    const onChangeStatus = jest.fn();
    const onDelete = jest.fn();
    const { getByTestId } = render(
      <TodoItem
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        todoItem={todos[0]}
      />
    );

    fireEvent.press(getByTestId('delete-btn'));
    expect(onDelete).toBeCalledTimes(1);
  });

  it('should render unchecked checkbox if todo is not done', () => {
    const todo: Todo = {
      ...todos[0],
      done: false,
    };

    const onChangeStatus = jest.fn();
    const onDelete = jest.fn();
    const { getByTestId } = render(
      <TodoItem
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        todoItem={todo}
      />
    );

    expect(getByTestId('checkbox-unchecked')).toBeDefined();
  });

  it('should render checked checkbox if todo is done', () => {
    const todo: Todo = {
      ...todos[0],
      done: true,
    };

    const onChangeStatus = jest.fn();
    const onDelete = jest.fn();
    const { getByTestId } = render(
      <TodoItem
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        todoItem={todo}
      />
    );

    expect(getByTestId('checkbox-checked')).toBeDefined();
  });

  it('should show the description', () => {
    const onChangeStatus = jest.fn();
    const onDelete = jest.fn();
    const { getByText } = render(
      <TodoItem
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        todoItem={todos[0]}
      />
    );

    expect(getByText(todos[0].description)).toBeDefined();
  });
});
