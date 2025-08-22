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
  document.getElementById(workplace).style.display = "contents";
  evt.currentTarget.className += " active";
} 

// function onLoad() {
//   document.getElementById("selected_button").click();
// }

function showProjCardReadMore(evt, card_name) {
  tabs = document.getElementsByClassName("card_link");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.visibility = "hidden";
  }
  document.getElementById(card_name).style.visibility = "visible";
  document.getElementById(card_name).style.animation = "typewriter 2s steps(12) infinite alternate, blink 800ms steps(12) infinite normal"
}

function showFullProjCard(evt, card_name) {
  // const cards = document.querySelectorAll(".card");

  var to_be_featured, small_cards, big_cards;
  let big_card_id = "project_contents_card_";
  let small_card_id = "proj_card_";
  to_be_featured = document.getElementById(card_name);
  small_cards = document.getElementsByClassName("project_card");
  big_cards = document.getElementsByClassName("project_contents");

  for (i = 0; i < big_cards.length; i++) {
    big_cards[i].style.visibility = "hidden";
  }

  tablinks = document.getElementsByClassName("work_tab_buttons");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(workplace).style.display = "contents";
  evt.currentTarget.className += " active";
// } 
  

//   cards.forEach((card, i) => {
//     card.addEventListener("click", () => {
//       activateCard(card);
//     });
//   });

//   function activateCard(card) {
//     cards.forEach((card) => {
//       card.classList.remove("featured");
//     });
//     card.classList.add("featured");
//   }
}
