$(document).ready(function () {
  const rates = {
    USD: 1.697,
    EUR: 1.9301,
    RUB: 0.0179,
    AZN: 1,
  };

  const input1 = document.getElementById("exchange-form-input-first");
  const select1 = $("#exchange-select-first");
  const input2 = document.getElementById("exchange-form-input-second");
  const select2 = $("#exchange-select-second");
  const exchange_button = document.getElementById("exchange-main-button");

  function convertValue(value, from, to) {
    if (!rates[from] || !rates[to]) return 0;
    const aznValue = value * rates[from];
    return (aznValue / rates[to]).toFixed(4);
  }

  input1.addEventListener("input", () => {
    const val1 = parseFloat(input1.value) || 0;
    input2.value = convertValue(val1, select1.val(), select2.val());
  });

  input2.addEventListener("input", () => {
    const val2 = parseFloat(input2.value) || 0;
    input1.value = convertValue(val2, select2.val(), select1.val());
    console.log("input2 isledi");
  });

  select1.on("select2:select", (e) => {
    const val1 = parseFloat(input1.value) || 0;
    input2.value = convertValue(val1, select1.val(), select2.val());
  });

  select2.on("select2:select", (e) => {
    const val2 = parseFloat(input2.value) || 0;
    input1.value = convertValue(val2, select2.val(), select1.val());
  });

  exchange_button.addEventListener("click", () => {
    
    let select_val1 = select1.val();
    let select_val2 = select2.val();

    select1.val(select_val2).trigger("change");
    select2.val(select_val1).trigger("change");

    input1.value = input2.value;

    console.log("select1", select1.val());
    console.log("select2", select2.val());
    console.log("input1", input1.value);

    const val1 = parseFloat(input1.value) || 0;
    const fromCurrency = select1.val();
    const toCurrency = select2.val();

    input2.value = convertValue(val1, fromCurrency, toCurrency);
  });
});

// const main_rates = [
//   {
//     currency: "USD",
//     buy: 1.697,
//     sell: 1.702,
//   },
//   {
//     currency: "EUR",
//     buy: 1.9325,
//     sell: 2.0015,
//   },
//   {
//     currency: "RUB",
//     amount: 100,
//     buy: 1.78,
//     sell: 2.4,
//   },
// ];
