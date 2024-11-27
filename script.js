
// var btn=document.getElementById('btn');



let arr=["The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.— Winston Churchill",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Your limitation—it’s only your imagination.",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "It’s not about being the best. It’s about being better than you were yesterday."
]


function random(){
    let quts=document.getElementById('quotes');
   return  quts.innerHTML=arr[Math.floor(Math.random()*arr.length)]
}