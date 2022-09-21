const auth = require("../../utils/auth")
const {admin, db} = require("../../utils/firebase")

const get = async (req, res) => {
    try {
        const idToken = await auth.getIdToken(req)
        const decodedClaims = await admin.auth().verifyIdToken(idToken)
        const uid = decodedClaims.uid

        const doc = await db.collection("users").doc(uid).get()

        if (!doc.exists) {
            const user = {
                name: "請更新名稱",
                email: decodedClaims.email,
                type: "無",
            }
            await db.collection("users").doc(uid).set(user)
            return res.status(200).send(user)
        } else {
            return res.status(200).send(doc.data())
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send("error")
    }
}

module.exports = get
