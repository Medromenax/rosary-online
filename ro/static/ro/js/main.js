//////////////FUNCTIONS/////////////////
const mystInfo = () => {
    const date = new Date()
    const year = date.getFullYear()
    const dayN = date.getDate()
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    const month = months[date.getMonth()]
    
    const mystDate = `${month} ${dayN}, ${year}`
    return mystDate
}

const dayName = () => {
    const date = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const day = days[date.getDay()]

    return day
}

const getMystName = () => {
    const date = new Date()
    const dayN = date.getDay()

    switch (dayN) {
        case 1 && 6:
            mystery = 'Joyful Mysteries'
            break
    
        case 2 && 5:
            mystery = 'Sorrowful Mysteries'
            break
    
        case 3 && 0:
            mystery = 'Glorious Mysteries'
            break
    
        default:
            mystery = 'Luminous Mysteries'
    }

    return mystery
}

//////////////////DOM///////////////////////
const mistDay = document.getElementsByClassName('mist-day')[0]
mistDay.innerText = mystInfo()

const mistDayName = document.getElementsByClassName('mist-day-name')[0]
mistDayName.innerText = dayName()

/////////////////////CALLS//////////////////
