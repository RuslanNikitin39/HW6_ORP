import orderByProps from '../app';

const obj1 = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const obj2 = ['name', 'level'];
const expected = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('Test orderByProps', () => {
  const result = orderByProps(obj1, obj2);
  expect(result).toEqual(expected);
});