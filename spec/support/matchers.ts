const room_attr = `
  id

  name

  createdAt
  updatedAt
`

export default {

  room_attr,

  room_json: expect.objectContaining({
    id: expect.any(String),

    name: expect.any(String),

    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  }),

  errors_json: expect.objectContaining({
    message: expect.any(String),
    locations: expect.any(Array),
  }),

  errors_unauthorized_json: expect.objectContaining({
    message: "token not found",
    locations: expect.any(Array),
  }),

  payload_json: expect.objectContaining({
    user_id: expect.any(String),
    iat: expect.any(Number),
    exp: expect.any(Number),
  }),

  user_db: expect.objectContaining({
    _id: expect.any(Object),
    login: expect.any(String),
    password: expect.any(String),

    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  }),

  room_db: expect.objectContaining({
    _id: expect.any(Object),
    name: expect.any(String),

    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  }),

}
