
import demo from '../app';

test('demo', () => {
    const expected = 'Hello';
    const received =  demo('Hello');
    expect(received).toEqual(expected);
});
