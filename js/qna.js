/*

angry 0
sad 1
happy 2
tired 3
*/

const qnaList = [
  {
    q: '1. 지금 당신 필요한 것은 무엇인가요?',
   
    a: [
      { answer: 'a. 나를 위로해주고 힘이 되어주는 사람', type: [1, 3, 2] },
      { answer: 'b. 휴식을 취할 수 있는 여유', type: [0] }
    ]
  },
  {
    q: '2. 새벽에 잠이 깬 당신 무엇을 하고 싶나요 ',
    a: [
      { answer: 'a. 그냥 다시 잔다', type: [0, 2] },
      { answer: 'b. 조용히 노래를 들으며 새벽감성을 느낀다.', type: [3, 1] }
    ]
  },
  {
    q: '3. 오늘은 당신이 놀러가는 날입니다. 어디로 갈까요?',
    a: [
      { answer: 'a. 새로운 사람들을 만나고 즐길 수 있는 페스티벌. ', type: [3] },
      { answer: 'b. 한적하고 조용한 자연.', type: [0, 1, 2] }
    ]
  },
  {
    q: '4. 오늘 나가기로 했는데 비가 옵니다 어떻게 할까요?',
    a: [
      { answer: 'a. 비가 오면 실내에서 놀면 되지 예정대로 나간다. ', type: [3, 0 ] },
      { answer: 'b. 그냥 집에 있는다.', type: [1, 2 ] }
    ]
  },
  {
    q: '5. 나는 다른 사람들 앞에서 ',
    a: [
      { answer: 'a. 춤을 출 수 있다', type: [3, 0] },
      { answer: 'b. 내적 댄스만 가능하다', type: [1, 2]}
    ]
  },

  {
    q: '6. 나는 화를 잘낸다',
    a: [
      { answer: 'a. 그렇다', type: [0] },
      { answer: 'b. 아니다', type: [1, 2, 3] }
    ]
  },
  {
    q: '7. 나는 종종 기분 변화가 심해질 때가 있다',
    a: [
      { answer: 'a. 그렇다', type: [0,2,1] },
      { answer: 'b. 아니다', type: [3 ] }
    ]
  },
  {
    q: '8. 지금 나는 약간',
    a: [
      { answer: 'a. 하늘로 날아갈 것만 같다.', type: [2] },
      { answer: 'b. 중력이 날 더 잡아당기는 것 같다.', type: [1, 3, 0] }
    ]
  },
  {
    q: '9. 나의 지금 기분은',
    a: [
      { answer: 'a. 우울하다', type: [1, 0, 3 ] },
      { answer: 'b. 행복하다.', type: [2] }
    ]
  },
  {
    q: '10. 나는 힘들 때 ',
    a: [
      { answer: 'a. 우울한 영화를 본다', type: [3, 1] },
      { answer: 'b. 신나는 영화를 본다', type: [2, 0] }
    ]
  }
]

const infoList = [
  {
    name: '당신은 지금 화가 나있는 상태인 것 같아요',
    feel: '분노',
    desc: '화나는 당신 화를 진정시킬 수 있게 잔잔한 음악 추천해 드릴게요'
  },
  {
    name: '당신은 지금 우울한 상태인 것 같아요',
    feel: '슬픔',
    desc: '우울한 당신 우울한 마음을 달랠 수 있게 조용한 음악 추천해 드릴게요'
  },
  { name: '당신은 지금 신이 나있는 상태인 것 같아요',
    feel: '기쁨',
    desc: '신나는 당신 더 신날 수 있게 활기찬 음악 추천해 드릴게요'
  },
  {  
    name: '당신은 지금 피곤한 상태인 것 같아요',
    feel: '피곤',
    desc: '피곤한 당신 휴식을 취할 수 있게 음악 추천해 드릴게요!'}
]