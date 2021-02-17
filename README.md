# Secure-Password-Generator
## Description
This project aims to create an application using Javascript for generating a secure password string given specified criteria. It will be capable of generating passwords with:
- 8-128 characters
- Mixed case alphabetic characters
- Numeric characters
- Special characters

The application allows you to copy the generated text by clicking the textbox it appears in.

## Table of Contents
1. [Deployment](#Deployment)
2. [Usage](#Usage)
3. [Functionality](#Functionality)
4. [Upcoming](#Upcoming)
5. [Credit](#Credit)

## Deployment
To view the deployed and current project: https://accoon.github.io/Secure-Password-Generator/

## Usage
When you click the button, it will prompt you for the criteria of the password you want to generate: first with a prompt to input how long the password should be with an acceptable range of 8-128 characters. 8 is the default value.

![length-input-example](assets/lengthExample.png)

After validating to make sure the user entered a number within range, user will then be presented a series of confirms to determine what characters to use in generating the password.

![character-confirm-example](assets/characterConfirm.png)

After making sure that the user has chosen at least one set of characters to generate from, the application will generate a random string of the chosen characters to the given length and will display the results in the textbox on the page.

![generated-example](assets/passwordExample.png)

Once a password has been generated for the first time, text will also appear to indicate that clicking on the textbox will copy the generated text to your clipboard for easy use.

## Functionality
As the user selects the types of characters to include in generating their password, each type of character added to the pool will also randomly generate a character of that character type and pre-load it into the password. Once the character pool is completed, it will select additional random characters from the pool until the password is of the desired length.

To prevent the pre-loaded characters from always being at the start of the password, the generated string is split into an array. Elements from the array are randomly selected using the splice method to remove from the array and create a new, shuffled string that will be displayed in the textbox as the final password.

## Upcoming
Currently, the application gathers all input via browser prompts and confirm statements. The next update will refactor to include these inputs as options on the page that the user can select before clicking the Generate button.

## Credit
The HTML, CSS and Javascript at the current stage were derived from code provided by Trilogy Education Services, LLC, a 2U, Inc. brand.