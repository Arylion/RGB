//Variables Duh//
var gameData = {
    //Main Colors//
    Green: 0,
    Red: 0,
    Blue: 0,
    //Secondary Colors//
    Cyan: 0,
    Yellow: 0,
    Magenta: 0,
    //Tertiary Colors//
    Orange: 0,
    Chartreuse: 0,
    SpringGreen: 0,
    Azure: 0,
    Violet: 0,
    Rose: 0,
}

var gameDataGen = {
    //Main Colors//
    GreenGen: 0,
    RedGen: 0,
    BlueGen: 0,
    //Secondary Colors//
    CyanGen: 0,
    YellowGen: 0,
    MagentaGen: 0,
    //Tertiary Colors//
    OrangeGen: 0,
    ChartreuseGen: 0,
    SpringGreenGen: 0,
    AzureGen: 0,
    VioletGen: 0,
    RoseGen: 0,
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

//Red Upgrade Buttons//

