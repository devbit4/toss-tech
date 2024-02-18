//객체 아이디를 반환하는 함수?
export {};

// 1
interface Obj {
  id: string;
}

function extractId<T extends Obj>(obj: T) {
  return obj.id;
}

// 2
const args = {
  id: '1',
  name: 'good',
  age: 13,
};

//객체의 키값이 유니언으로 이루어진 타입
type ArgKey = keyof typeof args;

// id | name | age;

// 3
const arr = ['key1', 'key2', 'key3'] as const;

type ArrKey = (typeof arr)[number];

// key1 | key2 | key3;
// 자주 쓰는 bb;
