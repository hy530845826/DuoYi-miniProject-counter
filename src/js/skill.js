var wlsk = new CreateSkill(0, 'NULL', 0, 0, 0)
var mfsk = new CreateSkill(0, 'NULL', 1, 0, 0)
import skill_data from './data/skill.json'
var SkillData = skill_data

function CreateSkill(uid, cname, style, X, Y) {
    this.UID = uid
    this.cname = cname
    this.style = style
    this.X = X
    this.Y = Y
}

function UpdateSkill(obj, uid) {
    if (uid == undefined) {
        return 0
    }
    let stylebox = SkillData[obj.style]
    let datamsg = stylebox[uid]
    for (let index in obj) {
        obj[index] = datamsg[index]
    }
}


export default {
    wlsk,
    mfsk,
    UpdateSkill
}