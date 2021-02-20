import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
