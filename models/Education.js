const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Education = Schema({
    certification_id: {
        type: String,
        required: true,
      },
      educational_state: {
        type: String,
        required: true,
      },
      date_of_certificate_concede: {
        type: String,
        required: true,
      },
      place_of_certificate_concede: {
        type: String,
        required: true,
      },
      educational_document: {
        type: String,
        required: true,
      },
})

module.exports=Education;