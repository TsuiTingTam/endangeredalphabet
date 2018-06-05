function randomImg() {
var Img = new Array();
    
    Img[1] = "1.png";
    Img[2] = "2.png";
    Img[3] = "Img/mongolian_newyear.png";
    Img[4] = "Img/suzhou1.png";
    Img[5] = "5.png";
    Img[6] = "6.png";

    var Link = new Array();
    
    Link[1] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[2] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[3] = "https://tsuitingtam.github.io/Final/mongolian.html";
    Link[4] = "https://tsuitingtam.github.io/Final/suzhou.html";
    Link[5] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[6] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    
    var Title = new Array();
    
    Title[1] = "Tibetan";
    Title[2] = "Tibetan";
    Title[3] = "Mongolian";
    Title[4] = "Suzhou Numerals";
    Title[5] = "Tibetan";
    Title[6] = "Tibetan";
    
    
    var Text = new Array();
    
    Text[1] = "Graceful kidness. A Tibetan calligraphy by Tashi Mannox.";
    
    Text[2] = "The more well known Eh-Wam symbol, shown on the right, is associated with Tibetan Buddhist organizations, such as Rigpa and popular with the late Chogyam Trungpa Rinpoche, this is a combination of two letters 'Eh' and 'Wam' from the LansaSanskrit style.";
    
    Text[3] = "A wonderful piece of calligraphy, taking the vertical Mongolian words for \"Happy New Year\"  and turning them into candles on an evergreen tree. Based on an original design by Sukhbaatar Lkhagvadorj.";
    
    Text[4] = "The Suzhou Numerals, also known as Suzhou mazi, is a numeral system used in China before the introduction of Arabic numerals. The Suzhou numetrals are also known as huama, caoma, jingzima , fanzima and shangma.";
    Text[5] = "Graceful kidness. A Tibetan calligraphy by Tashi Mannox.";
    
    Text[6] = "This ideograph is the word \'moon\' in the Tibetan Drutsa script.";
 
    var BGcolor = new Array ();
    
    BGcolor[1] = "#FB8200";
    BGcolor[2] = "#FB8200";
    BGcolor[3] = "#0079CB";
    BGcolor[4] = "#F8D473";
    BGcolor[5] = "#FB8200";
    BGcolor[6] = "#FB8200";
    
    var rnd = Math.floor(Math.random() * Img.length);
    if (rnd === 0) {
        rnd = 1;
    }
    
    
    document.getElementById("title1").innerHTML = '<a href= "'+ Link[rnd] +'">' + Title[rnd] + '</a>';
    
    document.getElementById("description").innerHTML = Text[rnd];

    document.getElementById("images").src = Img[rnd]; 
    
    document.body.style.backgroundColor = BGcolor[rnd];
    
    document.getElementById("link").src= Link[rnd];

    document.getElementById("caption").innerHTML = Caption[rnd];

}

