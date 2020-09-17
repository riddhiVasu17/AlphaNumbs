
//AlphaNumbs

// I am creating an Alphabets and Numbers app for kids to learn with sound.



//CODE:-


//basic events

onEvent("button1", "click", function( ) {
  setScreen("#home");
  playSound("assets/category_app/app_interface_click_2.mp3", false);
}); 
  
onEvent("button3", "click", function( )  {
  setScreen("#alpha_choice");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("alphaBack", "click", function( ) {
  setScreen("#home");
});

onEvent("button5", "click", function( ) {
  setScreen("#alpha_chart");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("a_chartBack", "click", function( ) {
  setScreen("#alpha_choice");
});

onEvent("button6", "click", function( ) {
  setScreen("#alpha_click");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("a_clickBack", "click", function( ) {
  setScreen("#alpha_choice");
});


//for sound and screen change when alphabets are clicked

onEvent("bA", "click", function( ) {
  setScreen("a");
  playSound("assets/A.mp3", true);
});

onEvent("bB", "click", function( ) {
  setScreen("b");
  playSound("assets/B.mp3", true);
});

onEvent("bC", "click", function( ) {
  setScreen("c");
  playSound("assets/c.mp3", true);
});

onEvent("bD", "click", function( ) {
  setScreen("d");
  playSound("assets/d.mp3", true);
});

onEvent("bE", "click", function( ) {
  setScreen("e");
  playSound("assets/e.mp3", true);
});

onEvent("bF", "click", function( ) {
  setScreen("f");
  playSound("assets/f.mp3", true);
});

onEvent("bG", "click", function( ) {
  setScreen("g");
  playSound("assets/g.mp3", true);
});

onEvent("bH", "click", function( ) {
  setScreen("h");
  playSound("assets/h.mp3", true);
});

onEvent("bI", "click", function( ) {
  setScreen("i");
  playSound("assets/i.mp3", true);
});

onEvent("bJ", "click", function( ) {
  setScreen("j");
  playSound("assets/j.mp3", true);
});

onEvent("bK", "click", function( ) {
  setScreen("k");
  playSound("assets/k.mp3", true);
});

onEvent("bL", "click", function( ) {
  setScreen("l");
  playSound("assets/l.mp3", true);
});

onEvent("bM", "click", function( ) {
  setScreen("m");
  playSound("assets/m.mp3", true);
});

onEvent("bN", "click", function( ) {
  setScreen("n");
  playSound("assets/n.mp3", true);
});

onEvent("bO", "click", function( ) {
  setScreen("o");
  playSound("assets/o.mp3", true);
});

onEvent("bP", "click", function( ) {
  setScreen("p");
  playSound("assets/p.mp3", true);
});

onEvent("bQ", "click", function( ) {
  setScreen("q");
  playSound("assets/q.mp3", true);
});

onEvent("bR", "click", function( ) {
  setScreen("r");
  playSound("assets/r.mp3", true);
});

onEvent("bS", "click", function( ) {
  setScreen("s");
  playSound("assets/s.mp3", true);
});

onEvent("bT", "click", function( ) {
  setScreen("t");
  playSound("assets/t.mp3", true);
});

onEvent("bU", "click", function( ) {
  setScreen("u");
  playSound("assets/u.mp3", true);
});

onEvent("bV", "click", function( ) {
  setScreen("v");
  playSound("assets/v.mp3", true);
});

onEvent("bW", "click", function( ) {
  setScreen("w");
  playSound("assets/w.mp3", true);
});

onEvent("bX", "click", function( ) {
  setScreen("x");
  playSound("assets/x.mp3", true);
});

onEvent("bY", "click", function( ) {
  setScreen("y");
  playSound("assets/y.mp3", true);
});

onEvent("bZ", "click", function( ) {
  setScreen("z");
  playSound("assets/z.mp3", true);
});


//back buttons for aphabets (click)

onEvent("b1", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/A.mp3");
});

onEvent("b2", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/B.mp3");
});

onEvent("b3", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/c.mp3");
});

onEvent("b4", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/d.mp3");
});
onEvent("b5", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/e.mp3");
});

onEvent("b6", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/f.mp3");
});

onEvent("b7", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/g.mp3");
});

onEvent("b8", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/h.mp3");
});

onEvent("b9", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/i.mp3");
});

onEvent("b10", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/j.mp3");
});

onEvent("b11", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/k.mp3");
});

onEvent("b12", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/l.mp3");
});

onEvent("b13", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/m.mp3");
});

onEvent("b14", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/n.mp3");
});

onEvent("b15", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/o.mp3");
});

onEvent("b16", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/p.mp3");
});

onEvent("b17", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/q.mp3");
});

onEvent("b18", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/r.mp3");
});

onEvent("b19", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/s.mp3");
});

onEvent("b20", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/t.mp3");
});

onEvent("b21", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/u.mp3");
});

onEvent("b22", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/v.mp3");
});

onEvent("b23", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/w.mp3");
});

onEvent("b24", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/x.mp3");
});

onEvent("b25", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/y.mp3");
});

onEvent("b26", "click", function( ) {
  setScreen("#alpha_click");
  stopSound("assets/z.mp3");
});

/*________________________________________________________________________________________
                                      Alphabets - END!
________________________________________________________________________________________*/



//basic events

onEvent("button4", "click", function( )  {
  setScreen("#numb_choice");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("numbBack", "click", function( ) {
  setScreen("#home");
});

onEvent("button7", "click", function( ) {
  setScreen("#numb_chart");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("button8", "click", function( ) {
  setScreen("#numb1");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

onEvent("n_chartBack", "click", function( ) {
  setScreen("#numb_choice");
});

onEvent("button10", "click", function( ) {
  setScreen("#numb_choice");
});

onEvent("button11", "click", function( ) {
  setScreen("#numb2");
});

onEvent("button12", "click", function( ) {
  setScreen("#numb1");
});

onEvent("button13", "click", function( ) {
  setScreen("#numb3");
});

onEvent("button14", "click", function( ) {
  setScreen("#numb2");
});

onEvent("button15", "click", function( ) {
  setScreen("#numb4");
});

onEvent("button16", "click", function( ) {
  setScreen("#numb3");
});

onEvent("button17", "click", function( ) {
  setScreen("#numb5");
});

onEvent("button18", "click", function( ) {
  setScreen("#numb4");
});

onEvent("button19", "click", function( ) {
  setScreen("#home");
});


//for playing sounds when numbers are clicked

onEvent ("1", "click", function ( ) {
  playSound("assets/1.mp3", false);
});

onEvent ("2", "click", function ( ) {
  playSound("assets/2.mp3", false);
});

onEvent ("3", "click", function ( ) {
  playSound("assets/3.mp3", false);
});

onEvent ("4", "click", function ( ) {
  playSound("assets/4.mp3", false);
});

onEvent ("5", "click", function ( ) {
  playSound("assets/5.mp3", false);
});

onEvent ("6", "click", function ( ) {
  playSound("assets/6.mp3", false);
});

onEvent ("7", "click", function ( ) {
  playSound("assets/7.mp3", false);
});

onEvent ("8", "click", function ( ) {
  playSound("assets/8.mp3", false);
});

onEvent ("9", "click", function ( ) {
  playSound("assets/9.mp3", false);
});

onEvent ("10", "click", function ( ) {
  playSound("assets/10.mp3", false);
});

onEvent ("11", "click", function ( ) {
  playSound("assets/11.mp3", false);
});

onEvent ("12", "click", function ( ) {
  playSound("assets/12.mp3", false);
});

onEvent ("13", "click", function ( ) {
  playSound("assets/13.mp3", false);
});

onEvent ("14", "click", function ( ) {
  playSound("assets/14.mp3", false);
});

onEvent ("15", "click", function ( ) {
  playSound("assets/15.mp3", false);
});

onEvent ("16", "click", function ( ) {
  playSound("assets/16.mp3", false);
});

onEvent ("17", "click", function ( ) {
  playSound("assets/17.mp3", false);
});

onEvent ("18", "click", function ( ) {
  playSound("assets/18.mp3", false);
});

onEvent ("19", "click", function ( ) {
  playSound("assets/19.mp3", false);
});

onEvent ("20", "click", function ( ) {
  playSound("assets/20.mp3", false);
});

onEvent ("21", "click", function ( ) {
  playSound("assets/21.mp3", false);
});

onEvent ("22", "click", function ( ) {
  playSound("assets/22.mp3", false);
});

onEvent ("23", "click", function ( ) {
  playSound("assets/23.mp3", false);
});

onEvent ("24", "click", function ( ) {
  playSound("assets/24.mp3", false);
});

onEvent ("25", "click", function ( ) {
  playSound("assets/25.mp3", false);
});

onEvent ("26", "click", function ( ) {
  playSound("assets/26.mp3", false);
});

onEvent ("27", "click", function ( ) {
  playSound("assets/27.mp3", false);
});

onEvent ("28", "click", function ( ) {
  playSound("assets/28.mp3", false);
});

onEvent ("29", "click", function ( ) {
  playSound("assets/29.mp3", false);
});

onEvent ("30", "click", function ( ) {
  playSound("assets/30.mp3", false);
});

onEvent ("31", "click", function ( ) {
  playSound("assets/31.mp3", false);
});

onEvent ("32", "click", function ( ) {
  playSound("assets/32.mp3", false);
});

onEvent ("33", "click", function ( ) {
  playSound("assets/33.mp3", false);
});

onEvent ("34", "click", function ( ) {
  playSound("assets/34.mp3", false);
});

onEvent ("35", "click", function ( ) {
  playSound("assets/35.mp3", false);
});

onEvent ("36", "click", function ( ) {
  playSound("assets/36.mp3", false);
});

onEvent ("37", "click", function ( ) {
  playSound("assets/37.mp3", false);
});

onEvent ("38", "click", function ( ) {
  playSound("380.mp3", false);
});

onEvent ("39", "click", function ( ) {
  playSound("assets/39.mp3", false);
});

onEvent ("40", "click", function ( ) {
  playSound("assets/40.mp3", false);
});

onEvent ("41", "click", function ( ) {
  playSound("assets/41.mp3", false);
});

onEvent ("42", "click", function ( ) {
  playSound("assets/42.mp3", false);
});

onEvent ("43", "click", function ( ) {
  playSound("assets/43.mp3", false);
});

onEvent ("44", "click", function ( ) {
  playSound("assets/44.mp3", false);
});

onEvent ("45", "click", function ( ) {
  playSound("assets/45.mp3", false);
});

onEvent ("46", "click", function ( ) {
  playSound("assets/46.mp3", false);
});

onEvent ("47", "click", function ( ) {
  playSound("assets/47.mp3", false);
});

onEvent ("48", "click", function ( ) {
  playSound("assets/48.mp3", false);
});

onEvent ("49", "click", function ( ) {
  playSound("assets/49.mp3", false);
});

onEvent ("50", "click", function ( ) {
  playSound("assets/50.mp3", false);
});

onEvent ("51", "click", function ( ) {
  playSound("assets/51.mp3", false);
});

onEvent ("52", "click", function ( ) {
  playSound("assets/52.mp3", false);
});

onEvent ("53", "click", function ( ) {
  playSound("assets/53.mp3", false);
});

onEvent ("54", "click", function ( ) {
  playSound("assets/54.mp3", false);
});

onEvent ("55", "click", function ( ) {
  playSound("assets/55.mp3", false);
});

onEvent ("56", "click", function ( ) {
  playSound("assets/56.mp3", false);
});
onEvent ("57", "click", function ( ) {
  playSound("assets/57.mp3", false);
});

onEvent ("58", "click", function ( ) {
  playSound("assets/58.mp3", false);
});

onEvent ("59", "click", function ( ) {
  playSound("assets/59.mp3", false);
});

onEvent ("60", "click", function ( ) {
  playSound("assets/60.mp3", false);
});

onEvent ("61", "click", function ( ) {
  playSound("assets/61.mp3", false);
});

onEvent ("62", "click", function ( ) {
  playSound("assets/62.mp3", false);
});

onEvent ("63", "click", function ( ) {
  playSound("assets/63.mp3", false);
});

onEvent ("64", "click", function ( ) {
  playSound("assets/64.mp3", false);
});

onEvent ("65", "click", function ( ) {
  playSound("assets/65.mp3", false);
});

onEvent ("66", "click", function ( ) {
  playSound("assets/66.mp3", false);
});

onEvent ("67", "click", function ( ) {
  playSound("assets/67.mp3", false);
});

onEvent ("68", "click", function ( ) {
  playSound("assets/68.mp3", false);
});

onEvent ("69", "click", function ( ) {
  playSound("assets/69.mp3", false);
});

onEvent ("70", "click", function ( ) {
  playSound("assets/70.mp3", false);
});

onEvent ("71", "click", function ( ) {
  playSound("assets/71.mp3", false);
});

onEvent ("72", "click", function ( ) {
  playSound("assets/72.mp3", false);
});

onEvent ("73", "click", function ( ) {
  playSound("assets/73.mp3", false);
});

onEvent ("74", "click", function ( ) {
  playSound("assets/74.mp3", false);
});

onEvent ("75", "click", function ( ) {
  playSound("assets/75.mp3", false);
});

onEvent ("76", "click", function ( ) {
  playSound("assets/76.mp3", false);
});

onEvent ("77", "click", function ( ) {
  playSound("assets/77.mp3", false);
});
onEvent ("78", "click", function ( ) {
  playSound("assets/78.mp3", false);
});
onEvent ("79", "click", function ( ) {
  playSound("assets/79.mp3", false);
});

onEvent ("80", "click", function ( ) {
  playSound("assets/80.mp3", false);
});

onEvent ("81", "click", function ( ) {
  playSound("assets/81.mp3", false);
});

onEvent ("82", "click", function ( ) {
  playSound("assets/82.mp3", false);
});

onEvent ("83", "click", function ( ) {
  playSound("assets/83.mp3", false);
});

onEvent ("84", "click", function ( ) {
  playSound("assets/84.mp3", false);
});

onEvent ("85", "click", function ( ) {
  playSound("assets/85.mp3", false);
});

onEvent ("86", "click", function ( ) {
  playSound("assets/86.mp3", false);
});

onEvent ("87", "click", function ( ) {
  playSound("assets/87.mp3", false);
});

onEvent ("88", "click", function ( ) {
  playSound("assets/88.mp3", false);
});

onEvent ("89", "click", function ( ) {
  playSound("assets/89.mp3", false);
});

onEvent ("90", "click", function ( ) {
  playSound("assets/90.mp3", false);
});

onEvent ("91", "click", function ( ) {
  playSound("assets/91.mp3", false);
});

onEvent ("92", "click", function ( ) {
  playSound("assets/92.mp3", false);
});

onEvent ("93", "click", function ( ) {
  playSound("assets/93.mp3", false);
});

onEvent ("94", "click", function ( ) {
  playSound("assets/94.mp3", false);
});

onEvent ("95", "click", function ( ) {
  playSound("assets/95.mp3", false);
});

onEvent ("96", "click", function ( ) {
  playSound("assets/96.mp3", false);
});

onEvent ("97", "click", function ( ) {
  playSound("assets/97.mp3", false);
});

onEvent ("98", "click", function ( ) {
  playSound("assets/98.mp3", false);
});

onEvent ("99", "click", function ( ) {
  playSound("assets/99.mp3", false);
});

onEvent ("100", "click", function ( ) {
  playSound("assets/100.mp3", false);
});

/*________________________________________________________________________________________
                                      Numbers - END!
________________________________________________________________________________________*/

//The App is Created! Hurray 🎉
