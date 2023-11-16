var wolf = require('../models/wolf');
// List of all wolfs
exports.wolf_list = async function(req, res) {
    try{
    thewolfs = await wolf.find();
    res.send(thewolfs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// Handle wolf create on POST.
exports.wolf_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: wolf create POST');
};
// Handle wolf delete form on DELETE.
exports.wolf_delete = function(req, res) {
res.send('NOT IMPLEMENTED: wolf delete DELETE ' + req.params.id);
};
// Handle wolf update form on PUT.
exports.wolf_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: wolf update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.wolf_view_all_Page = async function(req, res) {
    try{
    thewolfs = await wolf.find();
    res.render('wolf', { title: 'wolf Search Results', results: thewolfs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle wolf create on POST.
exports.wolf_create_post = async function(req, res) {
    console.log(req.body)
    let document = new wolf();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"wolf_type":"goat", "cost":12, "size":"large"}
    document.wolf_color = req.body.wolf_color;
    document.wolf_breed = req.body.wolf_breed;
    document.wolf_price = req.body.wolf_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    // for a specific Costume.
exports.wolf_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await wolf.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle Costume update form on PUT.
exports.wolf_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await  wolf.findById( req.params.id)
// Do updates of properties
if(req.body.wolf_color)
toUpdate.wolf_color = req.body.wolf_color;
if(req.body.wolf_breed) toUpdate.wolf_breed = req.body.wolf_breed;
if(req.body.wolf_price) toUpdate.wolf_price = req.body.wolf_price;
let result = await toUpdate.save();
console.log("Success " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
exports.wolf_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await wolf.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    }
        exports.wolf_view_one_Page = async function(req, res) {
            console.log("single view for id " + req.query.id)
            try{
            result = await wolf.findById( req.query.id)
            res.render('wolfdetail',
            { title: 'wolf Detail', toShow: result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
            exports.wolf_create_Page = function(req, res) {
                console.log("create view")
                try{
                res.render('wolfcreate', { title: 'wolf Create'});
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };
                exports.wolf_update_Page = async function(req, res) {
                    console.log("update view for item "+req.query.id)
                    try{
                    let result = await wolf.findById(req.query.id)
                    res.render('wolfupdate', { title: 'wolf Update', toShow: result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                   };
                   exports.wolf_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await wolf.findById(req.query.id)
                    res.render('wolfdelete', { title: 'wolf Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };
    

    