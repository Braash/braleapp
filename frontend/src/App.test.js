import React from 'react'; 
import App from './App';
import renderer from 'react-test-renderer'// Import test renderer

test('Renders without crashing', () => {
  const tree = renderer.create(<App />).toJSON(); 
  expect(tree).toMatchSnapshot();  //Expect the JSON DOM tree to match snapshot.
});
