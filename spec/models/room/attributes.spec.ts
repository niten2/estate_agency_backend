describe("attributes", () => {
  it("should have attributes", async () => {
    let room = await factory.create('room')

    expect(room).toEqual(matchers.room_db)
  })
})
