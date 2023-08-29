import User from '../../../models/userSchema'
import dbConnect from "../../../lib/dbconnect";
dbConnect();

async function handler(req, res) {

    if (req.method === "POST") {
        try {
            const { uid, roll,username,email, image, github, linkedIn, insta, bio, branch, yearofgraduation, hostel, room, phone } = req.body;
            const user_instance = await User.updateOne({uid:uid},{
                uid: uid,
                username:username,
                image:image,
                email:email,
                roll: roll,
                github: github,
                linkedIn: linkedIn,
                insta: insta,
                bio: bio,
                branch: branch,
                yearofgraduation: yearofgraduation,
                hostel: hostel,
                room: room,
                phone: phone

            },{upsert:true});
            res.status(200).json({ message: "user Added", Status: "Success" });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.status(400).send(response);
        }
    }
    if (req.method === "GET") {
        const { uid } = req.query;
        try {
            const user_instance = await User.find({uid:uid});
            res.status(200).json({
                message: "User  fetched",
                Status: "Success",
                users: user_instance,
            });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.send(response).status(400);
        }
    }
 
}

export default handler;
