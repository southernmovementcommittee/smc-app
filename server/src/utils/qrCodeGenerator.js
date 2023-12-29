const QRCode = require('qrcode');

const generate = async (data) => {
    try {
        return await QRCode.toDataURL(data);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    generate
}