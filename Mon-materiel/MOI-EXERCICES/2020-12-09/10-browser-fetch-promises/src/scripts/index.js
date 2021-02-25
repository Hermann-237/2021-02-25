// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

$(".close").click(function () {
  $(".modal").hide();
});

let modalTimeout = window.setTimeout(function () {
  $(".modal").css("display", "");
  $(".modal").css("display", "block");
}, 6000);

const executionModal = Promise.resolve();
executionModal.then(modalTimeout);

const ifReject = Promise.reject();

ifReject.catch((error) =>
  console.log("Oup!!!!!you make an Error some where ", error)
);

/* let p = new Promise((resolve, reject) => {
  let x = $(".modal").css("display", "block");
  setTimeout(resolve, 5000, x);
});
p.then((windowPopUp) => {
  return windowPopUp;
});
 */
/* let x;
let modalTime = new Promise((resolve, reject) => {
  x = $(".modal").css("display", "").css("display", "block");
  window.setTimeout(resolve(x), 3000);
});

modalTime.then((x) => {
  return x;
}); */

/* let p = new Promise((resolve, reject) => {
  if ($(".modal").css("display", "none")) {
    resolve(
      setTimeout(function () {
        return $(".modal").css("display", "block");
      }, 2000)
    );
  } else {
    reject("Try again");
  }
});
p.then((message) => {
  console.log(message);
});
 */
