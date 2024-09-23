const pal ={
    index:(req, res)=>{
        res.render('index');
    },

    about:(req, res)=>{
        res.render('about');
    },

    prod:(req, res)=>{
        res.render('prod');
    },

    contact:(req, res)=>{
        res.render('contact');
    },
    blog:(req, res)=>{
        res.render('blog');
    },

    features:(req, res)=>{
        res.render('features');
    },

    testimony:(req, res)=>{
        res.render('testimony');
    },

    error:(req, res)=>{
        res.render('error');
    },
}

module.exports = pal;