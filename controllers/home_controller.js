//  syntax to write actions for controller =>
//
//  module.exports.actionName = function(req, res) {}


module.exports.home = function(req, res) {

    return res.end('<h1>Express is up for social media application</h1>')
}