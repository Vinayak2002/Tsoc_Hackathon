const express = require('express');
const router = express.Router();

const {homeRoute, form1Route, form2Route, form3Route} = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description: for home route
 * @method: GET /
 */
router.get('/', homeRoute)

/**
 * @description: for home route
 * @method: POST /
 */
router.post('/', homeRoute)

/**
 * @description: for form1 route
 * @method: GET /form1
 */
router.get('/form1', form1Route)

/**
 * @description: for form2 route
 * @method: POST /form2
 */
router.post('/form2', form2Route)

/**
 * @description: for form3 route
 * @method: POST /form3
 */
router.post('/form3',form3Route)

//API
router.post('/api/form-1', controller.create_1)
router.get('/api/form-1', controller.create_1)

router.post('/api/form-2', controller.create_2)
router.get('/api/form-2', controller.create_2)

router.post('/api/form-3', controller.create_3)
router.get('/api/form-3', controller.create_3)

// router.get('/api/users', controller.find)
// router.get('/api/users', controller.find_one)

module.exports = router;