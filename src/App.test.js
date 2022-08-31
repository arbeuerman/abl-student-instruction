import { render } from '@testing-library/react';
import App from './App';

describe('App displays correctly', () => {
  
  it('App renders without errors', () => {
    expect( () => { render(<App />) }).not.toThrowError();
  })
  
});
