const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

const send = async (email, qrCodeDataURL) => {
    const mailOptions = {
        from: '',
        to: email,
        subject: 'Your QR Code',
        html: `<p>Here is your QR Code:</p><img src="${qrCodeDataURL}" alt="QR Code"/>`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    send
}