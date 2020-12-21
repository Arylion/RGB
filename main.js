//Variables Duh//
var gameData = {
    //Money//
    Money: Money = 30,
    //Knowledge//
    Knowledge: Knowledge = 0,
    //Main Colors//
    Red: Red = 0,
    Green: Green = 0,
    Blue: Blue = 0,
    //Secondary Colors//
    Cyan: Cyan = 0,
    Yellow: Yellow = 0,
    Magenta: Magenta = 0,
    //Tertiary Colors//
    Orange: Orange = 0,
    Chartreuse: Chartreuse = 0,
    SpringGreen: SpringGreen = 0,
    Azure: Azure = 0,
    Violet: Voilet = 0,
    Rose: Rose = 0,
}

var gameDataGen = {
    //Knowledge//
    KnowGen: KnowGen = 0,
    //Main Colors//
    RedGen: RedGen = 0,
    GreenGen: GreenGen = 0,
    BlueGen: BlueGen = 0,
    //Secondary Colors//
    CyanGen: CyanGen = 0,
    YellowGen: YellowGen = 0,
    MagentaGen: MagentaGen = 0,
    //Tertiary Colors//
    OrangeGen: OrangeGen = 0,
    ChartreuseGen: ChartreuseGen = 0,
    SpringGreenGen: SpringGreenGen = 0,
    AzureGen: AzureGen = 0,
    VioletGen: VoiletGen = 0,
    RoseGen: RoseGen = 0,
}

//Navigation Function//

$(document).ready(function(){
  $("#StoreTab").click(function(){
    $("#Conjure").hide();
    $("#Mixer").hide();
    $("#Stats").hide();
    $("#Store").show();
  })
})
$(document).ready(function(){
  $("#ConjureTab").click(function(){
    $("#Store").hide();
    $("#Mixer").hide();
    $("#Stats").hide();
    $("#Conjure").show();
  })
})
$(document).ready(function(){
  $("#MixerTab").click(function(){
    $("#Store").hide();
    $("#Conjure").hide();
    $("#Stats").hide();
    $("#Mixer").show();
  })
})
$(document).ready(function(){
  $("#StatsTab").click(function(){
    $("#Store").hide();
    $("#Conjure").hide();
    $("#Mixer").hide();
    $("#Stats").show();
  })
})

//StoreTab//

//StoreNav//

$(document).ready(function(){
  $("#ConjuringStoreTab").click(function(){
    $("#EquipmentStore").hide();
    $("#ConjuringStore").show();
  })
})

$(document).ready(function(){
  $("#EquipmentStoreTab").click(function(){
    $("#ConjuringStore").hide();
    $("#EquipmentStore").show();
  })
})

//Conjuring Books Buttons//

$(document).ready(function(){
  $("#RedConjuringBook").click(function(){
    if (Money >= 10) {
      Money = Money - 10;
      RedGen = RedGen + 0.001;
      KnowGen = KnowGen + 0.05;
      $("#RedConjuringBook").remove();
      $("#ConjureTab").show();
      $("#TopRed").show();
      $("#TopColors").show();
      $("#RedTh").show();
      $("#RedConjuringTab").show();
    }
  })
})

$(document).ready(function(){
  $("#GreenConjuringBook").click(function(){
    if (Money >= 10) {
      Money = Money - 10;
      GreenGen = GreenGen + 0.001;
      KnowGen = KnowGen + 0.05;
      $("#GreenConjuringBook").remove();
      $("#ConjureTab").show();
      $("#TopGreen").show();
      $("#TopColors").show();
      $("#GreenTh").show();
      $("#GreenConjuringTab").show();
    }
  })
})

$(document).ready(function(){
  $("#BlueConjuringBook").click(function(){
    if (Money >= 10) {
      Money = Money - 10;
      BlueGen = BlueGen + 0.001;
      KnowGen = KnowGen + 0.05;
      $("#BlueConjuringBook").remove();
      $("#ConjureTab").show();
      $("#TopBlue").show();
      $("#TopColors").show();
      $("#BlueTh").show();
      $("#BlueConjuringTab").show();
    }
  })
})

//Conjuring Tab//

//Conjuring Nav//

$(document).ready(function(){
  $("#RedConjuringTab").click(function(){
    $("#GreenConjuring").hide();
    $("#BlueConjuring").hide();
    $("#RedConjuring").show();
  })
})

$(document).ready(function(){
  $("#GreenConjuringTab").click(function(){
    $("#RedConjuring").hide();
    $("#BlueConjuring").hide();
    $("#GreenConjuring").show();
  })
})

$(document).ready(function(){
  $("#BlueConjuringTab").click(function(){
    $("#RedConjuring").hide();
    $("#GreenConjuring").hide();
    $("#BlueConjuring").show();
  })
})

//Red Conjuring Tab//

//Red Selling Point//

$(document).ready(function(){
  $("#RedSellingButton1").click(function(){
    if (Red >= 0.095) {
      Red = Red - 0.095;
      Money = Money + 1;
    }
  })
})

//Red Study//

$(document).ready(function(){
  $("#RedStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      RedGen = RedGen + 0.001;
    }
  })
})

//Green Conjuring Tab//

//Green Selling Point//

$(document).ready(function(){
  $("#GreenSellingButton1").click(function(){
    if (Green >= 0.095) {
      Green = Green - 0.095;
      Money = Money + 1;
    }
  })
})

//Green Study//

$(document).ready(function(){
  $("#GreenStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      GreenGen = GreenGen + 0.001;
    }
  })
})

//Blue Conjuring Tab//

//Blue Selling Point//

$(document).ready(function(){
  $("#BlueSellingButton1").click(function(){
    if (Blue >= 0.095) {
      Blue = Blue - 0.095;
      Money = Money + 1;
    }
  })
})

//Blue Study//

$(document).ready(function(){
  $("#BlueStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      BlueGen = BlueGen + 0.001;
    }
  })
})

//Function ToFixed. Need them Decimals//

function ToFixed() {
  KnowSpan = Knowledge.toFixed(1);
  RedSpan = Red.toFixed(2);
  GreenSpan = Green.toFixed(2);
  BlueSpan = Blue.toFixed(2);
  document.getElementById("KnowSpan").innerHTML = KnowSpan;
  document.getElementById("RedSpan").innerHTML = RedSpan;
  document.getElementById("GreenSpan").innerHTML = GreenSpan;
  document.getElementById("BlueSpan").innerHTML = BlueSpan;
}

//Functions For Time Set//

function MainGen(){
  Red = Red + RedGen;
  Green = Green + GreenGen;
  Blue = Blue + BlueGen;
  Knowledge = Knowledge + KnowGen;
  document.getElementById("Red").innerHTML = Red;
  document.getElementById("Green").innerHTML = Green;
  document.getElementById("Blue").innerHTML = Blue;
  document.getElementById("Knowledge").innerHTML = Knowledge;
}

function Display(){
MoneySpan = Money;
KnowSpan = Knowledge;
RedSpan = Red;
GreenSpan = Green;
BlueSpan = Blue;
document.getElementById("MoneySpan").innerHTML = MoneySpan;
document.getElementById("KnowSpan").innerHTML = KnowSpan;
document.getElementById("RedSpan").innerHTML = RedSpan;
document.getElementById("GreenSpan").innerHTML = GreenSpan;
document.getElementById("BlueSpan").innerHTML = BlueSpan;
}

//Time Set//

window.setInterval(function(){
  MainGen();
}, 100);

window.setInterval(function(){
  Display();
  ToFixed();
}, 10);