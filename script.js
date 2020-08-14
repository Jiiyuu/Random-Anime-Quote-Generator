let quote = ["Feel The Rage. The Powerful, Pure Rage Of Not Being Able To Forgive Will Become Your Unswerving Drive To Take Action. -Giyu Tomioka",
"No Matter How Many People You May Lose, You Have No Choice But To Go On Living -- No Matter How Devastating The Blows, Maybe. -Tanjiro Kamado",
"If You Can Do One Thing, Hone It To Perfection. Hone It To The Utmost Limit. -Zenitsu's Instructor",
"The difference between the novice and the master is that the master has failed more times than the novice has tried. -Koro Sensei",
"You must fall in order to grow, hurt in order to love, lose in order to gain, Because Life's greatest lessons are learned through pain. -Pain",
"Appreciate everything around you, Before moments turn in memories. -Naruto Uzumaki",
"If you don't take risks, You can't create a future! -Monkey D. Luffy",
"Anything can be a sword if you polish it enough. -Nagisa Shiota",
"Never trust anyone too much, remember the devil was once an angel. -Kaneki Ken",
"If you truly love someone, accept their past and leave it there.",
"Anything can be a sword if you polish it enough.",
"Anything can be a sword if you polish it enough.",
"Anything can be a sword if you polish it enough.",
"Every guy has themselves the most dangerous trait of all.",
"A man shouldn't go crying like that. People will think You're weak",
"You can die anytime, but living takes true courage. -Kenshin Himura",
"Every journey begins with a single step. We just have to be patience. –Milly Thompson",
"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas. –Alibaba Saluja",
"Life is not a game of luck. If you wanna win, work hard. –Sora",
"If your life can change once, your life can change again. –Sanae",
"If you just submit yourself to fate, then that’s the end of it. –Keiichi Maebara",
"Whatever you do, enjoy it to the fullest. That is the secret of life. –Rider",
"If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. –Naruto Uzumaki",
"You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way. –Junichirou Kagami",
"We can’t waste time worrying about the what if’s. –Ichigo Kurosaki",
"No matter how hard or impossible it is, never lose sight of your goal. –Monkey D. Luffy",
"An excellent leader must be passionate because it’s their duty to keep everyone moving forward. –Nico Yazawa",
"If you can’t do something, then don’t. Focus on what you can do. –Shiroe",
"When you lose sight of your path, listen for the destination in your heart. –Allen Walker",
"The moment you think of giving up, think of the reason why you held on so long. –Natsu Dragneel",
"What you can’t accomplish alone, becomes doable when you’re with someone else. –Taichi Yaegashi",
"If you turn your eyes away from sad things, they’ll happen again one day. If you keep running away, you’ll keep repeating the same mistakes. That’s why you have to face the truth straight on. –Riki Naoe"
]

const generateButton = document.getElementById("generate");

let randomQuoteNumber = Math.floor(Math.random() * quote.length);

let randomQuote = quote[randomQuoteNumber];

document.getElementById('generate').addEventListener('click', function(){
    document.querySelector('h1').innerText = randomQuote;
    document.querySelector('button').remove();
});



