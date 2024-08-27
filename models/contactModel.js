const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    inquiry: String,
  });
  
const ContactData = mongoose.model('Contact', contactSchema);

module.exports = ContactData;