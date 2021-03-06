import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Arpan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Harsh',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Louis Philippe Slim Shirt',
      slug: 'lp-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Louis Philippe',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Linen Shirt.',
    },
    {
      // _id: '2',
      name: 'Peter England Slim Shirt',
      slug: 'pe-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 90,
      countInStock: 0,
      brand: 'Peter England',
      rating: 4.3,
      numReviews: 17,
      description: 'High Quality Cotton Shirt.',
    },
    {
      // _id: '3',
      name: 'Jack N Jones trousers',
      slug: 'jj-trouser',
      category: 'Trouser',
      image: '/images/p3.jpg',
      price: 180,
      countInStock: 10,
      brand: 'Jack N Jones',
      rating: 4.7,
      numReviews: 6,
      description: 'High Quality Chinos.',
    },
    {
      // _id: '4',
      name: 'Louis Philippe Trousers',
      slug: 'lp-trouser',
      category: 'Trouser',
      image: '/images/p4.jpg',
      price: 140,
      countInStock: 10,
      brand: 'Louis Philippe',
      rating: 4.4,
      numReviews: 9,
      description: 'High Quality Olive green Trousers.',
    },
  ],
};

export default data;
