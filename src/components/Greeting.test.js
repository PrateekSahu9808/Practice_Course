import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";

// describe("Greeting,components",()=>{
//   test('renders component without crashing',()=>{
//     render(<Greeting/>)
//   })
// })
// test('renders Hello World as a text',()=>{
// render(<Greeting/>)

//   const helloWorldElement= screen.getByText('Hello World',{exact:false});
//    expect(helloWorldElement).toBeInTheDocument()
// })

test("renders good to see you if button was not clicked",()=>{
  render(<Greeting/>);

const outputElement= screen.getByText('Hello World',{exact:false})
expect(outputElement).toBeInTheDocument()
})

test("renders good to see you if button was clicked",()=>{
  render(<Greeting/>)
  const buttonElement= screen.getByRole('button')
 userEvent.click(buttonElement);
 const outputElement= screen.getByText('changed Text!!')
 expect(outputElement).toBeInTheDocument()

})