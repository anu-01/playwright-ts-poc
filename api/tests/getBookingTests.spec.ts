const { test, expect } = require('@playwright/test');
const baseUri = 'https://restful-booker.herokuapp.com';
var token

test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(baseUri + "/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

const bookingDetails = require('../testdata/booking-details.json');

test('should be able to create a booking providing the post body in a json file', async ({ request }) => {
    const response = await request.post(baseUri + "/booking", {
        data: bookingDetails
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});


test('should be get all the booking details', async ({ request }) => {
    const response = await request.get(baseUri + "/booking");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('should be get specific booking details', async ({ request }) => {
    const response = await request.get(baseUri +'/booking/1');
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    });

test('should be able to get subset of booking details using query parameters', async ({ request }) => {
    const response = await request.get(baseUri +'/booking', {
    params: {
    firstname: "Susan",
    lastname: "Jackson"
    },
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    });

test('should be able to update the booking details', async ({ request }) => {

// Create a Token which will be used in PUT request
    const response = await request.post(baseUri +'/auth', {
        data: {
        "username": "admin",
        "password": "password123"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
    console.log("New Token is: " + token);

 // PUT
    const updateRequest = await request.put(baseUri +'/booking/1', {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`,
        },
        data: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
        "checkin": "2023-06-01",
        "checkout": "2023-06-15"
        },
        "additionalneeds": "Breakfast"
        }
    });
    console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);
    const updatedResponseBody = await updateRequest.json()
    expect(updatedResponseBody).toHaveProperty("firstname", "Jim");
    expect(updatedResponseBody).toHaveProperty("lastname", "Brown");
    expect(updatedResponseBody).toHaveProperty("totalprice", 111);
    expect(updatedResponseBody).toHaveProperty("depositpaid", true);
});   
    
test('should be able to delete the booking details', async ({ request }) => {   
    // Create a Token which will be used in DELETE request

    const response = await request.post(baseUri +'/auth', {
        data: {
        "username": "admin",
        "password": "password123"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
    console.log("New Token is: " + token);

    // DELETE
    const deleteRequest = await request.delete(baseUri +'/booking/7', {
        headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`,
        }
    });
    expect(deleteRequest.status()).toEqual(201);
    expect(deleteRequest.statusText()).toBe('Created');
});