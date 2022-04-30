const quotes = [
    {
     quote: "나는 생각한다 고로케 먹고싶다" ,
     author: "고로케 짱",
    },
    {
     quote: "5월 3일에 너 교육있다" ,
     author: "교육 꼭 받아라",
    },
    {
     quote: "5월 10일에 너 교육 인증 있다." ,
     author: "인증 꼭 해라",
    },
    {
     quote: "Don't let the fear of losing be greater than the excitement of winning." ,
     author: "- Robert Kiyosaki -",
    },
    {
     quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success." ,
     author: "- Dale Carnegie -",
    },
    {
     quote: "Action is the foundational key to all success." ,
     author: "- Pablo Picasso -",
    },
    {
     quote: "It is your determination and persistence that will make you a successful person." ,
     author: "- Kenneth J Hutchins -",
    },
    {
     quote: "You can waste your life drawing lines. Or you can live your life crossing them." ,
     author: "- Shonda Rhimes -",
    },
    {
     quote: "Be poor, humble and driven. Don't be afraid to shift or pivot." ,
     author: "- Alex Rodriguez -",
    },
    {
     quote: "배고프다" ,
     author: "밥먹어",
    },
]

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;