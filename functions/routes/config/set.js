const auth = require("../../utils/auth")
const {admin, db} = require("../../utils/firebase")

const set = async (req, res) => {
    try {
        const idToken = await auth.getIdToken(req)
        const decodedClaims = await admin.auth().verifyIdToken(idToken)
        const uid = decodedClaims.uid

        console.log(req.body)

        // due to the way firebase works,
        // we can't store array directly in the database

        // cache the maps array of objects
        const tmpMaps = req.body.maps
        req.body.maps = []

        const r = await db.collection("config").doc(uid).set(req.body)
        // add the maps array of objects to the config document
        for (let i = 0; i < tmpMaps.length; i++) {
            const map = tmpMaps[i]
            await db.collection("config").doc(uid).update({
                maps: admin.firestore.FieldValue.arrayUnion(map),
            })
        }

        return res.status(200).send(r)
    } catch (err) {
        console.error(err)
        return res.status(500).send(err)
    }
}

module.exports = set
