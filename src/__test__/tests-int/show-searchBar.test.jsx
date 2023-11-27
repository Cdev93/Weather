import { render, screen } from "@testing-library/react"
import SearchBar  from "../../components/SearchBar"
import { expect } from "vitest";
import { beforeEach } from "vitest";
import { useState } from "react";
import Home from "../../screens/Home";



describe('SearchBar', ()=>{

    beforeEach(async()=>{
        render(<Home></Home>);
})
    test('Deberían mostrarse la Barra de búsqueda', async()=>{
    
        const input = screen.getByPlaceholderText('Search city...')
        const sbtn  = screen.getByAltText('sbtn');
        expect(input).toHaveProperty('type');
        expect(sbtn).toHaveProperty('alt');

      
    })
})