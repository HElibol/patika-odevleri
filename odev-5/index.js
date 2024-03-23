const http = require("http");

const port = 3000;

const server = http.createServer((req,res) => {

    const url = req.url

    if(url === "/hakkimda"){

        res.write("<h2> HAKKIMDA SAYFASINA HOSGELDINIZ </h2>");

    }
    else if (url === "/iletisim"){

        res.write("<h2> ILETISIM SAYFASINA HOSGELDINIZ </h2>");

    }
    else if (url === "/"){

        res.write("<h2> ANASAYFA </h2>");

    }
    else{

        res.write("<h2> 404 HATASİ</h2>");

    }

    res.end()

});

server.listen(3000, ()=>{
    console.log(`Server running at ${port}`);
})