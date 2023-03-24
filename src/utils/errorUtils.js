export function handleErrorMessages(setErrorMessages, messageError) {
    setErrorMessages(state => ([...state, messageError]))
    setTimeout(() => {
        setErrorMessages(state => {
            state.shift()
            return [...state]
        })
    }, 2000)
}
export const validationRegexes = {
    "imageUrl": /^((https?):\/\/)?([^\s:@]+:[^\s:@]*@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([^\s\.]+\.)+[^\s]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/,
    "youtubeUrl": /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/
}