import { render } from '@testing-library/react-native';

const customRender = (ui, options) =>
  render(ui, { wrapper: undefined, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
