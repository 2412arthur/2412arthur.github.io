var datedujour, date, mois, mois1, jour, jour1, an;
datedujour = new Date();
jour = datedujour.getDay()
switch(jour){
case 1 :
jour1 ="Lundi"
break;
case 2 :
jour1 ="Mardi"
break;
case 3 :
jour1 ="Mercredi"
break;
case 4 :
jour1 ="Jeudi"
break;
case 5 :
jour1 ="Vendredi"
break;
case 6 :
jour1 ="Samedi"
break;
case 0 :
jour1 ="Dimanche"
break;
}
date = datedujour.getDate()
mois = datedujour.getMonth()
switch(mois+1){
case 1 :
mois1 ="Janvier"
break;
case 2 :
mois1 ="Février"
break;
case 3 :
mois1 ="Mars"
break;
case 4 :
mois1 ="Avril"
break;
case 5 :
mois1 ="Mai"
break;
case 6 :
mois1 ="Juin"
break;
case 7 :
mois1 ="Juillet"
break;
case 8 :
mois1 ="Août"
break;
case 9 :
mois1 ="Septembre"
break;
case 10 :
mois1 ="Octobre"
break;
case 11 :
mois1 ="Novembre"
break;
case 12 :
mois1 ="Décembre"
break;
}
an = datedujour.getFullYear()
document.write("<div align='center'><b>");
document.write(jour1, " ");
document.write(date, " ");
document.write(mois1 , " ");
document.write(an, " ");
document.write("</b></font></div>");
