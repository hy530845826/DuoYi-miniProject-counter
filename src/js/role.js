var pl = new CreatePlayer(0, 'NULL', 'NULL', 0, 0, 0, 0, 0)
var el = new CreatePlayer(0, 'NULL', 'NULL', 0, 0, 0, 0, 0)
window.console.log(pl)
window.console.log(el)
import role_data from './data/role.json'
var RoleData = role_data

function CreatePlayer(uid, cname, ename, hp, atk, def, adf, spd) {
    this.UID = uid
    this.cname = cname
    this.ename = ename

    this.HP = hp
    this.ATK = atk
    this.DEF = def
    this.ADF = adf
    this.SPD = spd
}

function UpdateRole(obj, uid) {
    if (uid == undefined) {
        return 0
    }
    // $('#enemy-body').attr('class', 'stand')
    window.console.log(RoleData[uid])
    let datamsg = RoleData[uid]
    for (let index in obj) {
        obj[index] = datamsg[index]
    }
    window.console.log(obj)
}

export default {
    pl, el, UpdateRole
}