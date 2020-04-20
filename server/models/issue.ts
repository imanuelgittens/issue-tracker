import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  name: {
    type: String,
  },
});

const IssueModel = mongoose.model('Issue', IssueSchema);

export { IssueModel };
