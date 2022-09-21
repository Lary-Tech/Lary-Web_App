const auth = require("../../utils/auth")
const {admin, db} = require("../../utils/firebase")

const defaultConfig = {
    basic: {
        guess: false,
        stopDead: false,
    },
    attackResponse: "回村",
    hpLowBound: {
        value: 10,
        press: "7",
    },
    mpLowBound: {
        value: 10,
        press: "6",
    },
    potionLowBound: {
        value: 50,
        press: "auto",
    },
    maps: [],
}

const get = async (req, res) => {
    try {
        const idToken = await auth.getIdToken(req)
        const decodedClaims = await admin.auth().verifyIdToken(idToken)
        const uid = decodedClaims.uid

        const doc = await db.collection("config").doc(uid).get()

        const user = await db.collection("users").doc(uid).get()
        if (user.data().type === "無") {
            return res.status(500).send(null)
        }

        if (!doc.exists) {
            await db.collection("config").doc(uid).set(defaultConfig)

            return res.status(200).send(defaultConfig)
        } else {
            return res.status(200).send(doc.data())
        }
    } catch (err) {
        return res.status(500).send("error")
    }
}

module.exports = get
