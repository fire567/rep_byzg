import $ from 'jquery';

window.router = {
  goTo(pageName) {
    $('.content').html($(`#${pageName}Tmpl`).tmpl());
  }
}

$(function () {
  $('.content').html($('#homeTmpl').tmpl());
});

