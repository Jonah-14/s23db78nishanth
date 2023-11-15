var icecream = require('../models/icecream');
// List of all icecream
exports.icecream_list = async function(req, res) {
    try{
    theicecreams = await icecream.find();
    res.send(theicecreams);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
    try{
    theicecreams = await icecream.find();
    res.render('icecream', { title: 'icecream Search Results', results: theicecreams });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific icecream.
exports.icecream_detail =  async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await icecream.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle icecream create on POST.
exports.icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"icecream_type":"goat", "cost":12, "size":"large"}
    document.flavor = req.body.flavor;
    document.type = req.body.type;
    document.rating = req.body.rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }; 
// Handle icecream delete form on DELETE.
exports.icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle icecream update form on PUT.
exports.icecream_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await icecream.findById( req.params.id)
    // Do updates of properties
    if(req.body.flavor)
    toUpdate.flavor = req.body.flavor;
    if(req.body.type) toUpdate.type = req.body.type;
    if(req.body.rating) toUpdate.rating = req.body.rating;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle icecream delete on DELETE.
exports.icecream_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await icecream.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.icecream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await icecream.findById( req.query.id)
    res.render('icecreamdetail',
    { title: 'icecream Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a icecream.
// No body, no in path parameter, no query.
// Does not need to be async
exports.icecream_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('icecreamcreate', { title: 'icecream Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
