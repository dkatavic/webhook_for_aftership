/**
* Records.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  },
	
	beforeCreate: function (values, cb) {
		if (Object.keys(values).length === 0)
			cb("no data");
		else
			cb();
    }
};

