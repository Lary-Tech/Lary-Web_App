const auth = require("../../utils/auth")
const {admin, db} = require("../../utils/firebase")

const set = async (req, res) => {
    try {
        const idToken = await auth.getIdToken(req)
        const decodedClaims = await admin.auth().verifyIdToken(idToken)
        const uid = decodedClaims.uid

        const user = {
            name: req.body.name,
            email: decodedClaims.email,
        }

        const r = await db.collection("users").doc(uid).update(user)

        return res.status(200).send(r)
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = set
