// JavaScript source code
jest.mock('../request')


const github = require('../github')

// A simple example test
describe('#getUser() using Promises', () => {

    it('should load user data', () => {
        return github.getUser('kaveshy')
            .then(data => {
                expect(data).toBeDefined()
                //expect(data.entity.name).toEqual('Koen van Gilst')
            })

        it('should check data', () => {
            return github.getUser('kaveshy')
                .then(data => {
                    expect(data.entity.name).toEqual('Kaveshan karunakaram')
                })
        })
    })
})
