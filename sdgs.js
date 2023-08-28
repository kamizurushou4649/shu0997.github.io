const quiz = [
    {
        question : "SDGsの具体例として、次のうち当てはまらないものはどれ？" ,
        answers : [
            "食品ロスをなくす",
            "ごみを減らし、分別を徹底する",
            "ペーパーレス化に取り組む",
            "プラスチック製のゴミは、すべて燃えないゴミに"
        ],
        correct : "プラスチック製のゴミは、すべて燃えないゴミに"
    },{
        question : "次のうち、SDGsで深刻な問題はどれ？" ,
        answers : [
            "すべて",
            "海面上昇",
            "海洋酸性化",
            "土地の劣化"
        ],
        correct : "すべて"
    },{
        question : "次のうち、プラごみに捨てたらいけないものはどれ？" ,
        answers : [
            "ペットボトルのラベル",
            "アルミ缶",
            "ポテチなどの、お菓子の袋",
            "卵のパック"
        ],
        correct : "アルミ缶"
    },{
            question : "次のうち、SDGsとは？" ,
            answers : [
                "環境や社会が抱える目標に、世界で取り組む",
                "環境や社会が抱える目標に、日本で取り組む",
                "環境や社会が抱える目標に、アジアで取り組む",
                "環境や社会が抱える目標に、愛知県で取り組む",
            ],
            correct : "環境や社会が抱える目標に、世界で取り組む"
        },{
            question : "難問!! 次のうち、海洋酸性化の理由で正しいものはどれ？" ,
            answers : [
                "海水の熱膨張や大陸氷床",
                "酸性の物質が海に流され、海が酸性に近づくから",
                "大気中の酸素が大量に海水へ溶け込むから",
                "大気中の二酸化炭素が大量に海水へ溶け込むから"
            ],
            correct : "大気中の二酸化炭素が大量に海水へ溶け込むから"
        },{
            question : "難問!! 次のうち、正しい絶滅危惧種の数は？" ,
            answers : [
                "約十万種",
                "約七十万種",
                "約百万種",
                "約百五十万種",
            ],
            correct : "約百万種"
        },{
            question : "超難問!! 次のうち、SDGs17の目標の5番に当てはまるのはどれ？" ,
            answers : [
                "平和と公平をすべての人に",
                "ジェンダー平等を実現しよう",
                "海の豊かさを守ろう",
                "エネルギーをみんなに、そしてクリーンに",
            ],
            correct : "ジェンダー平等を実現しよう"
        },

];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const question = "SDGsの具体例として、次のうち当てはまらないものはどれ？"
const answers = [
    "食品ロスをなくす",
    "ごみを減らし、分別を徹底する",
    "ペーパーレス化に取り組む",
    "プラスチック製のゴミは、すべて燃えないゴミに"
];

const $button = document.getElementsByName("button");

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex< buttonLength){
        $button [buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}


setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！")
        score++;
      } else {
        window.alert("不正解！")
     }
     
     quizIndex++;

     if(quizIndex < quizLength){
         setupQuiz();
     }else{
         const accuracy = (score / quiz.length) *  100;
         if (accuracy >= 100) {
            window.alert("終了!あなたはSDGs博士です！");
         } else if (accuracy  >= 80) {
            window.alert("終了！あなたはすごいです！")
         } else if (accuracy  >= 50) {
            window.alert("終了!一般人です！");
         } else {
            window.alert("終了!あなたは人外です！");
         }
    //      window.alert("終了!あなたの正解数は"+ score + "/" + quizLength + "です！");
     }
};


let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength){
    $button [handlerIndex].addEventListener("click",(e) => {
        clickHandler(e)
    });
    handlerIndex++;
}

