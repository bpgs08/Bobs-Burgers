module.exports = () => ({
  burgers: [
    {
      id: 1,
      name: '"Sweet Chili O\' Mine" Burger',
      createdByUser: 1,
    },
    {
      id: 2,
      name: '"Blondes Have More Fun-gus" Burger (Comes with Mushrooms)',
      createdByUser: 1,
    },
    {
      id: 3,
      name: '"Kales From the Crypt" Burger',
      createdByUser: 1,
    },
    {
      id: 4,
      name: '"Parma Parma Parma Chameleon" Burger (With Parmesan crisp)',
      createdByUser: 1,
    },
    {
      id: 5,
      name: '"Sweet Home Avocado" Burger',
      createdByUser: 1,
    },
    {
      id: 6,
      name: '"Kale Mary" Burger (Served with Kale)',
      createdByUser: 1,
    },
    {
      id: 7,
      name: '"As Gouda As It Gets" Burger',
      createdByUser: 1,
    },
    {
      id: 8,
      name: '"So Many Fennel, So Little Thyme" Burger (Comes with lots of Fennel, no Thyme)',
      createdByUser: 1,
    },
    {
      id: 9,
      name: '"Grandpa Muenster" Burger (10% Senior Discount)',
      createdByUser: 1,
    },
    {
      id: 10,
      name: '"She\'s A Super Leek" Burger',
      createdByUser: 1,
    },
    {
      id: 11,
      name: '"Hit Me With Your Best Shallot" Burger',
      createdByUser: 1,
    },
    {
      id: 12,
      name: '"Say It Ain\'t Cilantro" Burger (Doesn\'t come with cilantro...because cilantro is terrible)',
      createdByUser: 1,
    },
    {
      id: 13,
      name: '"I Am Mad About Saffron" Burger (Made with no saffron)',
      createdByUser: 1,
    },
    {
      id: 14,
      name: '"Is This Your Chard?" Burger',
      createdByUser: 1,
    },
    {
      id: 15,
      name: '"Bet It All on Black Garlic" Burger',
      createdByUser: 1,
    },
    {
      id: 16,
      name: '"Foot Feta-ish" Burger',
      createdByUser: 5,
    },
  ],
  schedule: [
    {
      id: 1,
      day: 'sun',
      userIds: [1, 2, 3, 4, 5],
      burgerId: 1
    },
    {
      id: 2,
      day: 'mon',
      userIds: [1, 2],
      burgerId: 12
    },
    {
      id: 3,
      day: 'tues',
      userIds: [1, 2, 3, 4, 5],
      burgerId: 4
    },
    {
      id: 4,
      day: 'wed',
      userIds: [1, 2, 3, 4, 5],
      burgerId: 10
    },
    {
      id: 5,
      day: 'thurs',
      userIds: [1, 2],
      burgerId: 16
    },
    {
      id: 6,
      day: 'fri',
      userIds: [1, 2 , 3],
      burgerId: 6
    },
    {
      id: 7,
      day: 'sat',
      userIds: [1, 2 , 3, 4, 5],
      burgerId: 7
    },
  ],
  users: [
    {
      id: 1,
      name: 'Bob Belcher',
      username: 'bob',
      password: 'burger',
      admin: true,
      burgerAdmin: true,
    },
    {
      id: 2,
      name: 'Linda Belcher',
      username: 'linda',
      password: 'burger',
      admin: true,
      burgerAdmin: false,
    },
    {
      id: 3,
      name: 'Tina Belcher',
      username: 'tina',
      password: 'burger',
      admin: false,
      burgerAdmin: false,
    },
    {
      id: 4,
      name: 'Gene Belcher',
      username: 'gene',
      password: 'burger',
      admin: false,
      burgerAdmin: false,
    },
    {
      id: 5,
      name: 'Louise Belcher',
      username: 'louise',
      password: 'burger',
      admin: false,
      burgerAdmin: true,
    }
  ]
});
