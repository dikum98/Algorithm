// 프로그래머스 lv2 - 문자열 압축 (카카오)

function solution(s) {
  if (s.length === 1) return 1;

  let cutStringLength = [];

  // 1개씩 순차적으로 잘라서 비교
  for (let i = 1; i <= s.length / 2; i++) {
    let cutString = ''; // 자른 전체 문자열
    let temp = '';
    let repeatCount = 1;

    // 문자열 전체를 주어진 갯수(i)씩 자른다
    for (let j = 0; j < s.length; j += i) {
      // 갯수(i)만큼 패턴이 일치하는 경우
      if (s.slice(j, j + i) === s.slice(j + i, j + i + i)) {
        repeatCount += 1;
        temp = `${repeatCount}${s.slice(j, j + i)}`;
      } else {
        // 패턴이 일치하지 않는 경우
        // 이전에는 패턴이 일치한 게 있는 경우 cutString에 해당 패턴 저장
        if (repeatCount !== 1) {
          cutString += temp;
          temp = '';
          repeatCount = 1;
        } else {
          // 이전에 일치했던 패턴이 없는 경우
          cutString += s.slice(j, j + i);
        }
      }
    }
    cutStringLength.push(cutString.length);
  }
  return Math.min(...cutStringLength);
}
