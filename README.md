# Work Scheduler / Project Module 5

This project is based on using Javascript and other front end dev tools to create a web app to help a user schedule their day 

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Includes](#includes)
- [Contributing](#contributing)

## About

 - This website allows the user to add important events to a daily planner
 - This website only allows for one day (current day) to be edited, saved, and reloaded
 - Rows are either grey (past hours), red-orange (current hour), or green (work hours left in the day)

## Getting Started

When the page is loaded any information enterened previously for the day and stored in local storage will be accessed and the day schedule will be updated 

## Installing

No installation necessary.

## Usage

This website can be used to enter all the events for the day and organize them by time (hours). Once the user saves the event row for the specified time it is stored in local storage.
I have added a "Clear Day" button because as it stands right now the local storage will maintain over different days. Will work on this issue if necessary but right now the website fulfills all Acceptance Criteria.

## Screenshots

![Alt text](Assets/Screenshots/basic_schedule.png)
![Alt text](Assets/Screenshots/basic_later_day.png)
![Alt text](Assets/Screenshots/basic_clear_confirm.png)
![Alt text](Assets/Screenshots/basic_after_clear.png)

## Includes

 - This code uses jQuery and the following source (src) "https://code.jquery.com/jquery-3.5.1.min.js"
 - This code uses Bootstrap "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
 - This code uses ajax "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
 - This code uses special fonts "https://use.fontawesome.com/releases/v5.8.1/css/all.css" ; "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
 - This code uses dayjs "https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"

Github Repository: https://github.com/DougyShy/WorkScheduler
Githup Pages Address: https://dougyshy.github.io/WorkScheduler/

## Contributing

Clinton Scheible
- UTSA Bootcamp
- Challenge / Module 5


