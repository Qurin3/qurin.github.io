export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '34343887ecmsh4c394cb46e79f05p16e1fcjsn49bf579e00b5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'}

        const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
            headers: headers,
        });

        const result = await response.json();

        return result;
	}
