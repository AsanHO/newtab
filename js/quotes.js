const quotes = [
  {
    quote: "동기로는 매일할 수 없지만 규율로는 가능하다.",
    author: "jocko willink",
  },
  {
    quote: "있을 때 잘해라. 그러나 없을때는 당당하라",
    author: "이병철",
  },
  {
    quote: "시련은 있어도 실패는 없는거야",
    author: "정주영",
  },
  {
    quote: "백만장자는 사건이 아니라 과정에 의해 만들어진다.",
    author: "Mj De Marco",
  },
  {
    quote: "절대 포기하지 않는다.해낸다. 해내고 만다. 해낼 생각밖에 없다.",
    author: "이은호",
  },
  {
    quote: "위대한 회사는 위대한 상품으로써 지어진다.",
    author: "Elon Musk",
  },
  {
    quote: "Артиллерия — бог современной войны.",
    author: "Ио́сиф Виссарио́нович Ста́лин",
  },
  {
    quote:
      "행운의 여신은 용감한 남자를 사랑한다. 그녀를 때려눕히는 남자가 그녀를 가질수 있다.",
    author: "Niccolò Machiavelli",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Benedict Torvalds",
  },
  {
    quote:
      "꿈을 잃지 말고 확신 속에서 용기를 내며 그대가 처한 가혹한 현실에 과감히 도전하라",
    author: "Viktor Emil Frankl",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
