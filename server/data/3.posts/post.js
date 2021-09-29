const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const posts = [
  {
    _id: new ObjectID('60f73f7213f0e51ec2403625'),
    image: '/images/demo.png',
    title: 'Blog Post 1',
    url: 'blog-post-1',
    content: '<h1>Welcome to my FIRST blog page</h1><p>This blog has been seeded with my FIRST node SCHEMA created.</p>',
    excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The,...',
    createdBy: '5aa1c2c35ef7a4e97b5e995a',
    views: 10,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('60f73f7213f0e51ec2403626'),
    image: '/images/demo.png',
    title: 'Blog Post 2',
    url: 'blog-post-2',
    content: '<h1>Welcome to my SECOND blog page</h1><p>This blog has been seeded with my SECOND node SCHEMA created.</p>',
    excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The,...',
    createdBy: '5aa1c2c35ef7a4e97b5e995b',
    views: 12,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = posts
