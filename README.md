Disini saya menggunakan 3 package yaitu, nodemailer, ejs, dan fs; kalian bisa lihat di code paling atas. Disana saya mencantumkan 3 package.

variabel transporter adalah variabel yang menjembatani dari pengirim ke alamat gmail yang dituju. Kok bisa? Ya, karena variabel tersebut memakai function createTransport. Jika dituliskan urutan nya maka begini urutan nya :

Pengirim - SMTP - Penerima

Kalian bisa abaikan section grouping subject, karna itu saya sendiri yang meng-grouping nya, dan jika dihilangkan itu tidak akan terjadi apa apa.

variables, adalah penamaan object object untuk bisa dipakai di html. Ini adalah keuntungan jika kita memakai package EJS.

mailOptions atau opsi email (dalam bahasa indonesia). Dari namanya saja kelihatan kalau itu adalah opsi yang dibawa saat kita mengirim email. Opsi itu membawa opsi from, to, subject, dan html.
