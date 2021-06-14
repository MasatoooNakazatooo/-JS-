var question = document.getElementById("question");
var wrong = document.getElementById("wrong");

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
    // 一番から順番に出す
    // 問題の表示
    form.input[numb].value = ''
    form.input[numb].focus()
    
}
// 問題をランダムにださず今回はパス
// const rnd = Math.floor(Math.random() * words.length);

// 問題の順番をセット
let numb = 0;
// 正解の合計数を計算
let count = 0;

// 送信ボタンを取得
const btn = document.getElementById("submit");
// 送信ボタンがクリックされたらイベント発生
// alert(numb <= words.length);
// while(numb <= words.length){
    

    // 問題の表示
    question.textContent = words[numb];
    btn.addEventListener('click', function()
    {
        // 解答の取得
        const form = document.getElementById("ans");
        // alert(numb);
        if (form.value === ans[num]){
            numb = numb + 1
            count++
            init();
        }else{
            wrong.textContent = "間違いだよ！ぼけ！かす！こらっ！ちゃんと勉強せんかい！";
            num++
            setTimeout(function(){init()}, 10000)
        }
        
    }, false);
    
// }