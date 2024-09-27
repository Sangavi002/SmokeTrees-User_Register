const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    state:{type: String, required: true},
    zip: {type: String, required: true},
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{
    versionKey: false
});

const AddressModel = mongoose.model('Address', addressSchema);

module.exports = AddressModel
