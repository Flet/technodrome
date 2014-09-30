var Hapi = require('hapi'),
    randoService = require('./randoService.js')

var server = Hapi.createServer('0.0.0.0', 8081)

server.pack.register([{
    plugin: require('good'),
    options: {
        subscribers: {
            'console': ['ops', 'request', 'log', 'error'],
            'http://localhost/logs': ['log']
        }
    }
}, {
    plugin: require('revisit-mutagen'),
    options: {
        moreSamples: ['face.jpg'],
        glitches: {
            trippyshift: require('trippyshift'),
            butts: require('butts-gm'),
            echoplease: function(buffer, callback) {
                // you can just write your own 'mutator' inline too!
                callback(null, buffer)
            },
            rando: {
                glitch: randoService,
                rawPayload: true
            }
        }
    }
}], function(err) {
    if (err) throw err
    server.start(function() {

        // list out all the routes for verification
        server.table().forEach(function(row) {
            console.log(server.info.uri + row.path + ' (' + row.method + ')')
        })

        console.log('technodrome server started @', server.info.uri)
    })

})
