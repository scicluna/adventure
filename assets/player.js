export let player = {
    hp: 10,
    ap: 5,
    gp: 0,
    shortsword: true,
}

export let ap = player.ap
export let hp = player.hp
export let gp = player.gp

export function updateVariables(){
    hp = player.hp
    ap = player.ap
    gp = player.gp
}
