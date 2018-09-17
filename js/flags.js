function next() {
    document.getElementById("result").innerHTML = null;
    
    for(var i=1;i<5;i++)
    {
        document.getElementById("op"+i).checked = false;       
    }

    var idValue1 = document.getElementById("page").innerHTML;
    var check = Number(idValue1) + 1;  
    if(check <= 170) {
     document.getElementById("page").innerHTML = check; 
     getInputs();
    }   
}    

function getInputs() {
    
    var ar1 = ["AE-United Arab Emirates",
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

    var idValue1 = document.getElementById("page").innerHTML;

    var randomNumber = Math.floor(Math.random() * 113);
    var country = ar1[randomNumber];
    var countryParams = country.split("-");
    var file = "images/pngs/" + countryParams[0] + ".png";
    var lastSrc = document.getElementById("flagHolder").src;
    var lastSrcParams = lastSrc.split("/");
    var currentFlag = lastSrcParams[lastSrcParams.length-1] 
    var newFlag = countryParams[0]+".png";
    document.getElementById("demo").innerHTML = countryParams[1];
    document.getElementById("flagHolder").src = lastSrc.replace(currentFlag , newFlag);    

    var randomOption = Math.floor(Math.random() * 4) + 1;
    document.getElementById("op"+randomOption).innerHTML = countryParams[1];

        for(var i=1;i<5;i++)
        {
            if(i === randomOption) continue;
            var optionCountry = ar1[Math.floor(Math.random() * 113)];
            var optCountryParams = optionCountry.split("-");
            document.getElementById("op"+i).innerHTML = optCountryParams[1];       
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
        var optionId = document.querySelector('input[name="country"]:checked').value;

        var resultSum = document.getElementById(optionId).innerHTML;
        if (correctId === resultSum) {
            txt = "Good Job Bittu!!!";
            document.getElementById("applause").play();
        } else {
            txt = "Try Again";
            audioFile = "audio\tryagain.mp3";
            document.getElementById("tryagain").play();
        } 
        document.getElementById("result").innerHTML = txt;         
    }

    