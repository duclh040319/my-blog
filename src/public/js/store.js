const btnDanger = document.querySelectorAll(".btn-danger");
const formDelete = document.forms["delete-post-form"];
btnDanger.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let idDelete = btn.getAttribute("data-id");
    formDelete.action = "/posts/" + idDelete + "?_method=DELETE";
    formDelete.submit();
  });
});

