import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";

export default async function handler(req, res) {
    await dbConnect();
    const {id} = req.query;
    switch(req.method) {
        case 'GET':
            const wiki = await GoldenWiki.findById(id);
            res.send(wiki);
            break;
        case 'PATCH':
            const updatedWiki = await GoldenWiki.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.send(updatedWiki);
            break;
        case 'DELETE':
            await GoldenWiki.findByIdAndDelete(id);
            res.status(204).send();
            break;
        default:
            res.send()
            break;
    }
}