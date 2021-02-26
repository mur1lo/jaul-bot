const Discord = require('discord.js');

const bot = new Discord.Client();

const token = process.env.JAUL_ENV;

bot.login(token)
bot.on('ready', () => {
    console.log('Online')
})


bot.on('message', msg => {
    var dateFormat = require('dateformat');
    var hoje =dateFormat(new Date(), "dd/mm/yyyy");

    if (msg.content === '!jaul') {
        if (hoje == "01/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "02/01/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "03/01/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "04/01/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "05/01/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "06/01/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "07/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "08/01/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "09/01/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "10/01/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "11/01/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "12/01/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "13/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "14/01/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "15/01/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "16/01/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "17/01/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "18/01/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "19/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "20/01/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "21/01/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "22/01/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "23/01/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "24/01/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "25/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "26/01/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "27/01/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "28/01/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "29/01/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "30/01/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "31/01/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "01/02/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "02/02/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "03/02/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "04/02/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "05/02/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "06/02/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "07/02/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "08/02/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "09/02/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "10/02/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "11/02/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "12/02/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "13/02/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "14/02/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "15/02/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "16/02/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "17/02/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "18/02/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "19/02/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "20/02/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "21/02/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "22/02/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "23/02/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "24/02/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "25/02/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "26/02/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "27/02/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "28/02/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "01/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "02/03/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "03/03/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "04/03/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "05/03/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "06/03/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "07/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "08/03/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "09/03/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "10/03/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "11/03/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "12/03/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "13/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "14/03/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "15/03/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "16/03/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "17/03/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "18/03/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "19/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "20/03/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "21/03/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "22/03/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "23/03/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "24/03/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "25/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "26/03/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "27/03/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "28/03/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "29/03/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "30/03/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "31/03/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "01/04/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "02/04/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "03/04/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "04/04/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "05/04/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "06/04/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "07/04/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "08/04/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "09/04/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "10/04/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "11/04/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "12/04/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "13/04/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "14/04/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "15/04/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "16/04/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "17/04/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "18/04/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "19/04/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "20/04/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "21/04/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "22/04/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "23/04/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "24/04/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "25/04/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "26/04/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "27/04/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "28/04/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "29/04/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "30/04/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "01/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "02/05/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "03/05/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "04/05/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "05/05/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "06/05/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "07/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "08/05/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "09/05/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "10/05/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "11/05/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "12/05/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "13/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "14/05/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "15/05/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "16/05/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "17/05/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "18/05/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "19/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "20/05/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "21/05/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "22/05/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "23/05/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "24/05/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "25/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "26/05/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "27/05/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "28/05/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "29/05/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "30/05/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "31/05/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "01/06/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "02/06/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "03/06/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "04/06/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "05/06/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "06/06/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "07/06/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "08/06/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "09/06/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "10/06/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "11/06/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "12/06/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "13/06/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "14/06/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "15/06/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "16/06/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "17/06/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "18/06/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "19/06/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "20/06/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "21/06/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "22/06/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "23/06/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "24/06/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "25/06/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "26/06/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "27/06/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "28/06/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "29/06/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "30/06/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "01/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "02/07/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "03/07/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "04/07/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "05/07/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "06/07/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "07/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "08/07/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "09/07/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "10/07/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "11/07/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "12/07/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "13/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "14/07/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "15/07/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "16/07/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "17/07/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "18/07/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "19/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "20/07/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "21/07/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "22/07/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "23/07/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "24/07/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "25/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "26/07/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "27/07/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "28/07/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "29/07/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "30/07/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "31/07/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "01/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "02/08/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "03/08/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "04/08/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "05/08/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "06/08/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "07/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "08/08/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "09/08/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "10/08/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "11/08/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "12/08/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "13/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "14/08/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "15/08/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "16/08/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "17/08/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "18/08/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "19/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "20/08/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "21/08/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "22/08/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "23/08/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "24/08/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "25/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "26/08/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "27/08/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "28/08/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "29/08/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "30/08/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "31/08/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "01/09/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "02/09/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "03/09/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "04/09/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "05/09/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "06/09/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "07/09/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "08/09/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "09/09/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "10/09/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "11/09/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "12/09/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "13/09/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "14/09/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "15/09/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "16/09/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "17/09/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "18/09/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "19/09/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "20/09/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "21/09/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "22/09/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "23/09/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "24/09/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "25/09/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "26/09/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "27/09/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "28/09/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "29/09/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "30/09/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "01/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "02/10/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "03/10/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "04/10/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "05/10/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "06/10/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "07/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "08/10/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "09/10/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "10/10/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "11/10/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "12/10/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "13/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "14/10/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "15/10/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "16/10/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "17/10/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "18/10/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "19/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "20/10/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "21/10/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "22/10/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "23/10/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "24/10/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "25/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "26/10/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "27/10/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "28/10/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "29/10/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "30/10/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "31/10/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "01/11/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "02/11/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "03/11/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "04/11/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "05/11/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "06/11/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "07/11/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "08/11/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "09/11/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "10/11/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "11/11/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "12/11/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "13/11/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "14/11/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "15/11/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "16/11/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "17/11/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "18/11/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "19/11/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "20/11/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "21/11/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "22/11/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "23/11/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "24/11/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "25/11/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "26/11/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "27/11/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "28/11/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "29/11/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "30/11/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "01/12/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "02/12/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "03/12/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "04/12/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "05/12/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "06/12/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "07/12/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "08/12/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "09/12/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "10/12/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "11/12/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "12/12/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "13/12/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "14/12/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "15/12/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "16/12/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "17/12/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "18/12/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "19/12/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "20/12/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "21/12/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "22/12/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "23/12/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "24/12/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "25/12/2021") {msg.reply("Dia 4 de Boss")}
        if (hoje == "26/12/2021") {msg.reply("Dia 5 de Boss")}
        if (hoje == "27/12/2021") {msg.reply("Dia de Caixa")}
        if (hoje == "28/12/2021") {msg.reply("Dia 1 de Boss")}
        if (hoje == "29/12/2021") {msg.reply("Dia 2 de Boss")}
        if (hoje == "30/12/2021") {msg.reply("Dia 3 de Boss")}
        if (hoje == "31/12/2021") {msg.reply("Dia 4 de Boss")}     
    }})
