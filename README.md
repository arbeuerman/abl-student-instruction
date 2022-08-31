# Student Instructional Time -- Abl Code Challenge

## Running the app

### Package versions

- node version = 14.17.3
- npm version = 6.14.13

### Start app

1. Clone the repository.
2. Navigate to folder _abl-student-instructional-time_.
3. Run `npm ci` in terminal to ensure packages up to date. Ex: axios used for API calls.
4. Enter command `npm start`.

## Testing

1. Open a new terminal window.
2. Run `npm test` to run tests.
3. Might have to enter `a` to run all tests.

## Additional Notes

### What to improve

- more test coverage, especially for the API file
- security: storage of the token, probably somewhere not pushed to git, perhaps implement some kind of login
- as project grows, might use some type of component library like material-ui
- handle errors (StudentNameInput line 26, StudentMeetingTime line 21)

### Important info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
