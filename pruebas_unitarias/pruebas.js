const request= require("supertest");
const app= require("./src/index");
// testeo prueba fibonnacci
describe("GET fibonacci", ()=>{
    it ("json 200 numero valido", (done )=>{
        var numero = 5;
        request(app)
            .get("/api/fibo")
            .get("accept","aplications/json")
            .set("numero",numero)
            .expect("Content-Type", /json/)
            .expect({status:"good",arra:[1,1,2,3,5]})
            .expect(200,done)
    } )
    it ("numero no valido",(done)=>{

    })

}).timeout(20000)
// prueba manejo factorial
describe("GET factorial",()=>
{
    it("json 200 fact caso1",(done )=>{

       var dato = 5;
       request(app)
           .get("/api/fact")
           .get("accept","aplications/json")
           .set("dato",dato)
           .expect("Content-Type", /json/)
           .expect({status:"good",data:120})
           .expect(200,done)




    }
    )
}).timeout(20000)
// prueba factoria #2
describe("GET factorial",()=>
{
    it("json 200 fact caso2",(done )=>{

            var dato = 0;
            request(app)
                .get("/api/fact")
                .get("accept","aplications/json")
                .set("dato",dato)
                .expect("Content-Type", /json/)
                .expect({status:"good",data:1})
                .expect(200,done)




        }
    )
}).timeout(20000)
// prueba rectangulo
describe("GET rect",()=>
{
    it("json 200 rect ",(done )=>{

            var base = 5;
            var altura = 3;
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"good",Area:15,Perimetro:16})
                .expect(200,done)




        }
    )
}).timeout(20000)
// prueba circulo
describe("GET circ",()=>
{
    it("json 200 circ ",(done )=>{

            var radio = 3;
            request(app)
                .get("/api/circ")
                .get("accept","aplications/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"good",Area:28.274333882308138,Perimetro:18.84955592153876})
                .expect(200,done)




        }
    )
}).timeout(20000)
// prueba triangulo
describe("GET triangulo",()=>
{
    it("json 200 triangulo ",(done )=>{

            var base = 5;

            var lado_i = 4;
            var lado_d = 4;
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)

                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"good",Area:7.5,Perimetro:13})
                .expect(200,done)




        }
    )
}).timeout(20000)









