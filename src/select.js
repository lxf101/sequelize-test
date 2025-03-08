const Sequelize = require('sequelize')
const {User, Blog} = require('./model')

!(async function (){
    // const zhangsan = await User.findOne({
    //     where: {
    //         username: 'zs',
    //         password: '123'
    //     }
    // });
    // if(zhangsan){   
    //     console.log(zhangsan.dataValues);
    // }

    const blogList = await Blog.findAll({
        where: {
            author: 'zhangsan',
            title: {
                [Sequelize.Op.like]: '%blog%'
            }
        },
        order: [
            ['id', 'desc'] // order by id desc
        ]
    })
    console.log(blogList.map(item => item.dataValues));
})()

