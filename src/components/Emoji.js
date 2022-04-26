import React from 'react'

function Emoji({minutes}) {
    const interval = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️" : "🍱"

    let emojis = ''
    for (let i = 0; i < minutes; i+= interval) {
        emojis += emoji;
    }

    return emojis
}

export default Emoji



