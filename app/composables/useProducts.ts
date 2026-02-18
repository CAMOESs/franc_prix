export const useProducts = () => {
  const categories = [
    {
      id: 'boissons',
      nom: 'Bière-Sucrerie-Jus',
      count: 12,
      image: '/fruit.png'
    },
    {
      id: 'biscuiterie',
      nom: 'Biscuiterie',
      count: 12,
      image: '/cat_biscuit.png'
    },
    {
      id: 'caves_liqueurs',
      nom: 'Caves & Liqueurs',
      count: 12,
      image: '/cat_caves.jpg'
    },
    {
      id: 'charcuterie',
      nom: 'Charcuterie',
      count: 12,
      image: '/cat_charcuterie.png'
    },
    {
      id: 'coin-bebe',
      nom: 'Coin bébé',
      count: 12,
      image: 'cat_bebe_.jpeg'
    },
    {
      id: 'droguerie',
      nom: 'Droguerie',
      count: 12,
      image: '/cat_droguerie.png'
    },
    {
      id: 'epicerie',
      nom: 'Épicerie & Divers',
      count: 12,
      image: '/epicerie.jpeg'
    },
    {
      id: 'pafumerie',
      nom: 'Pafumerie',
      count: 12,
      image: '/cat_parfumerie.png'
    },
    {
      id: 'papeterie',
      nom: 'Papeterie',
      count: 12,
      image: '/cat_papeterie.png'
    },
    // {
    //   id: 'snacks',
    //   nom: 'Snacks',
    //   count: 15,
    //   image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800'
    // },
    // {
    //   id: 'frais',
    //   nom: 'Produits Frais',
    //   count: 20,
    //   image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800'
    // },
    // {
    //   id: 'autres',
    //   nom: 'Autres Produits',
    //   count: 8,
    //   image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    // }
  ]

  const conversionEuroToCFA = (euro: any) => {
    // on remplace la virgule par un point, on parse en float puis on multiplie par 655
    const valeur = parseFloat(euro.replace(',', '.'));
    return `${Math.round(valeur * 655)} FCFA`;
  };

  const products = [
    {
      id: 1,
      nom: 'Boisson Belle France – Gamme boissons aromatisées',
      description: `Choix variante :
        Orange
        Fruits rouges
        Exotique
        Cola
        Thé glacé`,
      prix: conversionEuroToCFA('2,50€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/1.jpeg'
    },
    {
      id: 2,
      nom: 'Diarra Jus Naturel Bouteille',
      description: `
      Choix variante :
      Diarra Jus Naturel Ananas & Pastèque – Bouteille
      Diarra Jus Naturel Ananas & Betterave – Bouteille
      Diarra Jus Naturel Baobab – Bouteille
      Diarra Pur Jus d’Ananas – Bouteille`,
      prix: conversionEuroToCFA('1,50€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/2.jpeg'
    },
    {
      id: 3,
      nom: 'Boisson aux graines de basilic Adija – Bouteille',
      description: `
      Choix variante :
      Strawberry (Fraise)
      Orange
      White grape (Raisin blanc)
      Mango (Mangue)
      Pomegranate (Grenade)`,
      prix: conversionEuroToCFA('3,20€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/3.jpeg'
    },
    {
      id: 4,
      nom: 'Belle France – Soda aromatisé',
      description: `
      Choix variante :
        Diabolo Menthe
        Diabolo Grenadine
        Soda Citron
        Soda Orange
        Pulpe Orange`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/4.jpeg'
    },
     {
      id: 5,
      nom: 'Belle France – Jus en bouteille',
      description: `
      Choix variante :
        Pomme,
        Orange`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/5.jpeg'
    },
    {
      id: 6,
      nom: 'Frúto – Jus Naturel Traditionnel',
      description: `
      Choix variante :
       Frúto Jus Naturel Bissap Menthe 
       Frúto Jus Naturel Baobab 
       Frúto Jus Naturel Gingembre 
       Frúto Jus Naturel Citronnade 
       Frúto Jus Naturel Bissap Ananas`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/6.jpeg'
    },
    {
      id: 7,
      nom: 'Tourtel Twist | Baltus 10',
      description: `
      Choix variante :
       Pack 6 bouteilles
       Bouteille individuelle`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/7.jpeg'
    },
    {
      id: 8,
      nom: 'Bière Belzebuth Strong Lager | Boisson énergisante Crazy Tiger Energy Drink | Boisson énergisante Monster Juiced Mango | Bière GAALLIA Champ Libre',
      description: `
      Choix variante :
       Pack 50cl`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/8.jpeg'
    },
    {
      id: 9,
      nom: 'Bière Kronenbourg 1664 Lager',
      description: `
      Choix variante :
       Pack 6x25cl`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/9.jpeg'
    },
    {
      id: 10,
      nom: 'Fischer Blonde Tradition | Leffe Ruby',
      description: `
      Choix variante :
        Pack 6x25cl
        Pack 12x25cl
        Canette
        Bouteille individuelle

        Pack 6x25cl
        Pack 12x25cl
        Bouteille 33cl
        Bouteille 50cl`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/10.jpeg'
    },
    {
      id: 11,
      nom: 'Boisson en canette',
      description: `
      Choix variante :
        Pack 6x25cl
        Pack 12x25cl
        Canette
        Bouteille individuelle

        Pack 6x25cl
        Pack 12x25cl
        Bouteille 33cl
        Bouteille 50cl`,
      prix: conversionEuroToCFA('3,80€'),
      categorie: 'Bière-Sucrerie-Jus',
      categorieId: 'boissons',
      image: '/jus1/10.jpeg'
    },
    {
      id: 12,
      nom: `Mevia |
        Golden Penny |
        King’s  |
        Jadida `,
      description: 'Produits à tartiner & matières grasses alimentaires',
      prix: conversionEuroToCFA('2,00€'),
      categorie: 'Épicerie & Divers',
      categorieId: 'epicerie',
      image: '/epicerie_et_divers/1.png'
    },
    {
      id: 6,
      nom: 'Biscuits Chocolat',
      description: 'Cookies aux pépites de chocolat',
      prix: conversionEuroToCFA('2,80€'),
      categorie: 'Snacks',
      categorieId: 'snacks',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      nom: 'Barres Céréales',
      description: 'Snack santé aux fruits',
      prix: conversionEuroToCFA('1,80€'),
      categorie: 'Snacks',
      categorieId: 'snacks',
      image: 'https://images.pexels.com/photos/1321730/pexels-photo-1321730.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      nom: 'Popcorn Salé',
      description: 'Maïs soufflé artisanal',
      prix: conversionEuroToCFA('2,50€'),
      categorie: 'Snacks',
      categorieId: 'snacks',
      image: 'https://images.pexels.com/photos/1116710/pexels-photo-1116710.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      nom: 'Yaourt Nature',
      description: 'Yaourt bio et crémeux',
      prix: conversionEuroToCFA('1,20€'),
      categorie: 'Produits Frais',
      categorieId: 'frais',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 10,
      nom: 'Fromage Frais',
      description: 'Fromage blanc onctueux',
      prix: conversionEuroToCFA('2,40€'),
      categorie: 'Produits Frais',
      categorieId: 'frais',
      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 11,
      nom: 'Salade Composée',
      description: 'Salade fraîche du jour',
      prix: conversionEuroToCFA('5,50€'),
      categorie: 'Produits Frais',
      categorieId: 'frais',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 12,
      nom: 'Sandwich Jambon',
      description: 'Pain frais et jambon de qualité',
      prix: conversionEuroToCFA('4,20€'),
      categorie: 'Produits Frais',
      categorieId: 'frais',
      image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 13,
      nom: 'Magazine Lifestyle',
      description: 'Le dernier numéro',
      prix: conversionEuroToCFA('4,90€'),
      categorie: 'Autres Produits',
      categorieId: 'autres',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 14,
      nom: 'Bougie Parfumée',
      description: 'Senteur vanille',
      prix: conversionEuroToCFA('12,50€'),
      categorie: 'Autres Produits',
      categorieId: 'autres',
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 15,
      nom: 'Gel Douche',
      description: 'Hydratant et doux',
      prix: conversionEuroToCFA('3,90€'),
      categorie: 'Autres Produits',
      categorieId: 'autres',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 16,
      nom: 'Masque Visage',
      description: 'Soin hydratant premium',
      prix: conversionEuroToCFA('8,90€'),
      categorie: 'Autres Produits',
      categorieId: 'autres',
      image: 'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];


  const getProductsByCategory = (categoryId: any) => {
    return products.filter(p => p.categorieId === categoryId)
  }

  return {
    categories,
    products,
    getProductsByCategory
  }
}
