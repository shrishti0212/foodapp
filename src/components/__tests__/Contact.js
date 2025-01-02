import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case ",() => {
test("Should load contact us component",()=>{
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});

test("Should load button inside Contact Component",()=>{
    render(<Contact />);

     const button= screen.getByRole("button");

     expect(button).toBeInTheDocument();
});


test("Should load input name inside countact component ",()=>{
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
});


test("should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);

});
});
