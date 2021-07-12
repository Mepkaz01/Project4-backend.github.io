const Favorite = require('../models').Favorite
const User = require('../models').User
const constants = require('../constants')

const getFavoriteAll = (req, res) => {
    
    Favorite.findAll()
       
    .then(favorites => {
    
        res.json(favorites)
    
    })
}

const getFavorite = (req, res) => {
    User.findOne({
        where: {id: req.params.id}
    }).then(res => {
        if (res != null) {
            const newFavorite = {
                userId: resp.userId,
                postId: req.body.postId,
                
            }

            Favorite.findAll({
                where: {userId: resp.id},
            }).then((response) => {
                res.send(response)
            })
          
        } else {
            res.status(constants.BAD_REQUEST).send('Error: User not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}    

const addFavorite = (req, res) => {
    User.findOne({
        where: {id: req.params.id}
    }).then(res => {
        
        if (res != null) {
            const newFavorite = {
                userId: resp.userId,
                postId: req.body.postId,
                
            }

            Favorite.create(newFavorite)
                .then(response => {
                    res.status(constants.SUCCESS).json(response)
                })
          
        } else {
            res.status(constants.BAD_REQUEST).send('Error: User not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

const deleteFavorite = (req, res) => {
    Favorite.destroy({where: {id: req.params.userId}})
        .then(response => {
            res.status(constants.SUCCESS).send('Favorite Removed.')
        })
}

module.exports = {

    getFavoriteAll,
    getFavorite,
    addFavorite,
    deleteFavorite

}