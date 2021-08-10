const question = document.getElementById("question");
const wrong = document.getElementById("wrong");

// 問題
const words = [
    "Let's play ---.（とにかくやってみよう。）",
    "--- the speech,（スピーチに続いて）",
    "Tickets are ---- online.（チケットはンラインで入手可能です。）"
];
// 解答
const ans =[
    "anyway",
    "Following",
    "available"
];

// 初期化処理
function init(){
    alert("good")
    form.input[numb].value = ''
    form.input[numb].focus()
}

// 問題をランダムにださず今回はパス
// const rnd = Math.floor(Math.random() * words.length);

// 問題の順番をセット
const numb = 0;
// 正解の合計数を計算
const count = 0;

// 送信ボタンを取得
const btn = document.getElementById("submit");

// while(numb <= words.length){
    
    
    // 問題の表示
    question.textContent = words[numb];
    
    //     // 解答の取得
    const form = document.getElementById("ans");
    
    // 送信ボタンがクリックされたらイベント発生
    function buttonClick(){
        if (form.value === ans[numb]){
            count++
            init();
        }else{
            wrong.textContent = "間違いだよ！ぼけ！かす！こらっ！ちゃんと勉強せんかい！";
            setTimeout(function(){init()}, 1000)
        }
    }
// }