import mongoose, { mongo } from "mongoose";

const wikiInfo = new mongoose.Schema(
    {
        title: {type: String, default:''},
        content: {type: String, default: ''}
    }, 
    {
        timestamps: true,
    },
);

mongoose.models = {};

const GoldenWiki = mongoose.model('GoldenWiki', wikiInfo);

export default GoldenWiki;