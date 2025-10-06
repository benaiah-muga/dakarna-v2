
import { Colors } from '@/constants/theme';

export const products = {
  breads: [
    { 
      id: '1', 
      title: 'Sourdough', 
      shortDescription: 'Classic, tangy flavor',
      description: 'Our classic sourdough, made with a 100-year-old starter, boasts a tangy flavor and a delightfully chewy crust. Perfect for sandwiches or enjoying with a simple spread of butter.',
      price: '7.50', 
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      ingredients: ['Organic White Flour', 'Whole Wheat Flour', 'Water', 'Sea Salt'],
      allergens: 'Contains wheat.'
    },
    { 
      id: '2', 
      title: 'Whole Wheat', 
      shortDescription: 'Nutritious whole wheat',
      description: 'A hearty and nutritious loaf, our whole wheat bread is packed with fiber and flavor. It has a soft interior and a satisfyingly rustic crust.',
      price: '6.50', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_whole_wheat_bread.jpg/1280px-Fresh_whole_wheat_bread.jpg',
      ingredients: ['Whole Wheat Flour', 'Water', 'Honey', 'Yeast', 'Sea Salt'],
      allergens: 'Contains wheat.'
    },
  ],
  pastries: [
    { 
      id: '3', 
      title: 'Croissant', 
      shortDescription: 'Flaky and buttery',
      description: 'Experience a taste of Paris with our classic croissant. Made with layers of buttery, flaky dough, it is light, airy, and irresistibly delicious.',
      price: '4.50', 
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
      backgroundColor: Colors.bakery.lightPeach,
      ingredients: ['Enriched Flour', 'Butter', 'Milk', 'Sugar', 'Yeast', 'Salt'],
      allergens: 'Contains wheat and dairy.'
    },
    { 
      id: '4', 
      title: 'Pain au Chocolat', 
      shortDescription: 'Chocolate-filled pastry',
      description: 'A delightful chocolate-filled pastry. Our Pain au Chocolat features the same flaky croissant dough wrapped around two sticks of rich, dark chocolate.',
      price: '5.00', 
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      backgroundColor: Colors.bakery.lightPeach,
      ingredients: ['Enriched Flour', 'Butter', 'Dark Chocolate', 'Milk', 'Sugar', 'Yeast', 'Salt'],
      allergens: 'Contains wheat and dairy.'
    },
  ]
};

export const allProducts = [...products.breads, ...products.pastries];
