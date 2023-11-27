import {test, expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    //navega hacia la pag de mi app
    await page.goto('http://127.0.0.1:5173/');
    
});


test.describe('Testing show page', ()=>{
    test('Debería mostrar la página de la app por defecto', async({page})=>{
      
       await expect(page).toHaveTitle(/WeatherApp/);
       await expect(page.locator('div.no-added')).toBeVisible();
       await expect(page.locator('div.b-details-cont')).toBeVisible();
    });

});

test.describe('Testing Searchs & adds', ()=>{

    test('Debería estar visible el botón de buscar', async({page})=>{
        await expect(page.locator('button.search-btn')).toBeVisible();
    })

    test('Debería realizar el procedimiento esperado de una búsqueda con su correspondiente almacenado y eliminación', async({page})=>{
       //comprobamos que la barra de búsqueda está vacía
        await expect(page.locator('input.input-container-sb')).toBeEmpty();

        //introducimos un parámetro y pulsamos el botón de buscar
        await page.locator('input.input-container-sb').fill('Madrid');
        //se espera que aparezca la sugerencia
        await expect(page.locator('button.sugg-btn')).toBeVisible();
        //se pulsa el botón de buscar
        await page.locator('button.search-btn').click();

        //se espera que aparezcan los detalles de la búsqueda
        await expect(page.locator('div.weather-details-container')).toBeVisible();

        //pulsamos el botón de añadir
        await page.locator('button.add-btn').click();
        
        //se espera que se muestre la ciudad en la sección de las almacenadas
        await expect(page.locator('div.added-cities-cont')).toBeVisible();

        //desplazamos el carrusel de las predicciones
        await page.locator('div.styles-module_carousel-base__3keqD > div:nth-child(1) > button:nth-child(1)').click();
        await page.locator('div.styles-module_carousel-base__3keqD > div:nth-child(3) > button:nth-child(1)').click();

        //cerramos los detalles esperando que dejen de mostrarse
        await page.locator('button.clear-btn').click();
        await expect(page.locator('div.weather-details-container')).toBeHidden();

        //hacemos hover y focus sobre las ciudades añadidas
        await page.locator('button.widget-container').hover();
        await page.locator('button.widget-container').focus();

        //pulsamos en la ciudad añadida para que muestre los detalles esperamos que se muestren
        await page.locator('button.widget-container').click();
        await expect(page.locator('div.weather-details-container')).toBeVisible();

        //eliminamos la ciudad añadida, los detalles se mantienen a la vista. Esperamos que se muestre "no cities added"
        await page.locator('#delete-btn-added').click();
        await expect(page.locator('div.weather-details-container')).toBeVisible(); 
        await expect(page.locator('div.no-added')).toBeVisible();

    })
});


test.describe('Testing not found', ()=>{
    test('Deberían mostrarse el fondo de "Not found" al introducir una búsqueda no válida', async({page})=>{
       
         //comprobamos que la barra de búsqueda está vacía
         await expect(page.locator('input.input-container-sb')).toBeEmpty();

         //introducimos un parámetro y pulsamos el botón de buscar
         await page.locator('input.input-container-sb').fill('sfafafawfawf');
         await page.locator('button.search-btn').click();
 
         //se espera que aparezcan el fondo de not found
         await expect(page.locator('div.not-found')).toBeVisible();
    })
});