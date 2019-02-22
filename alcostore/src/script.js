window.router = {
  goTo(pageName) {
    $('.content').html($(`#${pageName}Tmpl`).tmpl());
  }
}

$(function () {
  $('.content').html($('#indexTmpl').tmpl());
});

