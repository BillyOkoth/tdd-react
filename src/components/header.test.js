import React from "react";
import { render,getByTestId } from "@testing-library/react";
import Header from "./header";

let container = null;
beforeEach(()=>{
    container = render(<Header/>).container;
});

it('it should contain a logo',()=>{
    expect(getByTestId(container,'logo')).toBeTruthy();
});

it('it should contain search',()=>{
    expect(getByTestId(container,'search')).toBeTruthy();
});
it('it should contain menu',()=>{
    expect(getByTestId(container,'menu')).toBeTruthy();
});
it('it should contain filters',()=>{
    expect(getByTestId(container,'home-type')).toBeTruthy();
    expect(getByTestId(container,'dates')).toBeTruthy();
    expect(getByTestId(container,'guests')).toBeTruthy();
    expect(getByTestId(container,'rooms')).toBeTruthy();
    expect(getByTestId(container,'prices')).toBeTruthy();
    expect(getByTestId(container,'amenities')).toBeTruthy();
    
    
});





