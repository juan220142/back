const Metodos={}

Metodos.getFact = (req,res) =>{
    var numero=req.headers['dato']
    var aux=numero
    if(numero!= undefined && numero>0) {
        var j = numero - 1
        while(j>0){
            aux=aux*j
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
        res.status(404).json({status:"wrong",data:"no es posible hacer esto"})
    }
}

Metodos.getCirc = (req,res)=>{
    var radio=req.headers['radio']
    var Area= Math.PI*(Math.pow(radio,2))
    var Perimetro= 2*Math.PI*radio
    if(Area!= undefined && Perimetro!= undefined){
        res.status(200).json({status:"good",Area:Area,Perimetro:Perimetro})
    }else{
        res.status(404).json({status:"wrong",data:"datos erroneos"})
    }

}
Metodos.getTrian = (req,res)=>{
    var altura=req.headers['altura']
    var lado_i=req.headers['lado_izquierdo']
    var lado_d=req.headers['lado_derecho']
    var base=req.headers['base']
    var Area= (base*altura)/2
    var Perimetro= parseInt(base)+parseInt(lado_i)+parseInt(lado_d)
    if(Area!= undefined && Perimetro!= undefined   ) {
        res.status(200).json({status: "good", Area: Area, Perimetro: Perimetro})
    }
    else{
        res.status(404).json({status:"good",data:"error en los datos"})
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
        res.status(404).json({status:"good",data:"error en los datos"})
    }

}
module.exports=Metodos
