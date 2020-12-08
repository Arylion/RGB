//Variables Duh//
var gameData = {
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

var gameDataUpgrades = {
  //Red//
  RedB1: RedB1 = 0,
  RedB2: RedB2 = 0,
  RedB3: RedB3 = 0,

  //Green//
  GreenB1: GreenB1 = 0,
  GreenB2: GreenB2 = 0,
  GreenB3: GreenB3 = 0,

  //Blue//
  BlueB1: BlueB1 = 0,
  BlueB2: BlueB2 = 0,
  BlueB3: BlueB3 = 0,
}

var gameDataMixingSupplies = {
  //Main Colors//
  MixRed: MixRed = 0,
  MixGreen: MixGreen = 0,
  MixBlue: MixBlue = 0,
}

//Navigation Function//

function OpenTab(evt, TabName) {
    var i, TabContent, TabLinks;
    TabContent = document.getElementsByClassName("TabContent");
    for (i = 0; i < TabContent.length; i++) {
      TabContent[i].style.display = "none";
    }
    TabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < TabLinks.length; i++) {
      TabLinks[i].className = TabLinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//Color Tabs Show//

function ColorTabsShow(){
  if (Red >= 1) {
    $("#GreenTh").show();
  }
  if (Green >= 2) {
    $("#BlueTh").show();
  }
}

//Red Upgrade Buttons//
//Numero Uno//
$(document).ready(function(){
  $("#1Red").click(function(){
      RedGen = RedGen + 0.01;
      $("#1Red").hide();
      $("#2Red").show();
  })
})
//Numero Dos//
$(document).ready(function(){
  $("#2Red").click(function(){
    if (Red >= 0.10) {
      Red = Red - 0.10;
      RedGen = RedGen + 0.01;
      RedB1 = RedB1 + 1;
    }
  })
})
//Numero Tres//
$(document).ready(function(){
  $("#3Red").click(function(){
    if (Red >= 1) {
      Red = Red - 1;
      RedGen = RedGen + 0.1;
      RedB2 = RedB2 + 1;
    }
  })
})
//Numero Cuatro//
$(document).ready(function(){
  $("#4Red").click(function(){
    if (Red >= 100) {
      Red = Red - 100;
      MixRed = MixRed + 100;
      $("#4Red").hide();
    }
  })
})

//Red Upgrades Hide Show//
function RedUpgradesHideShow() {
  if (RedB1 >= 9) {
    $("#2Red").hide();
    $("#3Red").show();
    $("#4Red").show();
    RedB1 = RedB1 - 9;
  }
  if (RedB2 >= 9) {
    $("#3Red").hide();
    RedB2 = RedB2 - 9;
  }
}

//Green Upgrade Buttons//
//Numero Uno//
$(document).ready(function(){
  $("#1Green").click(function(){
      GreenGen = GreenGen + 0.01;
      $("#1Green").hide();
      $("#2Green").show();
    }
  )
})
//Numero Dos//
$(document).ready(function(){
  $("#2Green").click(function(){
    if (Green >= 0.10) {
      Green = Green - 0.10;
      GreenGen = GreenGen + 0.01;
      GreenB1 = GreenB1 + 1;
    }
  })
})
//Numero Tres//
$(document).ready(function(){
  $("#3Green").click(function(){
    if (Green >= 1) {
      Green = Green - 1;
      GreenGen = GreenGen + 0.1;
      GreenB2 = GreenB2 + 1;
    }
  })
})
//Numero Cuatro//
$(document).ready(function(){
  $("#4Green").click(function(){
    if (Green >= 100) {
      Green = Green - 100;
      MixGreen = MixGreen + 100;
      $("#4Green").hide();
    }
  })
})


//Green Upgrade Hide Show//
function GreenUpgradesHideShow() {
  if (GreenB1 >= 9) {
    $("#2Green").hide();
    $("#3Green").show();
    $("#4Green").show();
    GreenB1 = GreenB1 - 9;
  }
  if (GreenB2 >= 9) {
    $("#3Green").hide();
    GreenB2 = GreenB2 - 9;
  }
}

//Blue Upgrade Buttons//
//Numero Uno//
$(document).ready(function(){
  $("#1Blue").click(function(){
      BlueGen = BlueGen + 0.01;
      $("#1Blue").hide();
      $("#2Blue").show();
    }
  )
})
//Numero Dos//
$(document).ready(function(){
  $("#2Blue").click(function(){
    if (Blue >= 0.10) {
      Blue = Blue - 0.10;
      BlueGen = BlueGen + 0.01;
      BlueB1 = BlueB1 + 1;
    }
  })
})
//Numero Tres//
$(document).ready(function(){
  $("#3Blue").click(function(){
    if (Blue >= 1) {
      Blue = Blue - 1;
      BlueGen = BlueGen + 0.1;
      BlueB2 = BlueB2 + 1;
    }
  })
})
//Numero Cuatro//
$(document).ready(function(){
  $("#4Blue").click(function(){
    if (Blue >= 100) {
      Blue = Blue - 100;
      MixBlue = MixBlue + 100;
      $("#4Blue").hide();
    }
  })
})

//Blue Upgrade Hide Show//
function BlueUpgradesHideShow() {
  if (BlueB1 >= 9) {
    $("#2Blue").hide();
    $("#3Blue").show();
    $("#4Blue").show();
    BlueB1 = BlueB1 - 9;
  }
  if (BlueB2 >= 9) {
    $("#3Blue").hide();
    BlueB2 = BlueB2 - 9;
  }
}


//Function ToFixed. Need them Decimals//

function ToFixed() {
  RedSpan = Red.toFixed(2);
  GreenSpan = Green.toFixed(2);
  BlueSpan = Blue.toFixed(2);
  document.getElementById("RedSpan").innerHTML = RedSpan;
  document.getElementById("GreenSpan").innerHTML = GreenSpan;
  document.getElementById("BlueSpan").innerHTML = BlueSpan;
}

//Functions For Time Set//

function MainGen(){
  Red = Red + RedGen;
  Green = Green + GreenGen;
  Blue = Blue + BlueGen;
  document.getElementById("Red").innerHTML = Red;
  document.getElementById("Green").innerHTML = Green;
  document.getElementById("Blue").innerHTML = Blue;
}

function Display(){
RedSpan = Red;
GreenSpan = Green;
BlueSpan = Blue;
document.getElementById("RedSpan").innerHTML = RedSpan;
document.getElementById("GreenSpan").innerHTML = GreenSpan;
document.getElementById("BlueSpan").innerHTML = BlueSpan;
}

function DisplayMix(){
  MixRedSpan = MixRed;
  MixGreenSpan = MixGreen;
  MixBlueSpan = MixBlue;
  document.getElementById("MixRedSpan").innerHTML = MixRedSpan;
  document.getElementById("MixGreenSpan").innerHTML = MixGreenSpan;
  document.getElementById("MixBlueSpan").innerHTML = MixBlueSpan;
}

//Time Set//

window.setInterval(function(){
  MainGen();
}, 100);

window.setInterval(function(){
  Display();
  DisplayMix();
  ColorTabsShow();
  ToFixed();
  RedUpgradesHideShow();
  GreenUpgradesHideShow();
  BlueUpgradesHideShow();
}, 10);