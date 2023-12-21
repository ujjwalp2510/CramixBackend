import mongoose from 'mongoose';
const { Schema } = mongoose;

const subjectSchema = new Schema({
    name:String,
    img:String,
    year:Number,
    branch:[String],
    livesession:Object,
    importanttopics:String,
    syllabus:String,
    notes:Array,
    store:Array,
    chatId:String,
});
const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;