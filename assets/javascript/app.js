 $(document).ready(function () {
     var answered = false
     var correctAnswers = 0;
     var incorrectAnswers = 0;
     var unansweredQuestions = 0;
     var currentQAndA = 0
     var number = 5;
     var intervalId;
     var outOfTime = "Out of time!"
     var correctAlert = "Correct!"
     var wrongAlert = "Wrong!"

     var trivia = [{
             question: "which of these is not a Spice Girl?",
             answer: ["scary spice", "sporty spice", "ginger spice", "oregano"],
             correct: "oregano"
             //  gif:<iframe src="https://giphy.com/embed/BoEBnPhuWYYCs" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spice-girls-wannabe-BoEBnPhuWYYCs">via GIPHY</a></p>;
         },
         {
             question: "which character on Hey Arnold is secretly in love with Arnold?",
             answer: ["stinky", "helga", "francine", "gerald"],
             correct: "helga"
         }
     ];


     function gameStart() {
         runTimer();
         $("#start-button").remove();
         loadTrivia();
     };

     //  When the stop button gets clicked, run the stop function.
     $("#stop").on("click", stop);

     //  When the resume button gets clicked, execute the run function.
     $("#resume").on("click", runTimer);

     function runTimer() {
         clearInterval(intervalId);
         intervalId = setInterval(decrement, 1000);

     }


     function decrement() {
         number--;
         $("#timer").text("Time Remaining: " + number + " seconds");

         //  If number gets to zero...
         if (number === 0) {
             stop();
             $(".quiz").html("<h4>" + outOfTime + "</h4>");
             $(".quiz").append("<div>" + 'the correct answer was: ' + trivia[currentQAndA].correct + "<div>");
             //add gif
             loading();
             //begin countdown and display next question at the end of the countdown
             function loading() {
                 setTimeout(nextQuestion, 1000 * 5);
             }



         }
     }



     function nextQuestion() {
         currentQAndA++;
         loadTrivia();
         number = 5;

     }

     // stop timer function
     function stop() {
         clearInterval(intervalId);
     }

function resetTimer(){
    stop();

}
     //create click event for user's selected answer and store user's answer
     $("body").on("click", "div.response", function () {

         var userAnswer = $(this).text();
         console.log(userAnswer);
         checkAnswer()

         //evaluate if anwer was correct
         function checkAnswer() {
             if (userAnswer === trivia[currentQAndA].correct) {
                 stop();
                 $(".quiz").html("<h4>" + correctAlert + "</h4>");

                 //add gif

                 //begin countdown and display next question at the end of the countdown
                 setTimeout(nextQuestion, 1000 * 5);

             }

         }
     })





     function loadTrivia() {

         $(".quiz").text(trivia[currentQAndA].question)
         for (j = 0; j < trivia[currentQAndA].answer.length; j++) {
             $(".quiz").append("<div class='response'>" + trivia[currentQAndA].answer[j] + "</div>");
         }

     }


     $("#start-button").on("click", function () {
         gameStart();

     });



 });