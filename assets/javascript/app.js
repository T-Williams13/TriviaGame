 $(document).ready(function () {
     var timer = 30;
     var answered = false
     var correctAnswers = 0;
     var incorrectAnswers = 0;
     var unansweredQuestions = 0;
     var currentQAndA = 0
     var number = 30;
     var intervalId;

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

         //  Once number hits zero...
         if (number === 0) {
             nextQuestion();

             stop();
         }
     }

     // stop function
     function stop() {
         clearInterval(intervalId);
     }

     function nextQuestion() {
         currentQAndA++;
         loadTrivia();
     }

     // $("div.response").on("click", function(event){
     //create click event for user's selected answer
     $("div.response").on("click", function () {

         var userAnswer = $(this).attr(".response");
         if (userAnswer === trivia[currentQAndA].correct) {
             console.log("jinkies!")
         }

     })

     //store user's answer

     //evaluate if anwer was correct
     function checkAnswer() {

     }

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