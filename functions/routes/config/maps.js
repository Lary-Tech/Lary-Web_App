const auth = require("../../utils/auth")
const {admin, db} = require("../../utils/firebase")

const get = async (req, res) => {
    try {
        const idToken = await auth.getIdToken(req)
        const decodedClaims = await admin.auth().verifyIdToken(idToken)
        console.log(decodedClaims)
        console.log(db)

        const result = await db.collection("maps").get()
        const maps = []
        result.forEach((doc) => {
            maps.push(doc.data())
        })

        return res.status(200).send(maps)
    } catch (err) {
        return res.status(500).send("error")
    }
}

module.exports = get
