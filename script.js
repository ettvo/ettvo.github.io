function open_sidebar() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("main-sidebar").style.width = "25%";
  document.getElementById("main-sidebar").style.display = "block";
  document.getElementById("open-sidebar-button").style.display = 'none';
}

function close_sidebar() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("main-sidebar").style.display = "none";
  document.getElementById("open-sidebar-button").style.display = "inline-block";
}