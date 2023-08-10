import mail from "nodemailer";
import ejs from "ejs";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
// baca file template
const emailTemplate = fs.readFileSync("index.html", "utf8");

// email password kita/pengirim
let email = process.env.EMAIL;
let password = process.env.PASS; // ini password app bukan password email

// email password yang dituju
let name_to = process.env.NAME_TO; // username email yang dituju
let email_to = process.env.EMAIL_TO; //email yang dituju

const transporter = mail.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass: password,
	},
});

// Section grouping subject
const subject = "This is Me, ";
const name = "Adrianus Bagus";
const fix_title = "Your Account Has Been Disabled";
// ---------------

//variabel yang dipakai di html
const variables = {
	name_to: name_to,
};
// ---------------

// Render template dengan variabel
const html = ejs.render(emailTemplate, variables);

const mailOptions = {
	from: email, //variabel email kita
	to: email_to,
	subject: fix_title,
	html: html,
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
console.log("Success!");

// Cara ngestart nya dengan cara npm start
