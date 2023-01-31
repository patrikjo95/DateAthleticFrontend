const nodemailer = require('nodemailer');



const sendEmail = async () => {

const transporter = nodemailer.createTransport({


    service: 'gmail',
    auth: {
    user: 'athleticdate@gmail.com',
    pass: 'fzmlmejfgrgbcdfg'
  }

}); 

    const output =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style type="text/css">
            body{
                padding: 0;
                margin: 0;
                font-family: sans-serif;
            }
            @media screen and (max-width: 600px) {
                table[class="responsive-table"]{
                    width: 100% !important;
                    padding: 10px 5%;
                }
                table[class="responsive-table2"]{
                    width: 100% !important;
                }
                img[class="responsive-image"]{
                    max-width: 100% !important;
                    height: auto !important;
                }
                td[class="headline"]{
                    font-size: 22px !important;
                    background: #222;
                    color: #ffffff;
                    padding-bottom: 20px;
                }
            }
        </style>
        <title>Document</title>
    </head>
    <body>
        <center bgcolor="000000" style="margin: 0; padding: 0; background-color: #000000;">
    
            <table bgcolor="#d25f0d" style="background-color: #d25f0d;">
                <tr>
                    <td>
                        <table valign="top" style="width: 600px; min-width: 600px; border-spacing: 0; border-collapse: collapse;" width:"600" cellspacing="0" cellpadding="0" border="0"
                         bgcolor="#d25f0d" align="center">
                            <tr>
                                <td style="padding: 10px 0; background-color: #d25f0d;">
                                    
                                </td>
                            </tr>
                        </table>
                        <table valign="top" style="width: 600px; min-width: 600px; border-spacing: 0; border-collapse: collapse;" width:"600" cellspacing="0" cellpadding="0" border="0"
                        bgcolor="#d25f0d" align="center">
                            <tr>
                                <td align="center">
                                   <h1>Date <span>|</span> Athletic</h1>
                                </td>
                            </tr>
                        </table>
    
                        <table>
                            <tr>
                                <td style="padding: 20px 0;">
                                <hr style="width:800px;">
                                </td>
                            </tr>
                        </table>
                        <p>
                            Hej!
                        </p>
                        <p style="line-height: 1.8;">
                            Vi har fått en begäran om att återställa lösenordet på ditt Date | Athletic -konto. <br> Klicka på länken nedan för att återställa ditt lösenord.
                            <br>
                            <a 
                            href="#"><button style="padding:10px; border: 1px solid #222;">
                               Klicka här 
                            </button></a>
                        </p>
                        <br>
                        <p>Hälsningar, <br> Date |   
                            Athletic</p>
                    </td>
                </tr>
            </table>
        </center>
    </body>
    </html>
    `;

    const message ={
        from: "athleticdate@gmail.com",
        to:   "anuka.oyunerdene@yahoo.se",
        subject: "Har du glömt ditt lösenord?",
        html: output
    };

    const info = await transporter.sendMail(message);
    console.log("Meddelandet har skickats", info.messageId);

};
     sendEmail().then(res => {
        console.log('Det har skickats') 
    }).catch(err => console.log('fel' ,err.message));

   