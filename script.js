@@ -1,1540 +0,0 @@
var other = document.getElementById("othertext")
var clicks = 0;

function replaceOtherText(){
  clicks += 1;
  if(clicks==1)
    {other.innerHTML = "made this website";} 
  else if(clicks==2)
   {other.innerHTML = "can ride bike good";}
  else if(clicks==3)
   {other.innerHTML = "brown belt (retired)";}
  else if(clicks==4) 
   {other.innerHTML = "brooklyn via chicago";}
  else if(clicks >= 5) //for 6 clicks and above
   {other.innerHTML = "<a href='https://twitter.com/jrnnynrlson' target='_blank'>@jrnnynrlson</a>";
    clicks = 0}
  else 
   {other.innerHTML = "made this website";}
}

var a = document.getElementById("videos");
var b = document.getElementById("writing");
var c = document.getElementById("art");
var headshot = document.getElementById("headshot");
var headshot_v2 = document.getElementById("headshot_v2");

function expandVideos() {
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                                
  } else if (a.style.display ==="block" & b.style.display === "block" & c.style.display === "block") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";                        
    headshot_v2.style.display = "none"                                        
}
    else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none"; 
    headshot.style.display = "inline";                        
    headshot_v2.style.display = "none"                                        
  }
}  

function expandWriting() {
  if (b.style.display === "none") {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

} else if (a.style.display ==="block" & b.style.display === "block" & c.style.display === "block") {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

}     else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";
    af.style.display = "none";
    ag.style.display = "none"; 
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

  }
}  

function expandArt() {
  if (c.style.display === "none") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block"
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";
    af.style.display = "none"; 
    ag.style.display = "none";  
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";    
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

  } else if (a.style.display ==="block" & b.style.display === "block" & c.style.display === "block") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    aa.style.display = "none";
    ab.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

  } else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none"; 
    af.style.display = "none"; 
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                                          

  }
}  

var st = document.getElementById("sharktank");
var aa = document.getElementById("doublefeature");
var ab = document.getElementById("sandvid");
var tv = document.getElementById("tourvideo");
var ac = document.getElementById("actingone");
var ad = document.getElementById("actingtwo");
var ae = document.getElementById("winkreel");
var af = document.getElementById("breathing");
var ag = document.getElementById("backtoschool");

function sharkTank() {
  if (st.style.display === "none") {
    st.style.display = "block";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       

  }
}

function doubleFeature() {
  if (aa.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "block";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       

  }
}

function sandVid() {
  if (ab.style.display === "none") {
    st.style.display = "none";
  	aa.style.display = "none";
    ab.style.display = "block";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       

  } else {
    st.style.display = "none";
  	aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                       
  }
}

function tourVid() {
  if (tv.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "block";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

function actingOne() {
  if (ac.style.display === "none") {
    st.style.display = "none";
  	aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "block";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

function actingTwo() {
  if (ad.style.display === "none") {
    st.style.display = "none";
  	aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "block";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
  	aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

function winkReel() {
  if (ae.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "block";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

function breathingTechniques() {
  if (af.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "block";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

function backtoSchool() {
  if (ag.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "block";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  }
}

var ba = document.getElementById("primer");
var bb = document.getElementById("poncho");
var bc = document.getElementById("fader");
var bd = document.getElementById("newestyork");
var be = document.getElementById("hairpin");
var bf = document.getElementById("awl");
var ol = document.getElementById("oliveandlark");
var bg = document.getElementById("fod");
var bh = document.getElementById("splitsider");
var bi = document.getElementById("videogum");

function primerShow() {
  if (ba.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "block";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           

  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                           
    
  }
}

function ponchoShow() {
  if (bb.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "block";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  }
}

function faderShow() {
  if (bc.style.display === "none") {
    st.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "block";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  }
}

function newestyorkShow() {
  if (bd.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "block";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  }
}

function hairpinShow() {
  if (be.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "block";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                                                   
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                               
  }
}

function awlShow() {
  if (bf.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "block";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                 
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                 
  }
}

function oliveandlarkShow() {
  if (ol.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "block";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  }
}

function fodShow() {
  if (bg.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "block";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  }
}

function splitsiderShow() {
  if (bh.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "block";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  }
}

function videogumShow() {
  if (bi.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "block";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                     
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                         
  }
}

var ca = document.getElementById("jcw");

function jcwShow() {
  if (ca.style.display === "none") {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "block";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                     
  } else {
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "none"                                     
  }
}

var information = document.getElementById("info");

function expandCategories() {
  if (a.style.display === "none") {
    info.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "block"                                        
  }
  else if (b.style.display === "none") {
    info.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "block"
  } 
  else if (c.style.display === "none") {
    info.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "block"                                        
  }
  else if(info.style.display === "none"){
    info.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "none";
    headshot_v2.style.display = "block"
  }
  else {
    info.style.display = "none";
    a.style.display = "none";
    b.style.display = "none"; 
    c.style.display = "none";       
    st.style.display = "none";
    aa.style.display = "none";
    ab.style.display = "none";
    tv.style.display = "none";
    ac.style.display = "none";
    ad.style.display = "none";
    ae.style.display = "none";  
    af.style.display = "none";
    ag.style.display = "none";
    ba.style.display = "none";
    bb.style.display = "none";
    bc.style.display = "none";
    bd.style.display = "none";
    be.style.display = "none";
    bf.style.display = "none";
    ol.style.display = "none";
    bg.style.display = "none";
    bh.style.display = "none";
    bi.style.display = "none";
    ca.style.display = "none";
    headshot.style.display = "inline";
    headshot_v2.style.display = "none"                                        
  }
}


// slideshow script
(function() {

  init(); //on page load - show first slide, hidethe rest

  function init() {

    parents = document.getElementsByClassName('slideshow-container');

    for (j = 0; j < parents.length; j++) {
      var slides = parents[j].getElementsByClassName("mySlides");
      var dots = parents[j].getElementsByClassName("dot");
      slides[0].classList.add('active-slide');
      dots[0].classList.add('active');
    }
  }

  dots = document.getElementsByClassName('dot'); //dots functionality

  for (i = 0; i < dots.length; i++) {

    dots[i].onclick = function() {

      slides = this.parentNode.parentNode.getElementsByClassName("mySlides");

      for (j = 0; j < this.parentNode.children.length; j++) {
        this.parentNode.children[j].classList.remove('active');
        slides[j].classList.remove('active-slide');
        if (this.parentNode.children[j] == this) {
          index = j;
        }
      }
      this.classList.add('active');
      slides[index].classList.add('active-slide');

    }
  }
//prev/next functionality
  links = document.querySelectorAll('.slideshow-container a');
/*
  for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      current = this.parentNode;

      var slides = current.getElementsByClassName("mySlides");
      var dots = current.getElementsByClassName("dot");
      curr_slide = current.getElementsByClassName('active-slide')[0];
      curr_dot = current.getElementsByClassName('active')[0];
      curr_slide.classList.remove('active-slide');
      curr_dot.classList.remove('active');
      if (this.className == 'next' || this.className == 'slideshowimages') {

        if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
          curr_slide.nextElementSibling.classList.add('active-slide');
          curr_dot.nextElementSibling.classList.add('active');
        } else {
          slides[0].classList.add('active-slide');
          dots[0].classList.add('active');
        }
      }
    }
  }
*/

  imgLinks = document.querySelectorAll('.slideshowimages');

  for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      current = this.parentNode;

      var slides = current.getElementsByClassName("mySlides");
      var dots = current.getElementsByClassName("dot");
      curr_slide = current.getElementsByClassName('active-slide')[0];
      curr_dot = current.getElementsByClassName('active')[0];
      curr_slide.classList.remove('active-slide');
      curr_dot.classList.remove('active');
      if (this.className == 'next' || this.className == 'slideshowimages') {

        if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
          curr_slide.nextElementSibling.classList.add('active-slide');
          curr_dot.nextElementSibling.classList.add('active');
        } else {
          slides[0].classList.add('active-slide');
          dots[0].classList.add('active');
        }
      }
    }
  }

})();