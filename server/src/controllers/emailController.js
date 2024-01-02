const qrCodeGenerator = require('../utils/qrCodeGenerator')
const emailSender = require('../utils/emailSender')

const sendEmailWithQRCode = async (req, res) => {
    try {
        const { email, data } = req.body;
        const qrCodeGenerator = await qrCodeGenerator.generate(data);

        await emailSender.send(email, qrCodeDataURL);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred');
    }
}

module.exports = {
    sendEmailWithQRCode
}