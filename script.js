function open_sidebar() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("directorySidebar").style.width = "25%";
  document.getElementById("directorySidebar").style.display = "block";
  document.getElementById("open-sidebar-button").style.display = 'none';
}

function close_sidebar() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("directorySidebar").style.display = "none";
  document.getElementById("directorySidebar").style.width = "0%";
  document.getElementById("open-sidebar-button").style.display = "inline-block";
}