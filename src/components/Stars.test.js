// import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-17'

// import Stars from './Stars'
// Enzyme.configure({ adapter: new Adapter() })

// describe('Stars', () => {
//   it('should render a varying number of icons depending on the prop', () => {
//     const wrapper = shallow(<Stars numberOfStars={3}/>)
//     const starDiv = wrapper.find('div')
//     expect(starDiv).toHaveLength(3)
//     expect(starDiv.childElementCount).toEqual(3)
//   })
// })