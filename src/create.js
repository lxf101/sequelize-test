const {User, Blog} = require('./model')

!(async function (){
    // create user
    // const zhangsan = await User.create({
    //     username: 'zs',
    //     password: '123',
    //     realname: 'zhangsan'
    // });
    // console.log(zhangsan.dataValues);

    const blog = await Blog.create({
        title: 'blog333',
        content: 'content333',
        author: 'zhangsan'
    })
    console.log(blog.dataValues);
})()

