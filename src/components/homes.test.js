import React from "react";
import { render,getByTestId, getAllByTestId, getNodeText } from "@testing-library/react";
import Homes from "./homes";
import { act } from "react-dom/test-utils";
import apiClient from "../services/apiClient";

let container = null;
beforeEach(async ()=>{
    jest.spyOn(apiClient,'getHomes').mockImplementation(()=>{
        return Promise.resolve([
            {
                title:'test-one',
                image:'listing.png',
                location:'test location',
                price:"2"
            },
            {
                title:'test-two',
                image:'listing2.png',
                location:'test2 -location',
                price:"3"
            }
        ]);
    })
    container = render(<Homes/>).container;
    await act(async ()=>{});
});

it('it should contain homes-title',()=>{   
    const homesTitle= getAllByTestId(container,'homes-title');    
    expect(getNodeText(homesTitle[0])).toBe('test-one');
    console.log(container.innerHTML);
});
it('it should contain homes-image',()=>{
    const homesImage = getAllByTestId(container,'homes-image');
    expect(homesImage[0]).toBeTruthy();
});
it('it should contain homes-location',()=>{
    const homesLocation = getAllByTestId(container,'homes-location');
    expect(getNodeText(homesLocation[0])).toBe('test location')
});
it('it should contain homes-price',()=>{
    const homesPrice = getAllByTestId(container,'homes-price');
    expect(getNodeText(homesPrice[0])).toBe('2')
});






