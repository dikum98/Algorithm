// 배열로 덱 구현
const MX = 1000005;
const queueArr = [];
let head = MX;
let tail = MX;

const push_front = (val) => {
  queueArr[--head] = val;
};

const push_back = (val) => {
  queueArr[tail++] = val;
};

const pop_front = () => {
  head += 1;
};

const pop_back = () => {
  tail -= 1;
};

const front = () => queueArr[head];

const back = () => queueArr[tail - 1];
