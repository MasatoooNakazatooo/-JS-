// 問題文の読み込み
import {quize} from "/text.js"



// 初期化処理
function init(){
    ans.value = '';
    // ans.focus();
}
// 問題の表示
let numb = 0;
const setup = () => {
    // 問題の順番をセット
    const $question = document.getElementById("question");
    $question.innerHTML =quize[numb].question;
};
setup();

// 正解の合計数を計算
let count = 0;


// 送信ボタンがクリックされたらイベント発生
const $ans  = document.getElementById("ans")
const $result = document.getElementById("wrong");
function buttonClick(){
    // 正誤判定
    if ($ans.value === quize[numb].answer){
        count ++;
        numb ++;
        $result.textContent = "正解！この調子で頑張って！";
        init();
    }else{
        $result.textContent = "間違いだよ！もう一度頑張れ";
        init();
    };
    // 次の処理
    if(numb < quize.length){
        setup();
    }else{
        window.alert('お疲れ様でした!');
    }
};


const $click = document.getElementById('click').onclick = function(){
    buttonClick();
    // event.stopPropagation();
};
// $click.addEventListener("click", alert('aaaa'));  

window.document.onkeydown = function(event){
    if(event.key === "Enter" ){
        buttonClick();
    }
};

    // window.document.onkeydown = buttonClick();


    

