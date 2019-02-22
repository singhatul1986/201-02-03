"use strict";
console.log('Welcome to the game');

/* This section stores all the questions, Add/Remove/Modify question in this section */

var yesnoquestion = [
                {
                    keyvalue: 1,
                    question: 'Do you think I can sleep for 11 hours in a day (Yes/No)',
                    answer:'Yes',
                    yesanswer: 'You got it right.. More your sleep better you become',
                    noanswer: 'Opps!! I am lazier than you expected',
                    useranswer:'NA'
                },
                {
                    keyvalue: 2,
                    question: 'Is orange my favorite fruit? ',
                    answer:'No',
                    yesanswer: 'Ahh!! Sorry, I am to lazy to peel it off ',
                    noanswer: 'You are correct. But the oranges are good for health',
                    useranswer:'NA'
                },
                {
                    keyvalue: 3,
                    question: 'Did i visited India',
                    answer:'Yes',
                    yesanswer: 'that is correct ',
                    noanswer: '',
                    useranswer:'NA'
                },
                {
                    keyvalue: 4,
                    question: 'Do I have 7 Phd?',
                    answer:'Yes',
                    yesanswer: 'that is correct ',
                    noanswer: 'Opss!! you are wrong',
                    useranswer:'NA'
                },
                {
                    keyvalue: 5,
                    question: 'Am I axposed to nuclear radiations?',
                    answer:'No',
                    yesanswer: 'that is correct ',
                    noanswer: 'Opss!! you are wrong',
                    useranswer:'NA'
                }
];
var numericinputquestion = [
                {
                    keyvalue: 1,
                    question: 'Can you guess number of countries I visited last year?',
                    answer: 10,
                }

];
var multipleanswequestion = [
                {
                    keyvalue: 1,
                    question: 'Can you guess a country I visitied last year',
                    answer: ['GREECE','PORTUGAL','ITALY','NA','INDIA'],

                }

];
var totalcorrectanswer = 0;
var questionCollectiom = document.getElementsByClassName("question");


var username = prompt('Whts is ur name?');
alert('Welcome ' + username);

/* This section generates question in random order */

var totalquestions = yesnoquestion.length;
var seqofquestion = [];
var counter;
for (counter = 0; counter < totalquestions; counter++) {
        seqofquestion.push(counter);
};
console.log(seqofquestion);
seqofquestion.sort(function(a,b){return 0.5 - Math.random()});
console.log(seqofquestion);

/* This section is for Yes/No questions */

try {
    var questioncounter;
    for (questioncounter = 0; questioncounter <= totalquestions-1; questioncounter++){
        var questionnum = yesnoquestion[seqofquestion[questioncounter]];
        var userquestion = questionnum.question;
        console.log(userquestion);
        var useranswer = prompt(questionnum.question);
        if (useranswer) {
                questionnum.useranswer = useranswer; // This block writes user answer back in array
                var formatedans = useranswer.toUpperCase();
                var correctanswer = questionnum.answer;
                console.log(useranswer);
                alert(username + ' Your anser is ' + useranswer);
                if (formatedans === 'YES' || formatedans === 'Y'){
                    console.log(questionnum.yesanswer);
                } else if (formatedans === 'NO' || formatedans === 'N') {
                    console.log(questionnum.noanswer);
                } else {
                    console.log('Sorry invalid answer was provided');
                };

                if (formatedans === correctanswer) {
                    totalcorrectanswer = totalcorrectanswer + 1;
                    console.log(totalcorrectanswer);
                };

        }
        else {
            console.log('Looks like no answer was provided');
        };
    };
}
catch(err) {
    console.log(err);
    console.log('Ops!! some error occured');
};


/*This section is for numeric answer check */

try{
    var numquestion = numericinputquestion[0].question;
    var numanswer = parseInt(numericinputquestion[0].answer);
    var randomanswer = Math.round((Math.random()*numanswer));
    console.log(randomanswer);
    var numquestcounter;
    var totalatempts = 4;
    for (numquestcounter = 1; numquestcounter <= totalatempts; numquestcounter++){
        var usernumanswer = parseInt(prompt(numquestion));
        console.log('I am here');
        if (usernumanswer === randomanswer){
            console.log('Correct Answer');
            totalcorrectanswer = totalcorrectanswer + 1;
            break;
        }
        else {
            console.log('Please try again');
        };
    };
}
catch(err){

};

/*This section is for multiple answer question */

try{
    var multiansquestion = multipleanswequestion[0].question;
    var multipleanswer = multipleanswequestion[0].answer;
    var usermultians = prompt(multiansquestion);

    /*Check for null input */

    if (usermultians === null){
        console.log('No value provided')
    }
    else { var formatedusrans = usermultians.toUpperCase();
    };

    /*Check if the answer is correct */

    var checkanswer = multipleanswer.find(function(element)
                        { return element === formatedusrans;
                        });
    if (checkanswer === isNaN){
        console.log('Wrong Answer');
    }
    else {
        console.log('correct Answer');
        totalcorrectanswer = totalcorrectanswer + 1;

    };
    console.log(checkanswer);
}
catch(err){
    console.log(err);
}
finally{console.log('Total number of correct answer is ' + totalcorrectanswer)};

