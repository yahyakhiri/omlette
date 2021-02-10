import {elias, maison, epicerie, couteau, bol, poele} from "./variables.js"
// Debut omelette

maison.personnes.push(elias);
elias.lieu = maison.nom
console.log(`${elias.nom} est à la ${maison.nom}`);

elias.seDeplacer(maison, epicerie);

elias.mainDroite.push(epicerie.paniers[0]);
epicerie.paniers.splice(epicerie.paniers.indexOf(elias.mainDroite[0]),1);

console.log(`${elias.nom} a pris le ${elias.mainDroite[0].nom} avec sa main droite`);

epicerie.etagere.forEach(e => {
    elias.mainDroite[0].contenu.push(e);
    console.log(`${elias.nom} a ajouté ${e.nom} dans le panier`);
    elias.payerArticle(e);
})

console.log(`Il reste à ${elias.nom} ${elias.argent}€`);

elias.seDeplacer(epicerie, maison);

while (elias.mainDroite[0].contenu.length > 0) {
    bol.contenu.push(elias.mainDroite[0].contenu.shift())
}

console.log(`${elias.nom} a mis tous les ingredients dans le bol`);

elias.seDeplacer(maison, epicerie);

epicerie.paniers.push(elias.mainDroite.pop())

console.log(`${elias.nom} a remis le panier à l'${epicerie.nom}`);

elias.seDeplacer(epicerie, maison);

bol.contenu.forEach(e => {
    elias.couper(e, couteau)
});

bol.melanger("omelette")

console.log(`Le ${bol.nom} contient ${bol.contenu[0].nom} ${bol.contenu[0].etat}`);
poele.contenu.push(bol.contenu.pop());
poele.cuire();