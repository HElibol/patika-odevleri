//Senkronize çalışmıyor düzeltileme gerekli

const fs = require("fs");

let data = '{"name": "Employee 1 Name", "salary": 2000}'
let data2 = '{"name": "Employee 2 Name", "salary": 4000}'

function CreatRUD(newData,callback){

        fs.writeFile("employess.json", newData, "utf8", (err) => {
            if (err) console.log(err)
            console.log("---------1---------")
            console.log("Dosya Oluşturuldu")
        });  
        callback();  
}

function CReadUD(){
            fs.readFile("employess.json", "utf8", (err,data) => {
            if(err) console.log(err);
            console.log("---------2---------")
            console.log("---VERİLER---");
            console.log(data);
        });
}

function CRUpdateD(newData2){
            fs.appendFile('employess.json', newData2, 'utf8', (err) => {
            if (err) console.log(err);
            console.log("---------3---------")
            console.log("YENİ VERİ EKLENDİ")
        });
}


async function CRUDelet(){
            fs.unlink('employess.json', (err) => {
            if (err) console.log(err);
            console.log("---------4---------")
            console.log("DOSYA SİLİNDİ")
        });
}



