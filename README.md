# Rancid Tomatillos

## Abstract:
Rancid Tomatillos is a React Application that retrieves data from an API about popular movies. Using this data, the app displays thumbnail images of movies and allows a user to select a movie and get additional details. The app also provides access to YouTube trailers of movies if they are available in the data from the API.

## Installation Instructions:
[Rancid Tomatillos](https://github.com/Marisa5280/rancid-tomatillos) works in a browser, but if you would like to build your own version, you can clone the repository to your local machine as follows:

1. Go to the [Rancid Tomatillos](https://github.com/Marisa5280/rancid-tomatillos).

2. Select the "fork" option on the upperright and follow the prompts to save a fork to your GitHub account:

![Fork Option in GitHub](https://user-images.githubusercontent.com/7227063/277196427-bbee184e-de22-4912-9051-f7daa8e65e8c.png)

3. Once you have forked the repository, choose the "Code" drop down to copy the SSH key for cloning:

4. Open your preferred command-line interface tool (e.g. Terminal) and create a directory where you would like to clone the repository.

5. Change directories into the directory your created.

6. Without the brackets, type [git clone], type a space, then use Command-v on a Mac, or Control-v on PC/Android to past in the SSH key you copied in step 3.

## Technologies used to build this app:
- HTML
- CSS
- JavaScript
- React JavaScript Library
- Router
- Cypress
- The Paciello Group, Coulour Contrast Analyser for testing color contrast
- Git / Github
- Github Project
- VS Code

## Preview of App:

### Mobile View of Movie Thumbnails on the Home Page
![Rancid Tomatillos Mobile Home Page](https://user-images.githubusercontent.com/7227063/277197910-99b3e264-c1b6-47b5-bde0-1b2407c78de8.png)

### Mobile View of Single Movie Details:
![Rancid Tomatillos Mobile Movie Detail Page](https://user-images.githubusercontent.com/7227063/277197818-5b83a2f6-eff5-4eca-b849-ede8f0150117.png)

[Rancid Tomatillos Video Clip](https://www.loom.com/share/848f7bd814c94498b689a6ae20094005?sid=7c7ec20f-5987-467c-bc33-4544de18bb24)

[Rancid Tomatillos Deployed App](https://rancid-tomatillos-mj.vercel.app/)

## Context:
The IdeaBox project was assigned in the fourth week of Mod 1, and the alloted time to complete this project was about 5 days. The project was assigned as a group project, with groups consisting of 3 or 4 members. All members were front end, Mod 1 students at Turing. 

Rancid Tomatillos is a front end development project of the Turing School of Software and Design. It is assigned during Module 3 of the program. Students are paired together on teams and are given 1.5 weeks to complete the requirements for a minimally viable product. 

## Contributors:
Marisa Wyatt [marisa5280](https://github.com/Marisa5280)
Jan McSorle [jmcsorle](https://github.com/jmcsorle)

## Learning Goals:
The learning goals of this project included: 
- Gain competency with React fundamentals
- Test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

## Wins + Challenges:

### Wins

- React, Router, and Cypress are new to us - this is part of what we are learning. We feel like this was a win for us because we were able to work together to research solutions and implement them.
- We considered the user experience from the beginning of our design, including users with various types of disabilities. We made design decisions based on user needs. For example, knowing that screen reader users navigate by heading, we made the decision to add heading level 2 text to each thumbnail that listed the title of the movie. This will allow a blind user to pull up a heading list and search for a movie from that list.
- We worked very well together as a team. We each had different backgrounds and different levels of understanding. We took the time to teach each other and to talk through our code. We did a lot of paired programming and problem-solving together.
- We learned a lot about Cypress from our Choose Your Own Adventure portion of the project. Here are some examples of what we learned:
    - how to make a custon command:
    ```Cypress.Commands.add("tab", () => {cy.focused().trigger("keydown", { keyCode: 9, which: 9 }); });```;
    - instituted `.go`, to immitate using the browser navigation;
    - tried using `.eq('#')` to identify specific positions in an array; this seemed to work in our Cypress test, but we could not get the keyboard testing functionality to work from the rest of the test. 
    - we learned about `$el`, which is a variable you can use with the `.should()` callback function - it represents the element(s) selected by the preceding command.
    - we tried making a keypress using `type('{key}')`;
    - we looked at the `{enter}` sequence defined in the [Cypress Docs](https://docs.cypress.io/api/commands/type);
    - we investigated `.focus` to set a focus element, and we also looked at `.focused` to check if the current DOM element is in focus. 

### Challenges

- For our "Choose Your Own Adventure" part of the project, we wanted to dive more deeply into Cypress testing to use Cypress commands that we had not used before. We targeted user tests that would focus on accessibility for users with disabilities. We learned a lot about Cypress, but also found that there are significant limitations in what can be tested with Cypress. Here's a summary of what we did and what we learned:
    - Marisa did extensive research on ways we could try to test with a keyboard. What we found from that research is that there have been bugs posted with Cypress since at least 2020 regarding not being able to trigger actions with tab or the enter key. we suspect this may be part of the problem we were experiencing.
    - One of the things we were hoping to test with Cypress was whether pressing an enter key on a focused element would result in the desired outcome. We were not successful in getting this to work. Upon further reflection, we realized that automated accessibility testing tools such as axe have not implemented automated keyboard testing, so there may be technology limitations that prevent this at this time.
    - Things we learned about Cypress are listed in our "Wins" section above. The code below is an example of some of the methods we tried to write tests for when attempting to automate testing for keyboard operability:
    ```//it('Can navigate using keyboard key events', () => {
        // const containers = cy.get(".card-container");
        // const first = cy.get(".card-container:nth-child(0)");
        // console.log('containers', containers)
        // const second = cy.get(".card-container:nth-child(1)");
        // expect(first.focus().tab().focused()).to.equal(second);
        // cy.get('a[href*="questions"]').click()
        //cy.get('.card-container').eq(0).focus().tab().focused().then($el => expect($el[0]).to.equal(cy.get('.card-container').eq(1)))
        ('eq', cy.get('.card-container').eq(1))
        // })```
