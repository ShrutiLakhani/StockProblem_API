var textInput = document.querySelector("#text-inp");
var textInput2 = document.querySelector("#text-inp1");
var outputVal = document.querySelector("#output");

var btnVal = document.querySelector("#btn");

btnVal.addEventListener("click", clickHandler);

var ServiceUrl = "https://stock-api.desaihetav.repl.co/current-price/STOCK_ID"

function getTranslateUrl(text)
{
  return ServiceUrl + "?" + "text=" + text;
}

function clickHandler()
{
  var inputText = textInput.value;
  var inputText1 = textInput2.value;
  console.log(inputText);
  console.log(inputText1);
  fetch(getTranslateUrl(inputText1))
  .then(response => response.json())
  .then(json => {
    var currPrice = json.contents.translated;
    outputVal.innerText = currPrice;
  })
  

}