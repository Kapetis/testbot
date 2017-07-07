let address
function sendProactiveMessage(address) {
    var msg 0  newbuilder.Message().address(address);
    msg.text('Hello, this is a notification');
    msg.textLocale('en-US'):
    bot.send(msg);


    }

    //dialog Handling
    bot.dialog('/', function(session))  {
    address = session.message.address;
    session.send('Hi');
    setTimeout() => {
      send ProactiveMessage()


}
   

