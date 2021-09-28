// const mongoose = require('mongoose');

// var schema = new mongoose.Schema({

//     name: { type: String },
//     age: { type: Number },
//     date_of_birth:{type: String, default:null},
//     gender: { type: String, default:null },
//     religion: { type: String, default:null },
//     mother_tongue: { type: String, default:null },
//     caste: { type: String, default:null },
//     disability_status:{type: String, default:null},
//     place_of_birth: { type: String, default:null },
//     martial_status: { type: String, default:null },
//     highest_education_level: { type: String, default:null },
//     curr_emplyoment_status: { type: String, default:null },
//     income:{ type: Number, default:null },
//     employment_type: { type: String, default:null },
//     languages_known: { type: String, default:null },
//     distance_from_work: { type: Number, default:0 },
//     place_of_work: { type: String, default:null },
//     father_name: { type: String, default:null },
//     mother_name: { type: String, default:null},
//     spouse_name:{type: String, default:null},
//     no_of_children: { type: Number, default:0 },
//     fav_sports: { type: String, default:null },
//     address: { type: String, default:null },
//     home_state: { type: String, default:null },

// })

// const censusDB = mongoose.model('censusdb', schema);

// module.exports = censusDB;



const mongoose = require('mongoose');

var schema_personal = new mongoose.Schema({
    name: { type: String },
    age: { type: String },
    gender: { type: String },
    religion: { type: String, default:null },
    mother_tongue: { type: String },
    caste: { type: String, default:null },
    disability_status:{type: String},
    place_of_birth: { type: String, default:null },
    martial_status: { type: String },
})

var schema_professional = new mongoose.Schema({
    highest_education_level: { type: String, default:null },
    curr_emplyoment_status: { type: String, default:null },
    income:{ type: Number, default:0 },
    employment_type: { type: String, default:null },
    languages_known: { type: String },
    distance_from_work: { type: String, default:null },
    place_of_work: { type: String },
})

var schema_other = new mongoose.Schema({
    father_name: { type: String, default:null },
    mother_name: { type: String, default:null},
    spouse_name:{type: String, default:null},
    no_of_children: { type: String, default:null },
    fav_sports: { type: String, default:null },
    address: { type: String, default:null },
    home_state: { type: String, default:null },
})

const personalDB = mongoose.model('personal', schema_personal);
const professionalDB = mongoose.model('professional', schema_professional);
const otherDB = mongoose.model('other', schema_other);

module.exports = {personalDB, professionalDB, otherDB};