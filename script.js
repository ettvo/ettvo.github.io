// function open_sidebar() {
//   document.getElementById("main").style.marginLeft = "25%";
//   document.getElementById("directorySidebar").style.width = "25%";
//   document.getElementById("directorySidebar").style.display = "block";
//   document.getElementById("open-sidebar-button").style.display = 'none';
// }

// function close_sidebar() {
//   document.getElementById("main").style.marginLeft = "0%";
//   document.getElementById("directorySidebar").style.display = "none";
//   document.getElementById("directorySidebar").style.width = "0%";
//   document.getElementById("open-sidebar-button").style.display = "inline-block";
// }

function openWork(evt, workplace) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(workplace).style.display = "block";
  evt.currentTarget.className += " active";
}

// document.getElementById("defaultOpenWork").click();


function openCity(evt, workplace) {
  var i, tabs, tablinks;
  tabs = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // document.getElementById(workplace).style.display = "block";
  document.getElementById(workplace).style.display = "contents";
  evt.currentTarget.className += " active";
} 