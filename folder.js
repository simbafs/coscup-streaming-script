const data = require('./session.json')
const fs = require('fs')

const folder = './data'

function logErr(err, ...data) {
    if (err) {
        console.log(err, ...data)
    }
}

for (let session of data.sessions) {
    let date = (new Date(session.start)).getDate()
    let day = date === 29 ? 'day1' : 'day2'
    fs.mkdir(
        `${folder}/${day}/${session.room}/${session.zh.title.replaceAll('/', '_')}`,
        { recursive: true },
        logErr,
    )

}
