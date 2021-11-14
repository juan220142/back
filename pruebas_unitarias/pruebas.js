const request= require("supertest");
const app= require("./src/index");
// testeo prueba fibonnacci
describe("GET fibonacci", ()=> {
    it(" numero valido", (done) => {
        var numero = 5;
        request(app)
            .get("/api/fibo")
            .get("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "good", arra: [1, 1, 2, 3, 5]})
            .expect(200, done)

    })
    it("numero negativo", (done) => {
             var numero = -1;
             request(app)
                 .get("/api/fibo")
                 .get("accept", "application/json")
                 .set("numero", numero)
                 .expect("Content-Type", /json/)
                 .expect({status: "wrong", data: "no se puede realizar el proceso"})
                 .expect(404, done)


    })
    it("dato no numerico", (done) => {
        var numero = "j";
        request(app)
            .get("/api/fibo")
            .get("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso"})
            .expect(404, done)


    })


}).timeout(20000)
describe("GET factorial",()=>
    {
    it("json 200 fact caso1",(done )=> {

        var dato = 5;
        request(app)
            .get("/api/fact")
            .get("accept", "application/json")
            .set("dato", dato)
            .expect("Content-Type", /json/)
            .expect({status: "good", data: 120})
            .expect(200, done)
    })

        it("dato negativo",(done)=>{
                var dato=-1
                request(app)
                    .get('/api/fact')
                    .set("Accept", "application/json")
                    .set("dato", dato)
                    .expect("Content-Type", /json/)
                    .expect({status: "wrong", data: "no se puede realizar el proceso "})
                    .expect(404, done);
            })
        it("dato no numerico",(done)=>{
            var dato= "j"
            request(app)
                .get('/api/fact')
                .set("Accept", "application/json")
                .set("dato", dato)
                .expect("Content-Type", /json/)
                .expect({status: "wrong", data: "no se puede realizar el proceso "})
                .expect(404, done);
        })





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
    it("base y altura correctas ",(done )=>{

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
    it("datos negativos ",(done )=>{

            var base = -5;
            var altura = -3;
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
    it("datos no numericos ",(done )=>{

            var base = "j";
            var altura = "j";
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
}).timeout(20000)
// prueba circulo
describe("GET circ",()=>
{
    it("dato correcto ",(done )=>{

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
    it("dato negativo ",(done )=>{

            var radio = -3;
            request(app)
                .get("/api/circ")
                .get("accept","aplications/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
    it("dato no numerico ",(done )=>{

            var radio = "j";
            request(app)
                .get("/api/circ")
                .get("accept","aplications/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
}).timeout(20000)
// prueba triangulo
describe("GET triangulo",()=>
{
    it("datos correctos ",(done )=>{

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
                .expect({status:"good",Area:7.806247497997997,Perimetro:13})
                .expect(200,done)




        }
    )
    it("datos negativos ",(done )=>{

            var base = -5;
            var lado_i = -4;
            var lado_d = -4;
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
    it("datos no numericos ",(done )=>{

            var base = "j";
            var lado_i = "f";
            var lado_d = "c";
            request(app)
                .get("/api/rect")
                .get("accept","aplications/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso"})
                .expect(404,done)




        }
    )
}).timeout(20000)









