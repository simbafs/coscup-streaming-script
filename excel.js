const data = require('./session.json')

const sessiontype = data.session_types.reduce((obj, current) => {
    obj[current.id] = current.zh.name
    return obj
}, {})

// sort by session type
function compareString(a, b) {
    if (a < b) //sort string ascending
        return -1
    if (a > b)
        return 1
    return 0 //default return value (no sorting)
}

data.sessions.sort((a, b) => compareString(a.type, b.type))

// data.sessions.sort((a, b) => {
//     let dataA = new Date(a.start)
//     let dataB = new Date(b.start)
//
//     return dataA.getDate() - dataB.getDate()
// })

st = ''

console.log("日期, 教室, 議程id, 社群id, 社群, 議程名稱, 影片網址")

const newData = {
    day1: {},
    day2: {},
}

// 7/29
for (let i = 0; i < data.sessions.length; i++) {
    const s = data.sessions[i]
    const date = new Date(s.start)

    if (date.getDate() !== 3) continue

    if (st !== s.type) {
        console.log()
        st = s.type
    }

    console.log(`"${date.getMonth() + 1}/${date.getDate()}", "${s.room}", "${s.id}", "${s.type}", "${sessiontype[s.type]}", "${s.zh.title}"`)

    newData.day1[s.room] = [...newData.day1[s.room] || [], s]
}

// 7/30
for (let i = 0; i < data.sessions.length; i++) {
    const s = data.sessions[i]
    const date = new Date(s.start)

    if (date.getDate() !== 4) continue

    if (st !== s.type) {
        console.log()
        st = s.type
    }

    console.log(`"${date.getMonth() + 1}/${date.getDate()}", "${s.room}", "${s.id}", "${s.type}", "${sessiontype[s.type]}", "${s.zh.title}"`)
    newData.day2[s.room] = [...newData.day2[s.room] || [], s]
}

// console.log(JSON.stringify(newData, null, 2))
