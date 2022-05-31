import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User('John Doe', 'john@doe.com')

  console.log({ user })

  expect(user.name).toEqual('John Doe')
})
