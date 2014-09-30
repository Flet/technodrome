var Hapi = require('hapi')

var server = Hapi.createServer('0.0.0.0', process.env.PORT || 8080)

server.pack.register({
    plugin: require('revisit-mutagen'),
    options: {
        moreSamples: ['face.jpg'],
        glitches: {
            trippyshift: require('trippyshift'),
            butts: require('butts-gm'),
            rando: {
                glitch: require('rando-revisit-service'),
                rawPayload: true,
                staticSampleJpg: 'randosample.jpg'
            },
            echoplease: function(buffer, callback) {
                // you can just write your own 'mutator' inline too!
                callback(null, buffer)
            }
        }
    }
}, function(err) {
    if (err) throw err
    server.start(function() {

        // list out all the routes for verification
        server.table().forEach(function(row) {
            console.log(server.info.uri + row.path + ' (' + row.method + ')')
        })

        console.log('technodrome server started @', server.info.uri)
    })

})
