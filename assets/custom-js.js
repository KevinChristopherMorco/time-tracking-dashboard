const contentState = document.querySelector('.main-track-container')
const actionList = document.querySelector('.personal-card__user-action-list')
const itemState = document.querySelectorAll('.personal-card__user-action-list > li')
const timeframe = document.querySelectorAll('.task-card__card-content')
const title = document.querySelectorAll('.task-card__card-about > p')
const currentHour = document.querySelectorAll('.task-card__card-timeframe > p:nth-of-type(1)')
const previousHour = document.querySelectorAll('.task-card__card-timeframe > p:nth-of-type(2)')


//Fetch and parse JSON data
fetch("JSON/data.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < title.length; i++) {
            title[i].textContent = data[i].title
        }
        //Can be used with forEach or for loop
        for (let i = 0; i < currentHour.length && i < previousHour.length; i++) {
            if (data[i].timeframes.daily.current === 1 || data[i].timeframes.daily.current === 0) {
                currentHour[i].textContent = (`${data[i].timeframes.daily.current}hr`)
            } else {
                currentHour[i].textContent = (`${data[i].timeframes.daily.current}hrs`)
            }

            if (data[i].timeframes.daily.previous === 1 || data[i].timeframes.daily.previous === 0) {
                previousHour[i].textContent = (`Last day - ${data[i].timeframes.daily.previous}hr`)
            } else {
                previousHour[i].textContent = (`Last day - ${data[i].timeframes.daily.previous}hrs`)
            }
        }

        contentState.addEventListener('click', (e) => {
            document.querySelectorAll('.task-card__card-content').forEach(content => {
                content.classList.remove('task-card__card-content--click')
            })
            if (e.target.closest('.task-card') === null) {
                return
            }
            let ancestorEl = e.target.closest('.task-card').querySelector('.task-card__card-content')
            if (e.target.classList.contains('ellipsis') || e.target.tagName === 'svg') {
                ancestorEl.classList.add('task-card__card-content--click')
            }
        })

        actionList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                itemState.forEach(item => {
                    item.classList.remove('personal-card__list-item--active')
                })

                e.target.classList.add('personal-card__list-item--active')

                if (e.target.textContent === 'Daily') {
                    for (let i = 0; i < currentHour.length && i < previousHour.length; i++) {
                        if (data[i].timeframes.daily.current === 1 || data[i].timeframes.daily.current === 0) {
                            currentHour[i].textContent = (`${data[i].timeframes.daily.current}hr`)
                        } else {
                            currentHour[i].textContent = (`${data[i].timeframes.daily.current}hrs`)
                        }

                        if (data[i].timeframes.daily.previous === 1 || data[i].timeframes.daily.previous === 0) {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.daily.previous}hr`)
                        } else {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.daily.previous}hrs`)
                        }
                    }
                }
                if (e.target.textContent === 'Weekly') {
                    for (let i = 0; i < currentHour.length && i < previousHour.length; i++) {
                        if (data[i].timeframes.weekly.current === 1 || data[i].timeframes.weekly.current === 0) {
                            currentHour[i].textContent = (`${data[i].timeframes.weekly.current}hr`)
                        } else {
                            currentHour[i].textContent = (`${data[i].timeframes.weekly.current}hrs`)
                        }

                        if (data[i].timeframes.weekly.previous === 1 || data[i].timeframes.weekly.previous === 0) {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.weekly.previous}hr`)
                        } else {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.weekly.previous}hrs`)
                        }
                    }
                }
                if (e.target.textContent === 'Monthly') {
                    for (let i = 0; i < currentHour.length && i < previousHour.length; i++) {
                        if (data[i].timeframes.monthly.current === 1 || data[i].timeframes.monthly.current === 0) {
                            currentHour[i].textContent = (`${data[i].timeframes.monthly.current}hr`)
                        } else {
                            currentHour[i].textContent = (`${data[i].timeframes.monthly.current}hrs`)
                        }

                        if (data[i].timeframes.monthly.previous === 1 || data[i].timeframes.monthly.previous === 0) {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.monthly.previous}hr`)
                        } else {
                            previousHour[i].textContent = (`Last day - ${data[i].timeframes.monthly.previous}hrs`)
                        }
                    }
                }

            }
        })
    }).catch(error => {
        console.error('Something went wrong with the JSON data')
    });
