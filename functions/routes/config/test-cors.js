const testCors = async (req, res) => {
    try {
        res.set("Access-Control-Allow-Origin", "*")
        return res.send("")
    } catch (err) {
        console.error(err)
        return res.send("error")
    }
}

module.exports = testCors
