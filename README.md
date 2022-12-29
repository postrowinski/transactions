## Introduction

Application should contain list of bank transactions, based on design structure from _design.png_ file and contain following functionalities:

1.  Transactions fetched from API, displayed in table or list.
2.  Pagination (infinite-scroll or traditional, 20 items per page)
3.  Filtering by `beneficiary` field
4.  Form for adding new transaction to the list with basic non-empty fields validation. Add input fields for:
    - amount (must be positive)
    - account number (not empty, numbers)
    - address
    - description
    - date and id should be generated when submiting form
5.  Simple communicate when success/error after form submission.
6.  Removing transaction from the list

NOTE: Points 2-5 should be done on front-end side.

## Technologies

Required technologies for development are _React_ and _Typescript_.

## How to run app

To run App, run following commands in main directory:

    npm install
    npm run server

Server api will be available on http://localhost:4000.
After api server will be availabel open new terminal tab and run command:

    npm run start

Application will be available to tests on http://localhost:3000.
