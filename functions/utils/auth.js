const getIdToken = (req) => {
    const authorizationHeader = req.headers.authorization || ""
    const components = authorizationHeader.split(" ")
    console.log("idToken: ", components[1])
    return components.length > 1 ? components[1] : ""
}

module.exports = {
    getIdToken,
}
