// let age: number = 100
// let firstName: string = 'Angela'
// let busy: boolean = true


// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers


// const button = document.querySelector('.button')
// const firstInput = document.querySelector('#first-input') as HTMLInputElement
// const secondInput = document.querySelector('#second-input') as HTMLInputElement
// export const screen = document.querySelector('.screen')
 
// function addNumbers(a: number,b: number) {
//      screen.innerHTML = (a + b).toString()
// }
 
// button.addEventListener('click', () => 
//     addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))


// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.
// : string

// const reviewTotalDisplay = document.querySelector('#reviews')

// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: false,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     },
// ]

// // Solution
// function showReviewTotal (value : number, reviewer: string) {
//     reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer
// }

// showReviewTotal(reviews.length, reviews[0].name)

// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.

// const reviewTotalDisplay = document.querySelector('#reviews')


// const reviews = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: true,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: false,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: true,
//         date: '27-03-2021'
//     },
// ]

// // Solution
// function showReviewTotal (value : number, reviewer: string, isLoyalty: boolean) {
//     const iconDisplay = isLoyalty ? '*' : ''
//     reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + iconDisplay
// }


// showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)




const you = {
    userName: 'Bobby',
    isReturning: true,
}


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}

populateUser(you.isReturning, you.userName)


