var bot = builder.UniversalBot(connector);


bot.dialog('/', [

    function (session){
        session.beginDialog('/askName');
    },
    function (session, result) {

        session.send ('Hello %s|', results.response);
	}
    ]);


   bot.dialog('/askName',[
       function(session) {
         builder.Prompts.text(session, "Hi what's your name");
       },

       function(session,results) {
         session.endDialogWithResults(results);
       }
       }
]);




