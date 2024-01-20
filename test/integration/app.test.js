import { main } from '../../src/functions/app';

test('main 1, 2 to equal 2', () => {
    expect(main(1, 2)).toBe(2);
})
