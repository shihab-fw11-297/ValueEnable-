// we will use supertest to test HTTP requests/responses
const request = require("supertest");

// we also need our app for the correct routes!
const app = require("../server/index");


    //test for Customer Registeration Route
  describe("POST/Customer ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).post("/api/users/register-user");
      expect(response.statusCode).toBe(200);
    });
  });


  //test for Admin Registration Route
  describe("POST/admin ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).post("/api/users/register-admin");
      expect(response.statusCode).toBe(200);
    });
  });


//test for moderator Registration Route
describe("POST/moderator ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).post("/api/users/register-moderator");
      expect(response.statusCode).toBe(200);
    });
  });

  
  //test for user signin
  describe("POST/login ", () => {
    test("It should respond with status code 201", async () => {
      const response = await request(app).post("/api/users/login-user");
      expect(response.statusCode).toBe(201);
    });
  });

 //test for admin signin
  describe("POST/login ", () => {
    test("It should respond with status code 201", async () => {
      const response = await request(app).post("/api/users/login-admin");
      expect(response.statusCode).toBe(201);
    });
  });
  

   //test for user signin
   describe("POST/moderator ", () => {
    test("It should respond with status code 201", async () => {
      const response = await request(app).post("/api/users/login-moderator");
      expect(response.statusCode).toBe(201);
    });
  });
  

   //test for getting users details
   describe("GET/Profile ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).get("/api/users/profile");
      expect(response.statusCode).toBe(200);
    });
  });





