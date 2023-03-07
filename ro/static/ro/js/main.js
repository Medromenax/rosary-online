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
    let mystery

    switch (dayN) {
        case 1:
        case 6:
            mystery = 'Joyful Mysteries'
            break
    
        case 2:
        case 5:
            mystery = 'Sorrowful Mysteries'
            break
    
        case 3:
        case 0:
            mystery = 'Glorious Mysteries'
            break
    
        default:
            mystery = 'Luminous Mysteries'
            
    }

    return mystery
}

const setMystImg = (mysteryName) => {
    let mysteryImage

    switch (mysteryName) {
        case 'Joyful Mysteries':
            mysteryImage = "/static/ro/images/joyful_mysteries.png"
            break
        case 'Sorrowful Mysteries':
            mysteryImage = "images/sorrowful_mysteries.png"
            break
        case 'Luminous Mysteries':
            mysteryImage = "images/luminous_mysteries.png"
            break
        case 'Glorious Mysteries':
            mysteryImage = "images/glorious_mysteries.png"
            break
    }

    return mysteryImage
}

//////////////////DOM///////////////////////
const mistDay = document.getElementsByClassName('mist-day')[0]
mistDay.innerText = mystInfo()

const mistDayName = document.getElementsByClassName('mist-day-name')[0]
mistDayName.innerText = dayName()

const mystImg = document.getElementsByClassName('mist-name')[0]
mystImg.style.background = `url(${setMystImg(getMystName())}) no-repeat center`
mystImg.style.backgroundSize = 'cover'

/////////////////////CALLS//////////////////
