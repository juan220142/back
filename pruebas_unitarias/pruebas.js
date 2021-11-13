const request= require("supertest");
const app= require("./src/index");

describe("GET fibonacci", ()=>{
    it ("json 200 fibonacci pasos", (done )=>{
        var numero = 5
        request(app)
            .get("/api/fibo")
    } )
})

it("json 200 con pets mascotas contienen el string al principio de su nombre, raza o tipo", (done) => {
    var s ="Pan";
    request(app)
        .get("/api/pet/search")
        .set("Accept", "application/json")
        .set("condicion", s)
        .expect("Content-Type", /json/)
        .expect(200, done);
}).timeout(20000);