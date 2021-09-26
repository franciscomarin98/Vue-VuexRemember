import getRandomInt from "../../../helpers/getRandomInt";

export const incrementRandomInt = async({commit}) => {
    commit('SETLOADING')
    const randomNumber = await getRandomInt()
    commit('INCREMENTBYARGUMENT', randomNumber)
    commit('SETLOADING')
}