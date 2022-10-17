import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    emailAddress: String,
    phoneNumber: String
}, {
    timestamps: true,
    collection: 'contact'
});

export default mongoose.model('Contact', BusinessSchema);