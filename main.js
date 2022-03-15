//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전이 된다
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//7. 단위를 한국어로 읽는 법
//9. 아래 숫자를 바꿔도 위 박스에 적용됨

//1. console.log(currencyRatio.USD.unit);
//2. console.log(currencyRatio['VND']['unit]);

let currencyRatio = {
  USD:{
    USD:1,
    KRW:2,
    VND:3,
    unit:"달러"
  },
  KRW:{
    USD:2,
    KRW:1,
    VND:3,
    unit:"원"
  },
  VND:{
    USD:2,
    KRW:3,
    VND:1,
    unit:"동"
  },
};

let fromCurrency = "USD";
let toCurrency = "USD";

document
  .querySelectorAll("#from-currency-list a")
  .forEach(menu=>menu.addEventListener("click",function(){
    //1. 버튼을 가져온다     //2. 버튼의 값을 바꾼다
    document.getElementById("from-button").textContent=this.textContent;
    //선택된 currency 값을 변수에 저장한다
    fromCurrency = this.textContent;
    for(let item in currencyRatio){
      console.log(currencyRatio[item]);
    };
    // console.log(textUnit);
    // document.querySelector(".input-area div").innerText = textUnit;
    // console.log(urrencyRatio.fromCurrency.unit);
    convert();
  }));

document
  .querySelectorAll("#to-currency-list a")
  .forEach(menu=>menu.addEventListener("click",function(){
    //1. 버튼을 가져온다     //2. 버튼의 값을 바꾼다
    document.getElementById("to-button").textContent=this.textContent;
    //선택된 currency 값을 변수에 저장한다
    toCurrency = this.textContent;
    convert();
  }));

function convert(){
  //1. 환전 - 얼마를, 어디 돈을, 어디 돈으로
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  document.getElementById("to-input").value=convertedAmount;
}

