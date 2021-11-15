const request= require("supertest");
const app= require('../src/index');
// testeo prueba fibonnacci
describe("GET fibonacci", ()=> {


    it(" numero valido", (done) => {
        var numero = 5;
        request(app)
            .get("/api/fibo")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "good", arra:[1, 1, 2, 3, 5]})
            .expect(200, done)

    })
    it("numero negativo", (done) => {
             var numero = -1;
             request(app)
                 .get("/api/fibo")
                 .set("accept", "application/json")
                 .set("numero", numero)
                 .expect("Content-Type", /json/)
                 .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
                 .expect(404, done)


    })
    it("valor cero", (done) => {
        var numero = 0;
        request(app)
            .get("/api/fibo")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)


    })
    it("dato no numerico", (done) => {
        var numero = "j";
        request(app)
            .get("/api/fibo")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)


    })
    it("sin dato", (done) => {
        request(app)
            .get("/api/fibo")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)


    })

}).timeout(15000)
describe("GET factorial",()=>
    {
    it("fact caso1",(done )=> {

        var dato = 5;
        request(app)
            .get("/api/fact")
            .set("accept", "application/json")
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
                    .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
                    .expect(404, done);
            })
        it("dato no numerico",(done)=>{
            var dato= "j"
            request(app)
                .get('/api/fact')
                .set("Accept", "application/json")
                .set("dato", dato)
                .expect("Content-Type", /json/)
                .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404, done);
        })





    it("caso2 0",(done )=>{

            var dato = 0;
            request(app)
                .get("/api/fact")
                .set("accept","application/json")
                .set("dato",dato)
                .expect("Content-Type", /json/)
                .expect({status:"good",data:1})
                .expect(200,done)




        }
    )
        it("sin datos",(done)=>{

            request(app)
                .get('/api/fact')
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404, done);
        })

}).timeout(15000)
// prueba rectangulo
describe("GET rect",()=>
{
    it("base y altura correctas ",(done )=>{

            var base = 5;
            var altura = 3;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
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
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 1 ",(done )=>{

            var base = 0;
            var altura = 3;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 2 ",(done )=>{

            var base = 3;
            var altura = 0;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("dato negativo -dato correcto 2 ",(done )=>{

            var base = 5;
            var altura = -3;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("dato negativo -dato correcto 2 ",(done )=>{

            var base = -5;
            var altura = 3;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("dato correcto-dato no numerico ",(done )=>{

            var base = "j";
            var altura = 3;
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("dato correcto-dato no numerico ",(done )=>{

            var base = 4;
            var altura = "j";
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )


    it("sin dato ",(done )=>{


            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("datos no numericos ",(done )=>{

            var base = "j";
            var altura = "j";
            request(app)
                .get("/api/rect")
                .set("accept","application/json")
                .set("base",base)
                .set("altura",altura)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
}).timeout(15000)
// prueba circulo
describe("GET circ",()=>
{
    it("dato correcto ",(done )=>{

            var radio = 3;
            request(app)
                .get("/api/circ")
                .set("accept","application/json")
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
                .set("accept","application/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 ",(done )=>{

            var radio = 0;
            request(app)
                .get("/api/circ")
                .set("accept","application/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it(" sin dato ",(done )=>{

            var radio = -3;
            request(app)
                .get("/api/circ")
                .set("accept","application/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("dato no numerico ",(done )=>{

            var radio = "j";
            request(app)
                .get("/api/circ")
                .set("accept","application/json")
                .set("radio",radio)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
}).timeout(15000)
// prueba triangulo
describe("GET triangulo",()=>
{
    it("datos correctos ",(done )=>{

            var base = 5;
            var lado_i = 3;
            var lado_d = 4;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"good",Area:6, Perimetro:12})
                .expect(200,done)




        }
    )
    it("datos negativos ",(done )=>{

            var base = -5;
            var lado_i = -4;
            var lado_d = -4;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 1 ",(done )=>{

            var base = 0;
            var lado_i = 4;
            var lado_d = 4;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 2 ",(done )=>{

            var base = 5;
            var lado_i = 0;
            var lado_d = 4;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("valor 0 3 ",(done )=>{

            var base = 5;
            var lado_i = 4;
            var lado_d = 0;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("datos negativos - dato postivo ",(done )=> {

        var base = 5;
        var lado_i = -4;
        var lado_d = -4;
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
    it("datos negativos - dato postivo2 ",(done )=> {

        var base = -5;
        var lado_i = 4;
        var lado_d = -4;
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
    it("datos negativos - dato postivo3 ",(done )=> {

        var base = -5;
        var lado_i = -4;
        var lado_d = 4;
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
    it("datos correctos- dato no numerico ",(done )=> {

        var base = "j";
        var lado_i = 4;
        var lado_d = 4;
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
    it("datos correctos- dato no numerico2 ",(done )=> {

        var base = 5;
        var lado_i = "j";
        var lado_d = 4;
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
    it("datos correctos- dato no numerico3 ",(done )=> {

        var base = 5;
        var lado_i = 4;
        var lado_d = "j";
        request(app)
            .get("/api/trian")
            .set("accept", "application/json")
            .set("base", base)
            .set("lado_derecho", lado_d)
            .set("lado_izquierdo", lado_i)
            .expect("Content-Type", /json/)
            .expect({status: "wrong", data: "no se puede realizar el proceso,verifica los datos ingresados"})
            .expect(404, done)
    })
        it("sin dato ",(done )=>{

            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("datos no numericos ",(done )=>{

            var base = "j";
            var lado_i = "f";
            var lado_d = "c";
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )
    it("datos no cumplen teorema ",(done )=>{

            var base = 20;
            var lado_i = 3;
            var lado_d = 2;
            request(app)
                .get("/api/trian")
                .set("accept","application/json")
                .set("base",base)
                .set("lado_derecho",lado_d)
                .set("lado_izquierdo",lado_i)
                .expect("Content-Type", /json/)
                .expect({status:"wrong",data:"no se puede realizar el proceso,verifica los datos ingresados"})
                .expect(404,done)




        }
    )

}).timeout(15000)









