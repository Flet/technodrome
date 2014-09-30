var randomRevisitor = require('random-revisitor'),
	dataUriToBuffer = require('data-uri-to-buffer'),
	request = require('request')

// incomingPayload should be an object that matches http://revisit.link/spec.html

function randoService(incomingPayload, cb) {

	var buf = dataUriToBuffer(incomingPayload.content.data)

	randomRevisitor(buf.imgType, postToRandom)

	function postToRandom(err, randomUrl) {
		if (err) return cb(err)

		request({
			method: 'POST',
			json: true,
			url: randomUrl + '/service',
			body: incomingPayload
		}, function(err, response, body) {
			console.log('Posted to randomUrl ' + randomUrl)
			console.log('body ? ' + (body ? true : false))
			console.log('body.content ? ' + ((body && body.content) ? true : false))

			if (body && !body.content)
				console.error('Something went wrong connecting to: ' + randomUrl)

			if (err) return cb(err)

			return cb(null, (body && body.content) ? body : incomingPayload)
		})

	}

}



module.exports = randoService
