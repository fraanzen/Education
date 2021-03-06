const express = require("express");
const router = express.Router()

get = (req, res, next) => {
  var query;
  if(req.query.username) {
    query = req.models.User.findOne({username: req.query.username})
  }
  else
  {
    query = req.models.User.find()
  }

  query.exec().then((user) => {
      return res.send(user);
    }).catch((error) => next(error))
}

post = (req, res, next) => {
  req.models.User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      geo: {
        lat: req.body.address.geo.lat,
        lng: req.body.address.geo.lng,
      }
    }
  }).then((user) => {
    return res.status(201).send(user)
  }).catch((error) => next(error))
}

getById = (req, res, next) => {
  req.models.User.findById(req.params.id).then((user) => {
    return res.send(user);
  }).catch((error) => next(error))
}

deleteById = (req, res, next) => {
  req.models.User.findByIdAndDelete(req.params.id).then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

put = (req, res, next) => {
  req.models.User.updateOne({_id: req.params.id},
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        geo: {
          lat: req.body.address.geo.lat,
          lng: req.body.address.geo.lng,
        }
      },
    },{
     new: true,
     upsert: true,
     runvalidators: true,
    }).then((status) => {
      if (status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else 
        res.status(204)
    res.send()
    }).catch((error) => next(error))
}

const patch = (req, res, next) => {
  req.models.User.findByIdAndUpdate(req.params.id,
  { 
    $set: req.body
  },
  {
    returnNewDocument: true,
  }).then((user) => {
    res.send(user)
  }).catch((error) => next(error))
}

router.post("/", post)
router.get("/", get)
router.get("/:id", getById)
router.delete("/:id", deleteById)
router.put("/:id", put)
router.patch("/:id", patch)

module.exports = router