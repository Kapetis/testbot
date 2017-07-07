// This is  a dialog with a waterfall (an array of functions for the conversation)
// It makes use of a storage "bag" called the dialogData used for temp storage

bot.dialog('/waterfall',[
    function(session, args, next) {
        session.dialogData.stepone = "Made it through step one." ; 
        next();

    },
    function (session, results, next) {
        session.dialogData.steptwo = "Made it through step two.";
        next();
    },
    
    function (session,results) {
        var  mymsg = session.dialogData.stepone + "<br>" + session.dialogData.steptwo + '<br>';
        session.endDialog(mymsg + "Let's wnd this waterfall and return control to the root dialog :).");
    }

]);
