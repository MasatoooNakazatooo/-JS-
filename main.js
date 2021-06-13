var question = document.getElementById("question");

const words = [
    "Let's play ---.（とにかくやってみよう。）",
    "--- the speech,（スピーチに続いて）",
    "Tickets are ---- online.（チケットはンラインで入手可能です。）"
];

const ans =[
    "anyway",
    "Following",
    "available"
]

const rnd = Math.floor(Math.random() * words.length);
question.textContent = words[rnd];

// 正解の合計数を計算
let count = 0;

const form = document.getElementById("ans").value;
if (form === ans[rnd]){
    alert("good");
    console.log("good");
}