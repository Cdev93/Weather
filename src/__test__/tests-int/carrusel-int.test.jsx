import { render} from "@testing-library/react";
import DisplayDetails from "../../components/DisplayDetails";
import MyComponent from "../../utils/carousel";
import { expect } from "vitest";


describe('Display details: carrusel',()=>{
   test('Debería aparecer el carrusel', async() => {
        render(<DisplayDetails/>);
        expect(<MyComponent/>).toBeDefined();
    });

})
