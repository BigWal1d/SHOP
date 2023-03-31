exports.errorPage =((req,res,next)=>{
    res.status(404).render('404', {pageTitle:'ERROR',path:'ERROR'})
    // res.status(404).render('404', {pageTitle:'ERROR'})
}) 

