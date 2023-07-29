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
    let title = session.zh.title.replaceAll('/', '_').replaceAll(':', "_")
    fs.mkdir(
        `${folder}/${day}/${session.room}/${title}`,
        { recursive: true },
        logErr,
    )

}
