var displayed  = new Array(110);
var correctCounter  = 0;
var correctNames  = new Array(110);
var errorNames  = new Array(110);
var wrongCounter  = 0;

function getInputs() {
    var  ar1 = ["AE-United Arab Emirates",
"AF-Afghanistan",                        
"AQ-Antarctica",
"AR-Argentina",        
"AT-Austria",
"AU-Australia",
"AO-Angola",
"BD-Bangladesh",
"BE-Belgium",
"BG-Bulgaria",
"BH-Bahrain",
"BM-Bermuda",        
"BR-Brazil",
"BT-Bhutan",
"CA-Canada",        
"CG-Congo",
"CH-Switzerland",
"CN-China",
"CO-Colombia",
"CU-Cuba",
"CY-Cyprus",
"DE-Germany",
"DK-Denmark",
"DZ-Algeria",
"EG-Egypt",        
"ES-Spain",
"ET-Ethiopia",
"EU-Europe",
"FI-Finland",
"FR-France",        
"GBENG-England",    
"GBSCT-Scotland",        
"GB-United Kingdom",
"GE-Georgia",
"GH-Ghana",        
"GL-Greenland",
"GM-Gambia",        
"GR-Greece",                        
"HK-Hong Kong",                
"HR-Croatia",        
"HU-Hungary",
"ID-Indonesia",
"IE-Ireland",
"IL-Israel",        
"IN-India",        
"IQ-Iraq",
"IR-Iran",
"IRE-Ireland",
"IS-Iceland",
"IT-Italy",        
"JM-Jamaica",
"JO-Jordan",
"JP-Japan",
"KE-Kenya",        
"KH-Cambodia",
"KP-North Korea",
"KR-South Korea",
"KW-Kuwait",
"KZ-Kazakhstan",        
"LB-Lebanon",        
"LK-Sri Lanka",
"LR-Liberia",        
"LU-Luxembourg",        
"LY-Libya",
"MA-Morocco",
"MC-Monaco",        
"MG-Madagascar",        
"ML-Mali",
"MM-Myanmar",
"MN-Mongolia",
"MO-Macao",        
"MU-Mauritius",
"MV-Maldives",        
"MX-Mexico",
"MY-Malaysia",        
"NA-Namibia",                
"NG-Nigeria",        
"NL-Netherlands",
"NO-Norway",
"NP-Nepal",
"NZ-New Zealand",
"OM-Oman",
"PA-Panama",
"PE-Peru",        
"PH-Philippines",
"PK-Pakistan",
"PL-Poland",                
"PT-Portugal",        
"QA-Qatar",        
"RO-Romania",
"RS-Serbia",
"RU-Russia",        
"SA-Saudi Arabia",        
"SD-Sudan",
"SE-Sweden",
"SG-Singapore",        
"SN-Senegal",
"SO-Somalia",        
"SS-South Sudan",
"SY-Syria",
"SZ-Switzerland",
"TH-Thailand",        
"TO-Tonga",
"TR-Turkey",        
"TW-Taiwan",        
"UA-Ukraine",
"UG-Uganda",        
"US-United States of America",
"VE-Venezuela",
"VN-Vietnam",        
"ZA-South Africa",
"ZM-Zambia",
"ZW-Zimbabwe"];

var randomNumber = Math.floor(Math.random() * 113);
var country = ar1[randomNumber];
countryParams = country.split("-");

    while(displayed.includes(countryParams[0])){
        var randomNumber = Math.floor(Math.random() * 113);
        var country = ar1[randomNumber];
        countryParams = country.split("-");            
    }

    var idValue1 = document.getElementById("page").innerHTML;     
    displayed[Number(idValue1)] = countryParams[0];
    var file = "images/pngs/" + countryParams[0] + ".png";
    var newFlag = countryParams[0]+".png";
    document.getElementById("demo").innerHTML = countryParams[1];

    if(document.getElementById("flagHolder").src !== undefined){
        document.getElementById("flagHolder").src = file.toLowerCase();
    } else {
        var lastSrc = document.getElementById("flagHolder").src;
        var lastSrcParams = lastSrc.split("/");
        var currentFlag = lastSrcParams[lastSrcParams.length-1] 
        document.getElementById("flagHolder").src = lastSrc.replace(currentFlag , newFlag.toLowerCase());
    }         

    var randomOption = Math.floor(Math.random() * 4) + 1;
    document.getElementById("op"+randomOption).innerHTML = countryParams[1];

        for(var i=1; i<5; i++)
        {
            if(i === randomOption) continue;
            var optionCountry = ar1[Math.floor(Math.random() * 113)];
            var optCountryParams = optionCountry.split("-");
            if(countryParams[1] === optCountryParams[1]) {
            i--;
            continue;
            }
            document.getElementById("op"+i).innerHTML = optCountryParams[1];       
        }
    }

  
    
function next() {
    document.getElementById("result").innerHTML = null;
    
    for(var i=1;i<5;i++) {
        document.getElementById("rop"+i).checked = false;       
    }

    var idValue1 = document.getElementById("page").innerHTML;
    var check = Number(idValue1) + 1;  
    if(check <= 110) {
     document.getElementById("page").innerHTML = check; 
     getInputs();
    }   
}  

function prev() {

     document.getElementById("result").value = null;
     document.getElementById("demo").innerHTML = null;   

     var idValue1 = document.getElementById("page").innerHTML;
     var check = Number(idValue1) - 1;
     if(check > 0) {
      document.getElementById("page").innerHTML = check; 
      getInputs();
    } 
}
    
    function myFunction() {
        document.getElementById("demo").hidden = !document.getElementById("showdemo").checked;
        var txt = "";
        var correctId = document.getElementById("demo").innerHTML;        
        var optionId = document.querySelector('input[name="country"]:checked').id;
        optionId = optionId.replace("r","");
        var resultSum = document.getElementById(optionId).innerHTML;
        
        if (correctId === resultSum) {
            txt = "Good Job Bittu!!!";
            document.getElementById("applause").play();
            correctNames[correctCounter] = correctId;
            correctCounter++;
            document.getElementById("correctSummary").innerHTML = "Correct : " + correctCounter;            
        } else {
            txt = "Try Again";
            audioFile = "audio\tryagain.mp3";
            document.getElementById("tryagain").play();
            wrongCounter++;
            errorNames[wrongCounter] = correctId;
            document.getElementById("errorSummary").innerHTML = "Wrong : " + wrongCounter;
        } 
        document.getElementById("result").innerHTML = txt;         
        next();
    }

    function correctResults() {
        var cCountries = "";
        correctNames.forEach(element => {
            if(element !== undefined){
                cCountries = cCountries + "\n" + element;
            }
        });
        alert(cCountries);
    }

    function errorResults() {
        var eCountries = "";
        errorNames.forEach(element => {
            if(element !== undefined){
                eCountries = eCountries + "\n" + element;
            }
        });
        alert(eCountries);
    }
    