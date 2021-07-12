const Post=require('../models').Post

const showAll= (req,res)=>{
    Post.findAll().then(posts =>{
        console.log(posts)
        res.json(posts)
    })
}


const getPost = (req,res) => {
    Post.findByPk(req.params.indx).then(post =>{
        res.json(post)
    })
}   

const editPost= (req,res) =>{
    Post.update(req.body,{
        where:{
            id:req.params.indx
        },
        returning: true
    }).then(updatedPost =>{
        res.json(updatedPost)
    })
}

const createPost= (req,res) =>{
    Post.create(req.body).then(
        newPost =>{
            res.json(newPost)

        }
    )
}

const deletePost = (req,res) =>{
    Post.destroy({where:{id:req.params.indx}})
    .then( deletedPost =>{
            console.log("Post Deleted")
             res.json(deletedPost)
        })
 
    }

    



module.exports={
    showAll,
    getPost,
    editPost,
    createPost,
    deletePost
}