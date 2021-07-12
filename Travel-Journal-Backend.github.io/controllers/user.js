const User = require('../models').User;
const constants = require('../constants');

const getProfileAll = (req, res) => {
    
    User.findAll()
       
    .then(users => {
    
        res.json(users)
    
    })
}

const getProfile = (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.json(user)
    })
}

const editProfile = (req, res) => {
    User.update(req.body,{        
        where:{            
            id: req.params.id        
        },        
        returning: true    
    }).then(updatedUser => {        
        res.json(updatedUser)    })

}

const deleteProfile = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedUser => {
        res.json(deletedUser)
        
    })
}

module.exports = {
    getProfileAll,
    getProfile,
    editProfile,
    deleteProfile
   

}