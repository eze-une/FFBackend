const mongoose = require("mongoose");
const Education=require('./Education');

const InstructorSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
      },
      middle_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
      },
      place_of_birth: {
        type: String,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      passport_number: {
        type: String,
        unique: true,
        required: true,
      },
      education: {
        type: String,
        required: true
      },
      experience: {
        type: String,
        required: true
      },
      coach_phone_one: {
        type: String,
      }, 
      educations: {
        type: [Education],
        required: true,
      },

},
    {
        timestamps: true,
    });


InstructorSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    },
};

module.exports = mongoose.model('Instructor', InstructorSchema)
