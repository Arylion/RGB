//Variables Duh//
var gameData = {
    //Money//
    Money: Money = 1000,
    //Knowledge//
    Knowledge: Knowledge = 1000,
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

var gameDataUpgrade = {
  //Red//
  Redup1: Redup1 = 0,
  Redup2: Redup2 = 0,
  Redup3: Redup3 = 0,
  //Green//
  Greenup1: Greenup1 = 0,
  Greenup2: Greenup2 = 0,
  Greenup3: Greenup3 = 0,
  //Blue//
  Blueup1: Blueup1 = 0,
  Blueup2: Blueup2 = 0,
  Blueup3: Blueup3 = 0,
}

//Navigation Function//

$(document).ready(function(){
  $("#StoreTab").click(function(){
    $("#Conjure").hide();
    $("#Lab").hide();
    $("#Stats").hide();
    $("#Store").show();
  })
})
$(document).ready(function(){
  $("#ConjureTab").click(function(){
    $("#Store").hide();
    $("#Lab").hide();
    $("#Stats").hide();
    $("#Conjure").show();
  })
})
$(document).ready(function(){
  $("#LabTab").click(function(){
    $("#Store").hide();
    $("#Conjure").hide();
    $("#Stats").hide();
    $("#Lab").show();
  })
})
$(document).ready(function(){
  $("#StatsTab").click(function(){
    $("#Store").hide();
    $("#Conjure").hide();
    $("#Lab").hide();
    $("#Stats").show();
  })
})

//StoreTab//

//Conjuring Store Buttons//

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
      $(".RedConjureTable").show();
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
      $(".GreenConjureTable").show();
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
      $(".BlueConjureTable").show();
    }
  })
})

//Euipment Store Tab//

function EquipmentTabShow() {
  if (Redup1 || Greenup1 || Blueup1 >= 5) {
    $("#EquipmentStoreTab").show();
  }
}

$(document).ready(function(){
  $("#TraderBag1").click(function(){
    if (Money >= 25) {
      Money = Money - 25;
      $("#TraderBag1").remove();
      $("#RedSellingButton2").show();
      $("#GreenSellingButton2").show();
      $("#BlueSellingButton2").show();
    }
  })
})

$(document).ready(function(){
  $("#LabEquipment").click(function(){
    if (Money >= 100) {
      Money = Money - 100;
      $("#LabEquipment").remove();
      $("#LabTab").show();
    }
  })
})


//Conjuring Tab//
//Selling Point//

$(document).ready(function(){
  $("#RedSellingButton1").click(function(){
    if (Red >= 0.095) {
      Red = Red - 0.095;
      Money = Money + 1;
    }
  })
})
$(document).ready(function(){
  $("#RedSellingButton2").click(function(){
    if (Red >= 1) {
      Red = Red - 1;
      Money = Money + 10;
    }
  })
})
$(document).ready(function(){
  $("#GreenSellingButton1").click(function(){
    if (Green >= 0.095) {
      Green = Green - 0.095;
      Money = Money + 1;
    }
  })
})
$(document).ready(function(){
  $("#GreenSellingButton2").click(function(){
    if (Green >= 1) {
      Green = Green - 1;
      Money = Money + 10;
    }
  })
})
$(document).ready(function(){
  $("#BlueSellingButton1").click(function(){
    if (Blue >= 0.095) {
      Blue = Blue - 0.095;
      Money = Money + 1;
    }
  })
})
$(document).ready(function(){
  $("#BlueSellingButton2").click(function(){
    if (Blue >= 1) {
      Blue = Blue - 1;
      Money = Money + 10;
    }
  })
})

// Study//

$(document).ready(function(){
  $("#RedStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      RedGen = RedGen + 0.001;
      Redup1 = Redup1 + 1;
    }
  })
})

$(document).ready(function(){
  $("#GreenStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      GreenGen = GreenGen + 0.001;
      Greenup1 = Greenup1 + 1;
    }
  })
})

$(document).ready(function(){
  $("#BlueStudy1").click(function(){
    if (Knowledge >= 10) {
      Knowledge = Knowledge - 10;
      BlueGen = BlueGen + 0.001;
      Blueup1 = Blueup1 + 1;
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

function DisplayUp(){
  Redup1 = Redup1;
  Redup2 = Redup2;
  Redup3 = Redup3;
  Greenup1 = Greenup1;
  Greenup2 = Greenup2;
  Greenup3 = Greenup3;
  Blueup1 = Blueup1;
  Blueup2 = Blueup2;
  Blueup3 = Blueup3;
  document.getElementById("Redup1").innerHTML = Redup1;
  document.getElementById("Greenup1").innerHTML = Greenup1;
  document.getElementById("Blueup1").innerHTML = Blueup1;
}

//Time Set//

window.setInterval(function(){
  Display();
  DisplayUp();
  ToFixed();
  EquipmentTabShow();
}, 10);

window.setInterval(function(){
  MainGen();
}, 100);