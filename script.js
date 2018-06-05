function randomImg() {
var Img = new Array();
    
    Img[1] = "1.png";
    Img[2] = "2.png";
    Img[3] = "Img/mongolian_newyear.png";
    Img[4] = "Img/suzhou1.png";
    Img[5] = "5.png";
    Img[6] = "6.png";
    Img[7] = "Img/deseret_human.png";
    Img[8] = "Img/sutterlin_deutsch.png";
    Img[9] = "Img/sutterlin_sutt.png";
    Img[10] = "Img/cree_language.png";

    var Link = new Array();
    
    Link[1] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[2] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[3] = "https://tsuitingtam.github.io/Final/mongolian.html";
    Link[4] = "https://tsuitingtam.github.io/Final/shome.html";
    Link[5] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[6] = "https://tsuitingtam.github.io/endangeredalphabet/tibetan.html";
    Link[7] = "https://tsuitingtam.github.io/endangeredalphabet/deseret.html";
    Link[8] = "https://tsuitingtam.github.io/endangeredalphabet/sutterlin.html";
    Link[10] = "https://tsuitingtam.github.io/endangeredalphabet/cree.html";
    
    var Title = new Array();
    
    Title[1] = "Tibetan";
    Title[2] = "Tibetan";
    Title[3] = "Mongolian";
    Title[4] = "Suzhou Numerals";
    Title[5] = "Tibetan";
    Title[6] = "Tibetan";
    Title[7] = "Deseret Alphabet";
    Title[8] = "Sütterlin";
    Title[9] = "Sütterlin";
    Title[10] = "Cree";
    
    
    var Text = new Array();
    
    Text[1] = "Graceful kidness. A Tibetan calligraphy by Tashi Mannox.";
    
    Text[2] = "The more well known Eh-Wam symbol, shown on the right, is associated with Tibetan Buddhist organizations, such as Rigpa and popular with the late Chogyam Trungpa Rinpoche, this is a combination of two letters 'Eh' and 'Wam' from the LansaSanskrit style.";
    
    Text[3] = "A wonderful piece of calligraphy, taking the vertical Mongolian words for \"Happy New Year\"  and turning them into candles on an evergreen tree. Based on an original design by Sukhbaatar Lkhagvadorj.";
    
    Text[4] = "The Suzhou Numerals, also known as Suzhou mazi, is a numeral system used in China before the introduction of Arabic numerals. The Suzhou numetrals are also known as huama, caoma, jingzima , fanzima and shangma.";
    Text[5] = "Graceful kidness. A Tibetan calligraphy by Tashi Mannox.";
    
    Text[6] = "This ideograph is the word \'moon\' in the Tibetan Drutsa script.";
    
    Text[7] = "Deseret alphabet Deseret Alphabet is a phonemic English-language spelling reform developed between 1847 and 1854 by the board of regents of the University of Deseret under the leadership of Brigham Young, the second president of the Church of Jesus Christ of Latter-Day Saints. George D. Watt is reported to have been the most actively involved in the development of the script, as well as being its first serious user.";
    Text[8] = "Deutsch (German in german)";
    Text[9] = "Sütterlinschrift, \"Sütterlin script\"";
    Text[10] = "Cree syllabics are the versions of Canadian Aboriginal syllabics used to write Cree dialects, including the original syllabics system created for Cree and Ojibwe (Cree and Ojibwe). There are two main varieties of syllabics for Cree. Syllabics were later adapted to several other languages. The below sentence means \'one language is never enough.\'";
 
    var BGcolor = new Array ();
    
    BGcolor[1] = "#FB8200";
    BGcolor[2] = "#FB8200";
    BGcolor[3] = "#0079CB";
    BGcolor[4] = "#F8D473";
    BGcolor[5] = "#FB8200";
    BGcolor[6] = "#FB8200";
    BGcolor[7] = "#9BC6AD";
    BGcolor[8] = "#C64C40";
    BGcolor[9] = "#C64C40";
    BGcolor[10] = "#D57C24";
    
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

