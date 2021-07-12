const Admin = require('../models').Admin;
const constants = require('../constants');

const getAdminAll = (req, res) => {
    
    Admin.findAll()
       
    .then(admins => {
    
        res.json(admins)
    
    })
}

const getAdmin = (req, res) => {
    Admin.findByPk(req.params.id)
    .then(admin => {
        res.json(admin)
    })
}

const editAdmin = (req, res) => {
    Admin.update(req.body,{        
        where:{            
            id: req.params.id        
        },        
        returning: true    
    }).then(updatedAdmin => {        
        res.json(updatedAdmin)    })

}

const deleteAdmin = (req, res) => {
    Admin.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedAdmin => {
        res.json(deletedAdmin)
        
    })
}

module.exports = {
    getAdminAll,
    getAdmin,
    editAdmin,
    deleteAdmin   

}