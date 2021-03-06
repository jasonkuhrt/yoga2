import { objectType, stringArg } from 'yoga'

/*
type Query {
  hello(name: String!): String!
  user(name: String!): User!
}
*/
export const Query = objectType('Query', t => {
  t.field('hello', 'String', {
    args: {
      name: stringArg(),
    },
    resolve: (root, { name }) => `Hello ${name}`,
  })
  
  t.field('user', 'User', {
    args: {
      name: stringArg(),
    },
    resolve: (root, args) => ({ name: args.name }),
  })
})
