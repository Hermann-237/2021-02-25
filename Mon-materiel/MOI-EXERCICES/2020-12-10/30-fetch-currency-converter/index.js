let form = document.querySelector("button");
let cripto_currency = document.querySelector(".cripto_currency");
let currency = document.querySelector(".currency");
let input_1 = document.querySelector(".input_1");
let result = document.querySelector(".result");

async function monaie() {
  try {
    const response = await fetch(
      `https://api.cryptonator.com/api/full/ticker/${cripto_currency.value}-${currency.value}`
    );
    const data = (await response).json();
    return data;
  } catch (e) {
    console.log(" The error name is:", e);
  }
}
function hermann() {
  monaie()
    .then((data) => data.ticker)
    .then((ticker) => ticker.price)
    .then((price) => {
      result.innerHTML = `${(input_1.value * price).toFixed(2)} ${cripto_currency.value}`;
    })
    .catch((error) => (document.querySelector(".error").innerHTML = error));
}
form.addEventListener("click", hermann);

/* async function simo(data) {
  let response = fetch(
    "https://5fd7333e9dd0db0017ee8ec0.mockapi.io/hermann/user",
    {
      methode: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
}
simo({ name: "hermann", age: 31 }); */

/* let url = `https://api.cryptonator.com/api/full/ticker/btc-eur`; */

/* function hermann() {
  fetch(
    `https://api.cryptonator.com/api/full/ticker/${cripto_currency.value}-${currency.value}`
  )
    .then((response) => response.json())
    .then((data) => data.ticker)
    .then((ticker) => ticker.price)
    .then((price) => `${(result.innerHTML = input_1.value * price)} `);
}

form.addEventListener("click", hermann); */
/* async function executionFunction() {
  const response = await fetch(
    `https://api.cryptonator.com/api/full/ticker/${cripto_currency.value}-${currency.value}`
  );
  let data = await response.json();
  return data;
}
console.log(executionFunction());

function hermann() {
  executionFunction()
    .then((data) => {
      data.ticker.price;
    })
    .then((price) => {
      result.innerHTML = input_1.value * price;
    });
}

form.addEventListener("click", hermann); */
/* fetch(`https://api.cryptonator.com/api/full/ticker/btc-eur`)
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* let url = `https://api.cryptonator.com/api/full/ticker/${cripto_currency.value}-${currency.value}`; */

/* let arrCripto = [];
let arrCurrency = [];

currency.addEventListener("input", function () {
  arrCripto.push(this.value.toLowerCase());
  if (currency.value != "Choose...") {
    let url = `https://api.cryptonator.com/api/full/ticker/${
      arrCurrency[arrCurrency.length - 1]
    }-${arrCripto[arrCripto.length - 1]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          result.innerHTML =
            data.ticker.price * input_1.value +
            "  " +
            "(" +
            arrCripto[arrCripto.length - 1].toUpperCase() +
            ")";
        });
      });
  }
});
cripto_currency.addEventListener("input", function () {
  arrCurrency.push(this.value.toLowerCase());
  if (cripto_currency.value != "Choose...") {
    let url = `https://api.cryptonator.com/api/full/ticker/${
      arrCurrency[arrCurrency.length - 1]
    }-${arrCripto[arrCripto.length - 1]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          result.innerHTML =
            data.ticker.price * input_1.value +
            "  " +
            "(" +
            arrCripto[arrCripto.length - 1].toUpperCase() +
            ")";
        });
      });
  }
});
 */
