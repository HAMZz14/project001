function subtraction(h,m){
    var hasil = h-m;
    document.write(h, " - ", m, " = ", hasil, "<br><br>");
}
var h = 3;
var m = 1;
subtraction(h,m);

function multiplication(){
    var d = 5;
    var y = 4;
    var total = d*y;
    console.log(d, " * ", y, " = ", total);
}

multiplication();

function sentence(kata){
    for(let i in kata){
        document.write("Iterasi ke-", i, " merupakan huruf ", kata[i], "<br>");
    }
}

var kata = "InformaticsEngineering";
sentence(kata);