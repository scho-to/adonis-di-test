import { test } from '@japa/runner'

test('List todos', async ({ client }) => {
  const response = await client.get('/todo')

  response.assertStatus(200)
})

test('Add Todo', async ({ client }) => {
  const response = await client.post('/todo').json({
    text: 'TEST',
  })

  response.assertStatus(200)
  response.assertTextIncludes('1')
})

test('Get single Todo', async ({ client }) => {
  let response = await client.get('/todo')
  const todos = JSON.parse(response.text())
  const todoId = todos[0].id
  response = await client.get('/todo/' + todoId)

  response.assertStatus(200)
  response.assertTextIncludes('TEST')
})
