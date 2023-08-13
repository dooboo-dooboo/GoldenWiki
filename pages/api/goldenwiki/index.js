import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";
import mongoose from 'mongoose';

export default async function handler(req, res) {
    await dbConnect();
    console.log(GoldenWiki);

    switch (req.method) {
        case 'POST':
            const newWiki = await GoldenWiki.create(req.body);
            res.status(201).send(newWiki);
            break;
        case 'GET':
            const wiki = await GoldenWiki.find();
            res.send(wiki);
            break;
        default:
            res.status(404).send();
    }
}