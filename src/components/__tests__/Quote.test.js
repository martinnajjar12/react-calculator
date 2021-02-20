import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Header component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
