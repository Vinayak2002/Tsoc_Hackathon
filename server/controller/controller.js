const { redirect } = require('express/lib/response')
const {personalDB, professionalDB, otherDB} = require('../model/model')

// Create a new census
const create_1 = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"})
    }

    const user = new personalDB({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.sex,
        religion: req.body.religion,
        mother_tongue: req.body.mtongue,
        caste: req.body.caste,
        disability_status:req.body.dstatus,
        place_of_birth: req.body.POB,
        martial_status: req.body.mstatus,
    })

    user.
    save(user).then(data => res.render('form2'))
    .catch(err => res.status(500).
    send(err.message || 'Some error occurred while creating the user'))

}
const create_2 = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"})
    }

    const user = new professionalDB({
        highest_education_level: req.body.edu_level,
        curr_emplyoment_status: req.body.curr_emplyoment_status,
        income: req.body.income,
        employment_type: req.body.employment_type,
        languages_known: req.body.languages_known,
        distance_from_work: req.body.distance_from_work,
        place_of_work: req.body.place_of_work,
    })
    user.
    save(user).then(data => res.render('form3')).
    catch(err => res.status(500).
    send(err.message || 'Some error occurred while creating the user'))

}
const create_3 = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"})
    }

    const user = new otherDB({
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        spouse_name: req.body.spouse_name,
        no_of_children: req.body.no_of_children,
        fav_sports: req.body.fav_sports,
        address: req.body.address,
        home_state: req.body.home_state,
    })
    user.
    save(user).then(data => res.render('index')).
    catch(err => res.status(500).
    send(err.message || 'Some error occurred while creating the user'))
}
// Retrieve all census data
const find = (req, res) => {
    censusDB.find()
    .then(user => res.send(user)).catch(err => res.status(500)
    .send(err.message || 'Some error occurred during retrieval'))
}

// Retrive single user from
const find_one = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found user with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving user with id " + id})
        })
    }
    else {
        res.status(500).send({ message: "Id parameter can not be empty"})
    }
}


// Update data
const update = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'Data to update can not be empty'})
    }
    const id = req.params.id
    censusDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            return res.status(404).send({message: "Can not update user with id: " + id + ". Maybe user not found."})
        }
        else {
            res.send(data)
        }
    })
    .catch(err => res.status(500).send({message: 'Some error occurred during update'}))   
}

const delete_ = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

module.exports = {create_1, create_2, create_3};