const ContactData = require("../models/contactModel");


const AddData = async (req, res) => {
    try {
      const newContact = new ContactData(req.body);
      await newContact.save();
      res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving contact', error });
    }
};  
  

const GetData= async (req, res) => {
    try {
      const contacts = await ContactData.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching contacts', error });
    }
};
  

const DeleteData= async (req, res) => {
    try {
      await ContactData.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Contact deleted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting contact', error });
    }
};
  
module.exports = {AddData, GetData, DeleteData};