const Metodos={}
const BigInteger = require('biginteger').BigInteger;
Metodos.getFact = (req,res) =>{
    var numero=req.headers['dato']
   var  aux = (numero)
    if(numero!= undefined && numero>0) {
        var j = numero - 1
        while(j>0){
            aux=(aux*j)
            j=j-1
        }
        res.status(200).json({status:"good",data:aux})}
        else if(numero == 0){
            aux=1
        res.status(200).json({status:"good",data:aux})}

    else{
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})
    }
}


Metodos.getFib = (req,res)=>{
    var iter=req.headers["numero"]
    var x = 0;
    var y = 1;
    var result = 0;
    var counter=0;
    var array=[]
    while (counter<iter){
     array[counter]= y;
        result=x+y;
        x = y;
        y = result;
        counter++;

    }
    if(result!= undefined){
        res.status(200).json({status:"good",arra:array})

    }else {
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})
    }
}

Metodos.getCirc = (req,res)=>{
    var radio=req.headers['radio']
    var Area= Math.PI*(Math.pow(radio,2))
    var Perimetro= 2*Math.PI*radio
    if(Area!= undefined && Perimetro!= undefined){
        res.status(200).json({status:"good",Area:Area,Perimetro:Perimetro})
    }else{
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})
    }

}
Metodos.getTrian = (req,res)=>{
    var lado_i=req.headers['lado_izquierdo']
    var lado_d=req.headers['lado_derecho']
    var base=req.headers['base']
    base=parseInt(base)
    lado_d = parseInt(lado_d)
    lado_i = parseInt(lado_i)

    var Area= Math.sqrt((((lado_d+lado_i+base)/2)*(((lado_d+lado_i+base)/2)-lado_d)*(((lado_d+lado_i+base)/2)-lado_i)*(((lado_d+lado_i+base)/2)-base)))
    var Perimetro= base+lado_i+lado_d
    if(Area!= undefined && Perimetro!= undefined && lado_i+lado_d > base ) {
        res.status(200).json({status: "good", Area: Area, Perimetro: Perimetro})
    }
    else if((lado_i+lado_d) <base){
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})
    }
    else{
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})

    }



}
Metodos.getRect = (req,res)=>{
    var altura = req.headers['altura']
    var base = req.headers['base']
    var Perimetro= 2*altura+2*base
    var Area = base*altura
    if(Area!= undefined && Perimetro!= undefined){
        res.status(200).json({status:"good",Area:Area,Perimetro:Perimetro})
    }else{
        res.status(404).json({status:"wrong",data:"no se puede realizar el proceso"})
    }

}
module.exports=Metodos
