
jest.mock('../request')

const github = require('../github')

//Test api call 
describe('#getUser() using Promises', () => {
  it('should check if its defined', () => {
    //Make the call and compare required with result;
    return github.getUser('MasulukeI')
    .then(data => {
      expect(data).toBeDefined()
      //expect(data.entity.name).toEqual('Itumeleng Masuluke')
    })
  })

  it('check result', () => {
    //Make the call and compare required with result;
    return github.getUser('MasulukeI')
    .then(data => {
    
      expect(data.entity.members.firstname).toEqual('Johann Heirich')
    })
  })
})