export const useProducts = () => {
  const categories = [
    {
      id: 'boissons',
      nom: 'Boissons',
      count: 12,
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'snacks',
      nom: 'Snacks',
      count: 15,
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'frais',
      nom: 'Produits Frais',
      count: 20,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'autres',
      nom: 'Autres Produits',
      count: 8,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const conversionEuroToCFA = (euro:any) => {
  // on remplace la virgule par un point, on parse en float puis on multiplie par 655
  const valeur = parseFloat(euro.replace(',', '.'));
  return `${Math.round(valeur * 655)} FCFA`;
};

const products = [
  {
    id: 1,
    nom: 'Coca-Cola',
    description: 'Boisson rafraîchissante pétillante',
    prix: conversionEuroToCFA('2,50€'),
    categorie: 'Boissons',
    categorieId: 'boissons',
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    nom: 'Eau Minérale',
    description: 'Eau pure et naturelle',
    prix: conversionEuroToCFA('1,50€'),
    categorie: 'Boissons',
    categorieId: 'boissons',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    nom: 'Jus d\'Orange',
    description: '100% pur jus pressé',
    prix: conversionEuroToCFA('3,20€'),
    categorie: 'Boissons',
    categorieId: 'boissons',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    nom: 'Limonade Artisanale',
    description: 'Boisson pétillante au citron',
    prix: conversionEuroToCFA('3,80€'),
    categorie: 'Boissons',
    categorieId: 'boissons',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    nom: 'Chips Nature',
    description: 'Pommes de terre croustillantes',
    prix: conversionEuroToCFA('2,00€'),
    categorie: 'Snacks',
    categorieId: 'snacks',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400'
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


  const getProductsByCategory = (categoryId:any) => {
    return products.filter(p => p.categorieId === categoryId)
  }

  return {
    categories,
    products,
    getProductsByCategory
  }
}
