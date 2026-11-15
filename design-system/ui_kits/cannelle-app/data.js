window.CannelleData = {
  livre: [
    { id:'r1', title:"Tarte aux abricots", time:"45 min", cat:"Dessert", hue:"fraise" },
    { id:'r2', title:"Risotto au citron", time:"30 min", cat:"Plat", hue:"primary" },
    { id:'r3', title:"Soupe de courge rôtie", time:"50 min", cat:"Entrée", hue:"peche" },
    { id:'r4', title:"Poulet au citron confit", time:"1 h 10", cat:"Plat", hue:"primary" },
    { id:'r5', title:"Salade de lentilles tièdes", time:"25 min", cat:"Entrée", hue:"peche" },
    { id:'r6', title:"Clafoutis aux myrtilles", time:"40 min", cat:"Dessert", hue:"myrtille" }
  ],
  atelier: [
    { id:'a1', title:"Focaccia au romarin — essai 3", time:"3 h", cat:"À tester", hue:"myrtille" },
    { id:'a2', title:"Glace pistache sans sorbetière", time:"?", cat:"Idée", hue:"secondary" },
    { id:'a3', title:"Pickles de radis", time:"15 min", cat:"À tester", hue:"myrtille" }
  ],
  saison: [
    { name:"Abricot", month:"juin → août", hue:"peche" },
    { name:"Courgette", month:"juin → sept.", hue:"primary" },
    { name:"Myrtille", month:"juil. → août", hue:"myrtille" },
    { name:"Tomate", month:"juil. → oct.", hue:"fraise" },
    { name:"Basilic", month:"mai → sept.", hue:"primary" },
    { name:"Melon", month:"juil. → sept.", hue:"secondary" }
  ],
  semaine: [
    { jour:"Lundi", plat:"Risotto au citron", id:'r2' },
    { jour:"Mardi", plat:"Salade de lentilles tièdes", id:'r5' },
    { jour:"Mercredi", plat:null, id:null },
    { jour:"Jeudi", plat:"Poulet au citron confit", id:'r4' },
    { jour:"Vendredi", plat:"Soupe de courge rôtie", id:'r3' },
    { jour:"Samedi", plat:null, id:null },
    { jour:"Dimanche", plat:"Tarte aux abricots", id:'r1' }
  ],
  courses: [
    { rayon:"Fruits & légumes", items:["600 g d'abricots","2 courgettes","1 botte de basilic","3 citrons"] },
    { rayon:"Épicerie", items:["Riz arborio 250 g","Lentilles vertes 300 g","Sucre 80 g"] },
    { rayon:"Crèmerie", items:["Beurre doux 100 g","Parmesan 60 g"] }
  ],
  recette: {
    title:"Tarte aux abricots", time:"45 min", parts:"6 parts", cat:"Dessert",
    ingredients:["600 g d'abricots bien mûrs","1 pâte brisée maison","80 g de sucre de canne","2 c. à s. de poudre d'amandes","1 gousse de vanille"],
    etapes:[
      "Préchauffe le four à 180 °C. Étale la pâte dans le moule et pique-la à la fourchette.",
      "Saupoudre la poudre d'amandes sur le fond : elle boit le jus des abricots.",
      "Range les demi-abricots serrés, face bombée vers le bas, puis sucre.",
      "Enfourne 40 à 45 min, jusqu'à ce que les bords caramélisent."
    ],
    note:"Testée trois fois à l'Atelier avant d'entrer au Livre. Avec des abricots un peu acides, monte à 90 g de sucre."
  }
};
