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

// Solution
function showReviewTotal (value : number, reviewer: string) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer
}

showReviewTotal(reviews.length, reviews[0].name)
