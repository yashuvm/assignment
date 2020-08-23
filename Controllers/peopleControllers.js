const express = require('express');
const router = express.Router()
const jwtverify = require('../Jwt/jwt');
const peopleSerive = require('../Services/peopleService');


router.post('/api/people/create', jwtverify.verifyToken, jwtverify.verify, async (req, res, next) => {
if (verifys == "verify") {
try {
let Cretepeople = await peopleSerive.Create(req.body);
return res.json({ status: 200, message: "true", "result": Cretepeople });
} catch (err) {
console.log(err)
return res.json({ status: 500, message: "ERROR" });
}
} else {
res.send("Token is not valid")
}
});

router.get('/api/people/get', jwtverify.verifyToken, jwtverify.verify, async (req, res, next) => {
if (verifys == "verify") {
try {
let getepeople = await peopleSerive.GET();
return res.json({ status: 200, message: "true", "result": getepeople });
} catch (err) {
console.log(err)
return res.json({ status: 500, message: "ERROR" });
}
} else {
res.send("Token is not valid")
}
});

router.get('/api/people/get/:idPerson', jwtverify.verifyToken, jwtverify.verify, async (req, res, next) => {
if (verifys == "verify") {
try {
let people = await peopleSerive.getParticlur(req.params.idPerson);
return res.json({ status: 200, message: "true", "result": people });
} catch (err) {
console.log(err)
return res.json({ status: 500, message: "ERROR" });
}
} else {
res.send("Token is not valid")
}
});

router.put('/api/people/update/:idPerson', jwtverify.verifyToken, jwtverify.verify, async (req, res, next) => {
if (verifys == "verify") {
try {
let updatepeople = await peopleSerive.updatePeople(req.params.idPerson,req.body);
return res.json({ status: 200, message: "true", "result": updatepeople });
} catch (err) {
console.log(err)
return res.json({ status: 500, message: "ERROR" });
}
} else {
res.send("Token is not valid")
}
});

router.delete('/api/people/delete/:idPerson', jwtverify.verifyToken, jwtverify.verify, async (req, res, next) => {
if (verifys == "verify") {
try {
let deletepeople = await peopleSerive.deletePeople(req.params.idPerson);
return res.json({ status: 200, message: "true", "result": deletepeople });
} catch (err) {
console.log(err)
return res.json({ status: 500, message: "ERROR" });
}
} else {
res.send("Token is not valid")
}
});




module.exports = router






