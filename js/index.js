$(document).ready(function () {
  $(".cover-carousel").slick({
    prevArrow: $(".cover-carousel-prev"),
    nextArrow: $(".cover-carousel-next"),
    dots: false,
    autoplay: true,
    arrows: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    pauseOnHover: false,
  });

  $(".cover-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      setTimeout(() => {
        $(".cover-carousel-abs-count")
          .eq(0)
          .text(nextSlide + 1);
      });
    }
  );

  $(".cover-carousel2").slick({
    prevArrow: $(".cover-carousel-prev2"),
    nextArrow: $(".cover-carousel-next2"),
    dots: false,
    autoplay: true,
    arrows: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    pauseOnHover: false,
  });

  $(".cover-carousel2").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      setTimeout(() => {
        $(".cover-carousel-abs-count2")
          .eq(0)
          .text(nextSlide + 1);
      });
    }
  );

  $(".campaign-carousel")
    .eq(0)
    .slick({
      nextArrow: $(".campaign-carousel-button-left"),
      prevArrow: $(".campaign-carousel-button-right"),
      dots: false,
      autoplay: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      rtl: true,
      //  centerPadding: "0px",
      //  slidesToShow: 3,
      //  ltr: true,
      //  adaptiveHeight: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
    });

  //  select2

  //   exchange-select buttons start

  $(".exchange-select-first").select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $(".exchange-select-design1"),
  });

  $(".exchange-select-second").select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $(".exchange-select-design2"),
  });

});

//
// Navbar search block open and close start
//

var navbar_search_open = document.getElementById("open-search-block-button");
var navbar_search_close = document.getElementById(
  "navbar-search-block-close-button"
);
var search_block = document.getElementsByClassName("navbar-search-block")[0];

var navbar_search_block_left_main = document.getElementsByClassName(
  "navbar-search-block-left-main"
)[0];

navbar_search_open.addEventListener("click", function () {
  search_block.classList.remove("navbar-search-block-close");
  navbar_search_block_left_main.focus();
});

navbar_search_close.addEventListener("click", function () {
  search_block.classList.add("navbar-search-block-close");
});

//
// Navbar search block open and close end
//

// navbar search cleaner start

var navbar_search_block_input_refresh = document.getElementById(
  "navbar-search-block-input-refresh"
);

// navbar search cleaner end

var navbar_search_input = document.getElementById("navbar-search-input");

navbar_search_block_input_refresh.addEventListener("click", function () {
  navbar_search_input.value = "";
});

// t-navbar-lang-dropdown start
// lang open close

var t_navbar_lang_name = document.getElementById("t-navbar-lang-name");
var t_navbar_lang_dropdown = document.getElementsByClassName(
  "t-navbar-lang-dropdown"
);

t_navbar_lang_name.addEventListener("click", function (e) {
  e.stopPropagation();
  let siblings = this.nextElementSibling.classList;
  let check = false;
  siblings.forEach((sibling) => {
    if (sibling == "open") {
      check = true;
    }
  });

  if (check) {
    this.nextElementSibling.classList.remove("open");
  } else {
    this.nextElementSibling.classList.add("open");
  }
});
// t-navbar-lang-dropdown end

//  ekrana click edende lang menu baglansin
t_navbar_lang_dropdown[0].addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function () {
  t_navbar_lang_dropdown[0].classList.remove("open");
});
//

// credit checked submit button start

var credit_form_checkbox = document.getElementById("credit-form-checkbox");
var credit_form_submit_button = document.getElementsByClassName(
  "credit-form-submit-button"
)[0];

credit_form_checkbox.addEventListener("click", function () {
  if (this.checked) {
    credit_form_submit_button.classList.add("active");
  } else {
    credit_form_submit_button.classList.remove("active");
  }
});
// credit checked submit button end

//
// credit input focus label start
//

var credit_form_top_input = [
  ...document.getElementsByClassName("credit-form-top-input"),
];

credit_form_top_input.forEach((element, index) => {
  element.addEventListener("click", function () {
    this.classList.add("input-focus");
  });
});

//
// credit  input focus label end
//

//  range value set start

const rangeInput = [...document.getElementsByClassName("credit-range")];
const rangeOutput = [...document.getElementsByClassName("creditRangeValue")];

rangeInput.forEach((element, index) => {
  rangeOutput[index].textContent = rangeInput[index].value;

  rangeInput[index].addEventListener("input", function () {
    rangeOutput[index].textContent = this.value;
  });
});

//  range value set start

// range background color start

const ranges = document.querySelectorAll(".range-abb");



function updateRangeBg(r) {
  const min = +r.min || 0;
  const max = +r.max || 100;
  const val = +r.value;
  const percent = ((val - min) / (max - min)) * 100;
  r.style.background = `linear-gradient(to right, #007bff ${percent}%, #ddd ${percent}%)`;
}

ranges.forEach((r) => {
  r.addEventListener("input", () => updateRangeBg(r));
  updateRangeBg(r);
});

// range background color end

//
// credit start
//

let credit_amount = document.getElementById("credit-range-amount");
let credit_time = document.getElementById("credit-range-time");
let credit_percent = document.getElementById("credit-range-percent");

function abbCredit() {
  

  let credit_all_amount = document.getElementById("credit-all-amount");

  function kreditHesabla(kredit, faiz, muddet) {
    let r = faiz / 12 / 100; 
    let A =
      (kredit * (r * Math.pow(1 + r, muddet))) / (Math.pow(1 + r, muddet) - 1);
    return A.toFixed(2); 
  }

  credit_all_amount.innerText = kreditHesabla(
    credit_amount.value,
    credit_percent.value,
    credit_time.value
  );
}

credit_amount.addEventListener("input", function () {
  abbCredit();
});

credit_time.addEventListener("input", function () {
  abbCredit();
});

credit_percent.addEventListener("input", function () {
  abbCredit();
});

//
// credit end
//

//
//  depozit credit start
//

let credit_depozit_range_amount = document.getElementById(
  "credit-depozit-range-amount"
);

let credit_depozit_time_checkbox = document.querySelectorAll(
  'input[name="credit-depozit-time-checkbox"]'
);

let credit_depozit_time_monthly_checkbox = document.querySelectorAll(
  'input[name="credit-depozit-time-monthly-checkbox"]'
);

function abbDepozitCredit() {
  function getMonthlyPaymentPercent(months) {
    let percent;

    switch (months) {
      case 3:
        percent = 8;
        break;

      case 6:
        percent = 8.5;
        break;

      case 12:
        percent = 8.5;
        break;

      case 18:
        percent = 9;
        break;

      case 24:
        percent = 7.5;
        break;

      case 36:
        percent = 7.5;
        break;

      default:
        percent = 0; 
    }

    return percent;
  }

  function getYearlyPaymentPercent(months) {
    let percent;

    switch (months) {
      case 3:
        percent = 8;
        break;

      case 6:
        percent = 9;
        break;

      case 12:
        percent = 9.5;
        break;

      case 18:
        percent = 10;
        break;

      case 24:
        percent = 8.5;
        break;

      case 36:
        percent = 8.5;
        break;

      default:
        percent = 0; 
    }

    return percent;
  }

  function calculateABBDeposit(
    amount,
    percent,
    months,
    payType = "every-month"
  ) {
    const r = percent / 100;
    const years = months / 12; 

    let profit = 0;
    let totalAmount = 0;

    if (payType === "every-month") {
      
      const monthlyRate = r / 12;
      profit = amount * monthlyRate * months;
      totalAmount = profit / months; 
    } else if (payType === "every-year") {
      profit = amount * r * years;
      totalAmount = profit;
    }

    return {
      depozit: amount.toFixed(2),
      menfeet: profit.toFixed(2),
      yekun: totalAmount.toFixed(2),
      odenisTipi: payType,
      faiz: percent,
    };
  }

  //
  let checkedTimeBox = Array.from(credit_depozit_time_checkbox).find(
    (box) => box.checked
  );

  let type_Montly_Yearly = checkedTimeBox
    ? checkedTimeBox.value
    : "every-month";
  //
  let checkedTimeMonthBox = Array.from(
    credit_depozit_time_monthly_checkbox
  ).find((box) => box.checked);

  let checked_month_value = checkedTimeMonthBox ? checkedTimeMonthBox.value : 3;
  //
  let percent_montly_yearly = 0;
  if (type_Montly_Yearly == "every-month") {
    percent_montly_yearly = getMonthlyPaymentPercent(
      Number(checked_month_value)
    );
  } else {
    percent_montly_yearly = getYearlyPaymentPercent(
      Number(checked_month_value)
    );
  }

  var result = calculateABBDeposit(
    Number(credit_depozit_range_amount.value),
    percent_montly_yearly,
    Number(checked_month_value),
    type_Montly_Yearly
  );

  let credit_depozit_all_amount = document.getElementById(
    "credit-depozit-all-amount"
  );

  credit_depozit_all_amount.innerText = result.menfeet;

  let credit_depozit_amount = document.getElementById("credit-depozit-amount");

  credit_depozit_amount.innerText = result.yekun;

  let credit_depozit_percent = document.getElementById(
    "credit-depozit-percent"
  );

  credit_depozit_percent.innerText = result.faiz;
}

credit_depozit_range_amount.addEventListener("input", function () {
  abbDepozitCredit();
});

credit_depozit_time_checkbox.forEach((box) => {
  box.addEventListener("input", function () {
    abbDepozitCredit();
  });
});

credit_depozit_time_monthly_checkbox.forEach((box) => {
  box.addEventListener("input", function () {
    abbDepozitCredit();
  });
});

//
//  depozit credit end
//

//
// ipoteka car credit start
//

let credit_car_range_amount = document.getElementById(
  "credit-car-range-amount"
);

let credit_car_range_percent = document.getElementById(
  "credit-car-range-percent"
);

let credit_car_range_time = document.getElementById("credit-car-range-time");

let credit_car_percent_yearly_checkbox = document.querySelectorAll(
  'input[name="credit-car-percent-yearly-checkbox"]'
);

function abbCarCredit() {
  function creditCarABB(carPrice, percent, type, months) {
    let principal = carPrice * ((100 - percent) / 100);

    let annualRate;
    switch (type) {
      case "elektrik":
        annualRate = 13;
        break;
      case "hibrid":
        annualRate = 13.5;
        break;
      case "digər":
        annualRate = 14;
        break;
    }

    if (months > 12 && months <= 36) {
      annualRate = annualRate + 1;
    } else if (months > 36) {
      annualRate = annualRate + 2;
    }

    
    let monthlyRate = annualRate / 12 / 100;

    
    let emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    let monthlyPayment = Number(emi.toFixed(2));

    
    let commission =
      principal < 400 ? 20 : Number((principal * 0.05).toFixed(2));

    
    let totalPayment = Number((monthlyPayment * months).toFixed(2));

    return {
      principal: Number(principal.toFixed(2)),
      monthlyPayment,
      totalPayment,
      commission,
      annualRate,
    };
  }

  let checkedPercentBox = Array.from(credit_car_percent_yearly_checkbox).find(
    (box) => box.checked
  );

  let typeValue = checkedPercentBox ? checkedPercentBox.value : "elektrik";

  let carPrice = Number(credit_car_range_amount.value);
  let percent = Number(credit_car_range_percent.value);
  let type = typeValue;
  let months = Number(credit_car_range_time.value);

  var result = creditCarABB(carPrice, percent, type, months);

  let credit_car_all_amount = document.getElementById("credit-car-all-amount");

  credit_car_all_amount.innerText = result.monthlyPayment;

  let credit_car_amount = document.getElementById("credit-car-amount");

  credit_car_amount.innerText = result.principal;

  let credit_car_common_amount = document.getElementById(
    "credit-car-common-amount"
  );

  credit_car_common_amount.innerText = result.totalPayment;

  let credit_car_commission = document.getElementById("credit-car-commission");

  credit_car_commission.innerText = result.commission;

  let credit_car_percent = document.getElementById("credit-car-percent");

  credit_car_percent.innerText = result.annualRate;
}



credit_car_range_amount.addEventListener("input", function () {
  abbCarCredit();
});



credit_car_range_percent.addEventListener("input", function () {
  abbCarCredit();
});



credit_car_range_time.addEventListener("input", function () {
  abbCarCredit();
});



let credit_car_range_min_percent = document.getElementById(
  "credit-car-range-min-percent"
);

let rangeValue7 = document.getElementById("rangeValue7");

credit_car_percent_yearly_checkbox.forEach((box) => {
  box.addEventListener("change", function () {
    if (this.checked) {
      if (this.value == "elektrik") {
        credit_car_range_percent.setAttribute("min", 10);
        credit_car_range_percent.setAttribute("value", 40);
        credit_car_range_min_percent.innerText = 10;
        rangeValue7.innerText = 40;
      } else if (this.value == "hibrid") {
        credit_car_range_percent.setAttribute("min", 20);
        credit_car_range_percent.setAttribute("value", 40);
        credit_car_range_min_percent.innerText = 20;
        rangeValue7.innerText = 40;
      } else if (this.value == "digər") {
        credit_car_range_percent.setAttribute("min", 40);
        credit_car_range_percent.setAttribute("value", 40);
        credit_car_range_min_percent.innerText = 40;
        rangeValue7.innerText = 40;
      }

      ranges.forEach((r) => {
        if (r.getAttribute("id") == "credit-ipoteka-range-amount") {
          r.value = credit_car_range_percent.value;
        }
        updateRangeBg(r);
      });

      abbCarCredit();
    }
  });
});

//
// ipoteka credit end
//

//
// ipoteka credit start
//

let credit_ipoteka_range_amount = document.getElementById(
  "credit-ipoteka-range-amount"
);
let credit_ipoteka_range_time = document.getElementById(
  "credit-ipoteka-range-time"
);

let credit_ipoteka_checkbox = document.querySelectorAll(
  'input[name="credit-ipoteka-checkbox"]'
);

let credit_ipoteka_percent = document.getElementById("credit-ipoteka-percent");

function abbIpotekaCredit() {
  let credit_ipoteka_all_amount = document.getElementById(
    "credit-ipoteka-all-amount"
  );

  function ipotekaABB(kredit, faiz, ay) {
    let r = faiz / 12 / 100;
    let A = (kredit * (r * Math.pow(1 + r, ay))) / (Math.pow(1 + r, ay) - 1);
    return A.toFixed(2);
  }

  let credit_ipoteka_amount = document.getElementById("credit-ipoteka-amount");

  credit_ipoteka_amount.innerText = credit_ipoteka_range_amount.value;

  let checkedPercentBox = Array.from(credit_ipoteka_checkbox).find(
    (box) => box.checked
  );
  let percent = checkedPercentBox ? checkedPercentBox.value : 12;

  credit_ipoteka_all_amount.innerText = ipotekaABB(
    Number(credit_ipoteka_range_amount.value),
    percent,
    Number(credit_ipoteka_range_time.value) * 12
  );
}

//

credit_ipoteka_range_amount.addEventListener("input", function () {
  abbIpotekaCredit();
});

//

credit_ipoteka_range_time.addEventListener("input", function () {
  abbIpotekaCredit();
});

//

credit_ipoteka_checkbox.forEach((box) => {
  box.addEventListener("change", function () {
    if (this.checked) {
      abbIpotekaCredit();
      credit_ipoteka_percent.innerText = this.value;
    }
  });
});

const navItems = Array.from(document.querySelectorAll(".t-nav-menu-item"));
const bigMenu = document.getElementById("t-big-menu");

const bigMenuItems = Array.from(document.querySelectorAll(".t-big-menu-item"));

let closeTimer = null;

// Menu açmaq funksiyası
function openMenu(index) {
  clearTimeout(closeTimer);
  bigMenu.classList.add("t-big-menu-open");

  [...bigMenuItems].forEach((item, indexItem) => {
    if (index !== undefined) {
      if (indexItem == index) {
        bigMenuItems[indexItem].classList.add("t-big-menu-item-open");
      } else {
        bigMenuItems[indexItem].classList.remove("t-big-menu-item-open");
      }
    }
  });
}

function scheduleClose() {
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => {
    bigMenu.classList.remove("t-big-menu-open");
  }, 70); // kiçik gecikmə yanıb-sönməni önləyir
}

// Nav item hover → aç
navItems.forEach((item, index) => {
  item.addEventListener("mouseenter", function (e) {
    console.log("duzgun :" + index);
    openMenu(index);
  });
});


document.addEventListener("mousemove", (e) => {
 
  const overNav = navItems.some((item) => item.contains(e.target));
  
  const overBig = bigMenu.contains(e.target);

  

  if (!overNav && !overBig) {
    scheduleClose();
  } else {
    openMenu(); 
  }
});


const t_big_menu_item_tabs_nav_item = [
  ...document.getElementsByClassName("t-big-menu-item-tabs-nav-item"),
];

const t_big_menu_item_tabs_block_item = [
  ...document.getElementsByClassName("t-big-menu-item-tabs-block-item"),
];

t_big_menu_item_tabs_nav_item.forEach((item, index) => {
  item.addEventListener("mouseenter", function (e) {
    t_big_menu_item_tabs_nav_item.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    item.classList.add("active");

    [...t_big_menu_item_tabs_block_item].forEach((block, indexItem) => {
      if (index !== undefined) {
        if (indexItem == index) {
          block.classList.add("t_big_menu_item_tabs-open");
        } else {
          block.classList.remove("t_big_menu_item_tabs-open");
        }
      }
    });
  });
});

//
// nav big menu end
//

//
// Evalute star start
//

const evaluate_star = [...document.getElementsByClassName("evaluate-star")];
const evaluate_head_right_form = document.getElementsByClassName(
  "evaluate-head-right-form"
);

evaluate_star.forEach(function (item) {
  item.addEventListener("click", function (e) {
    removeEvaluateClass();
    this.classList.add("evaluate-active");
    evaluate_head_right_form[0].classList.add("evaluate-head-right-active");
  });
});

function removeEvaluateClass() {
  evaluate_star.forEach(function (item) {
    item.classList.remove("evaluate-active");
  });
}

//
// Evalute star end
//

//
// credit input focus label start
//

var evaluate_form_textarea = [
  ...document.getElementsByClassName("evaluate-form-textarea"),
];

evaluate_form_textarea.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.add("textarea-focus");
  });
});

//
// credit  input focus label end
//
