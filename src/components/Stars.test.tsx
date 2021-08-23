import * as React from 'react'
import * as ReactDom from 'react-dom'
import Stars from './Stars'

test("renders the correct number of stars given the prop", () => {
  const root = document.createElement('div')
  ReactDom.render(<Stars numberOfStars={3} />, root)
  let starCount = root.children[0].children.length
  expect(starCount).toEqual(3) 
})