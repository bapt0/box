map = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

joueur = 1;
end = 0;
tour = 0;

scorep1=0;
scorep2=0;

btn = document.getElementById("reload");
btn.disabled = true;

$(".pion").click(function() {
  let line = parseInt($(this).parent().attr("l"));
  let col = parseInt($(this).attr("p"));
  if (map[line][col] == 0 && !end)
  {
    map[line][col] = joueur;
    if(joueur % 2) {
      $(this).addClass('p1');
      tour += 1;
      document.getElementById("tour").innerText = "Tour: " + tour;
      document.getElementById("jtour").innerText = "Au tour du joueur 2!";
    }
    else {
      $(this).addClass('p2');
      tour += 1;
      document.getElementById("tour").innerText = "Tour: " + tour;
      document.getElementById("jtour").innerText = "Au tour du joueur 1!";
    }
    if (isWinner(joueur)) {
      document.getElementById("winner").innerText = "Joueur " + joueur + " a gagné!";
      end = 1;
      Ending();
    } else if(tour == 9) {
      document.getElementById("winner").innerText = "Personne n'a gagné!";
      end = 2;
      Ending();
    }
    joueur = (joueur % 2) + 1;
  }
});

function isWinner(player) {
  if  ((map[0][0] == map[0][1] && map[0][1] == map[0][2] && map[0][2]) ||
      (map[1][0] == map[1][1] && map[1][1] == map[1][2] && map[1][2]) ||
      (map[2][0] == map[2][1] && map[2][1] == map[2][2] && map[2][2]) ||
      (map[0][0] == map[1][0] && map[1][0] == map[2][0] && map[2][0]) ||
      (map[0][1] == map[1][1] && map[1][1] == map[2][1] && map[2][1]) ||
      (map[0][2] == map[1][2] && map[1][2] == map[2][2] && map[2][2]) ||
      (map[0][0] == map[1][1] && map[1][1] == map[2][2] && map[2][2]) ||
      (map[0][2] == map[1][1] && map[1][1] == map[2][0] && map[2][0]))

    return player;
  return 0;

    };

function Ending() {
  if(end >= 1) {
  if(end == 1 && joueur == 1) {
  scorep1 += 1;
  document.getElementById("score").innerText = "Joueur 1: " + scorep1 + " | Joueur 2: " + scorep2;
} else if(end == 1 && joueur == 2) {
  scorep2 += 1;
  document.getElementById("score").innerText = "Joueur 1: " + scorep1 + " | Joueur 2: " + scorep2;
}
map = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
btn.disabled = false;

$("#reload").click(function() {
  tour = 0;
  document.getElementById("tour").innerText = "Tour: " + tour;
  document.getElementById("winner").innerText = "";
  $(".pion").removeClass("p1");
  $(".pion").removeClass("p2");
  btn.disabled = true;
  end = 0;
});
  }
}
