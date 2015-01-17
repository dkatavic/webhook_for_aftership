/**
 * RecordsController
 *
 * @description :: Server-side logic for managing records
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	Parsing: function(req, res) {

		Records.find({}).exec(function(err, results) {

			var output = [];

			while (results.length) {
				var result = results.pop();
				//custom parsing goes here
				//example:
				output.push({
					tracking_number: result.msg.tracking_number,
					slug: result.msg.slug,
					unique_token: result.msg.unique_token
				});
			}
			return res.json({
				output: output
			});
		});


	},

};