# Features of the project

### An application that allows you to view data about the STARWARS universe: detailed information about all films, characters, planets, technology and everything else that was mentioned in the MCU.

1. View lists of everyone: movies, characters, planets
2. View detailed information (name, height, weight, race, age, size, etc.) about each entity, on a separate page
3. Viewing detailed information about the film: own and related data in the form of separate cards with a description (characters from the film, planets filmed in the film, equipment, etc.)
4. Optimized work. Ensuring that only the necessary data for viewing is obtained (additional data is loaded only when the user really needs it)

# Rationale for some decisions

**Using Firebase services as API**

1. Firebase is used as a backend. Using a ready-made service, rather than writing your own from scratch, accelerated the development of the application.
2. Firebase Firestore - has all the necessary functionality for storing and managing data (storing, queries with parameters, receiving, receiving by subscription with real-time data updates). Large quotas for free data reading
3. Firebase Auth - ready API for registration and authorization of users, including user data validation.


**Creation of additional wrapper containers for the Main Content pages**

Creating several similar containers looks like a violation of the DRY principle, but this is a necessary measure, since at the current stage, using one universal container instead of several specialized ones would lead to problems with multiple render conditions inside the container (determining what data and values ​​are needed for each individual content page).

The creation of several similar containers is a necessary measure so that in the future the application could be improved and extended without problems and deep refactoring. Easier to build functionality in the application


**Multiple renderers in the "FilmMainContent" component**

Re-renders often occur in the component when data is received. These multiple component re-renders are due to a large number of small API requests.
Each of the requests updates the object with the currently selected movie and thus (returning a new changed movie object in the reducer) triggers the component's rerender 



**Lots of API requests for small pieces of data**

1. This is an established requirement from the customer: batch loading of data
2. The movie is updated gradually, in portions: when you open the movie, only part of the information about it is shown (the tabs are loaded one by one).
This is a little longer than if I downloaded everything at once, in one piece, but nevertheless, this is a good scenario, since the user will see at least part of the information about the movie as quickly as possible, and he does not have to wait for its full download to start reading the information



**Late loading of additional related data for a movie**

1. Additional linked data necessary for watching a movie is loaded only at the moment when I open its page, and not when I go to the section with "all movies".
I do not update the movie as a whole (I don’t replace its associated data at once), but I do it already on the movie viewing page only because this is due to the condition of the problem. "Should block as little data as possible. And load it only when explicitly required by the user."
2. It makes no sense to load and update data for all films at once, when the user can watch them only for one or two.
 - The film itself is loaded anew every time, which allows you to receive always up-to-date information about it.
 - I cannot use the local Redux storage, from which I would pull out related data, because it still may not have related data (they may not be loaded at the moment if the user has not yet visited the pages with the planets or characters on separate pages).


# Project / repository problems

After migrating the repository from the training GitLab hosting (Saritasa LLC) to personal GitHub hosting, there were problems and not all branches / commits were successfully migrated.

This issue was caused by not working correctly with several separate tasks in one mono repository (as one branch).

Feature branches were not saved in the history of the repository (project), because before transferring the repository from GitLab to GitHub, the branches were automatically merged into one master branch. As a result, feature branches ceased to exist separately.

Compelled measure: a separate branch (projectDocs) was created to add documentation and make small fixes throughout the project, identified after the code review.