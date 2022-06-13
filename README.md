# DailyPay Front End Engineering Challenge

[Challenge curtesy of DailyPay ](https://github.com/dailypay/react-take-home-test)

Candidate:
Artan Myrtolli

## Overview:

  This app will pull a list of award ballot categories and respective movies nominated from local server then display the nominated movies as grouped cards with a clickable button. Movie cards will be organized within the award category they were nominated for. User may select their preferred nominees and submit a ballot, displaying a confirmation modal.

## Setup : 

 1) Clone [this repo](https://github.com/dailypay/react-take-home-test) down to your local machine. CD into the directory
 2) Run `yarn install` to install/update all packages
 2) Run `yarn backend` to start local backend server
 3) In a separate terminal window/tab, run `yarn start` to start development server
 4) Visit http://localhost:3000/ in your browser to view the app


## User Functionality :


  - On page load, a list of categories and their respective nominations will be displayed
  - User may select any nominee card to submit for their own ballot by clicking the  `Nominate!` button
  - User may only select one nominee per category
  - User may omit a category by making no selection. This will result their nomination to default to 'None'
  - User may scroll to see all possible categories
  - When satisfied, user may click the `Submit All Ballots` button to finish
  - User will see a confirmation modal displaying all of their choices 
  - User may close the modal by clicking the `X` button on the top right of the modal


  ## Additional Notes : 

  - Cypress end-to-end testing has been used to test all functionality with sample data.
  - Accessibility considerations:
     - Lighthouse audit at 95%
     - Incrementing headers and alt text on all images for screen readers
     - Good contrast on all adjecent colors
     - Font choice and font size for visual impairment 
  