import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
