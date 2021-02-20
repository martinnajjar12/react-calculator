import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
