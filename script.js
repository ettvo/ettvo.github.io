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

// document.getElementById("defaultOpenWork").click();


function openWorkTab(evt, workplace) {
  var i, tabs, tablinks;
  tabs = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("work_tab_buttons");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // document.getElementById(workplace).style.display = "block";
  document.getElementById(workplace).style.display = "contents";
  evt.currentTarget.className += " active";
} 

// function onLoad() {
//   document.getElementById("selected_button").click();
// }

function showProjCard(evt, card_name) {
  document.getElementById(card_name).style.visibility = "visible";
  document.getElementById(card_name).style.animation = "typewriter 2s steps(12) infinite alternate, blink 800ms steps(12) infinite normal"
}
