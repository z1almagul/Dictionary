const colors = [
    'rgb(127, 127, 255)',
    'rgb(255, 127, 127)',
    'rgb(127, 255, 127)',
    'rgb(222, 184, 135)'
]

const words = [
    {word: "en arbeidsinnvandrer",
     translation: "a migrant worker",
     definition:"en som kommer til et nytt land for å jobbe",
     example:"Han kom hit som arbeidsinnvandrer.",
     type:0},
    {word: "en snekker",
     translation: "a carpenter",
     definition:"håndverker",
     example:"Kjæresten min er snekker.",
     type:0},
    {word: "å forsvinne",
     translation: "to disappear",
     definition:"å bli borte",
     example:"Nøklene mine har forsvunnet!",
     type:1},
    {word: "å pendle",
     translation: "to commute",
     definition:"å reise en lengre reisevei til jobb",
     example:"Hun pendler til Oslo.",
     type:1},
    {word: "rar",
     translation: "weird",
     definition:"merkelig",
     example:"Han er rar, men snill.",
     type:2},
    {word: "å bli kjent med",
     translation: "to get to know",
     definition:"bli fortrolig med",
     example:"Jeg holder på å bli kjent med ham.",
     type:3},
    {word: "en blund",
     translation: "a nap",
     definition:"en lur, cowboystrekk",
     example:"Jeg trenger en blund før vi går ut.",
     type:0},
    {word: "en brudekjole",
     translation: "a wedding dress",
     definition:"en kjole man gifter seg i",
     example:"Hun hadde på seg en fin brudekjole.",
     type:0},
    {word: "å glede seg",
     translation: "to look forward to",
     definition:"positiv forventning",
     example:"Jeg gleder meg til jul!",
     type:1},
    {word: "å kose seg",
     translation: "to have a good time",
     definition:"å hygge seg",
     example:"I kveld skal de kose seg.",
     type:1},
    {word: "å skynde seg",
     translation: "to hurry up",
     definition:"å komme seg fort av sted",
     example:"Du må skynde deg!",
     type:1},
    {word: "å sparke",
     translation: "to kick",
     definition:"bevegelse med beinet",
     example:"Hun sparka meg i leggen!",
     type:1},
    {word: "å drive med",
     translation: "conducting",
     definition:"å holde på med, å arbeide med",
     example:"Hva driver du med til vanlig?",
     type:1},
    {word: "en rettighet",
     translation: "a right",
     definition:"frihet til, eller privilegium",
     example:"Alle ansatte har rettigheter og plikter.",
     type:0},
    {word: "hardtarbeidende",
     translation: "hard working",
     definition:"en som jobber hardt",
     example:"Jeg er en hardtarbeidende person.",
     type:2},
    {word: "bustete",
     translation: "bushy",
     definition:"ugredd",
     example:"Han er alltid bustete på håret.",
     type:2},
    {word: "et kjennetegn",
     translation: "a characteristic",
     definition:"særtrekk",
     example:"Det er vanlige kjennetegn vi kan se etter.",
     type:0},
    {word: "en beslutning",
     translation: "a decision",
     definition:"avgjørelse",
     example:"Det er jeg som skal ta beslutningen.",
     type:0},
    {word: "spiss",
     translation: "tip",
     definition:"smalt punkt",
     example:"Blyanten er spiss.",
     type:2},
    {word: "et gjennomsnitt",
     translation: "an average",
     definition:"middelverdi",
     example:"Gjennomsnitt er den mest typiske verdien.",
     type:0},
    {word: "en innflytelse",
     translation: "an influence",
     definition:"innvirkning",
     example:"Elin har positiv innflytelse på sjefen.",
     type:0},
    {word: "en egenandel",
     translation: "a deductible",
     definition:"et beløp man må betale, resten er dekket",
     example:"Du må betale egenandelen.",
     type:0},
    {word: "en smerte",
     translation: "a pain",
     definition:"fysisk ubehag",
     example:"Han har smerter i magen.",
     type:0},
    {word: "kvalm",
     translation: "nauseous",
     definition:"ubehag i magen",
     example:"Datteren min er kvalm og kaster opp.",
     type:2},
    {word: "ei plage",
     translation: "a bother",
     definition:"",
     example:".",
     type:0},
    {word: "ei stund",
     translation: "a while",
     definition:"",
     example:".",
     type:0}
]

var currentWord = '';
var currentTranslation = '';
var currentDefinition = '';
var currentExample = '';
var currentType = '';

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function getWord(){
    let randomWord = getRandomWord();
    currentWord = randomWord.word;
    currentTranslation = randomWord.translation;
    currentDefinition = randomWord.definition;
    currentExample = randomWord.example;
    currentType = randomWord.type;

    $('#word').animate({opacity: 0}, 500, function(){
        $(this).animate({color: colors[currentType]});
        $(this).animate({opacity: 1}, 500);
        $('#word').text(currentWord);
    });
    
    
    $('#translation').animate({opacity: 0}, 500, function(){
        $(this).animate({opacity: 1}, 500);
        $('#translation').text(currentTranslation);
    });

    $('#definition').animate({opacity: 0}, 500, function(){
        $(this).animate({opacity: 1}, 500);
        $('#definition').text(currentDefinition);
    });

    $('#example').animate({opacity: 0}, 500, function(){
        $(this).animate({opacity: 1}, 500);
        $('#example').text('“'+currentExample+'”');
    });
    
    $('html body').animate(
        { backgroundColor: colors[currentType]
        },1000
      );

    $('button').animate(
        { backgroundColor: colors[currentType]
        },1000
      );

}

$(document).ready(function() {
    getWord();
    $('#new-quote').on('click',getWord);
});
