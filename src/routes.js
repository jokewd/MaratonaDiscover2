const express = require("express")
const routes = express.Router()
const DashboardController = require("./controllers/Dashboard")
const ProfileController = require("./controllers/Profile")
const JobController = require("./controllers/Job")


routes.get('/', DashboardController.index)

routes.get('/job', JobController.create)

routes.post('/job', JobController.save)

routes.get('/job/:id', JobController.show)

routes.post('/job/:id', JobController.update)

routes.post('/job/delete/:id', JobController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/profile', ProfileController.update)

module.exports = routes;