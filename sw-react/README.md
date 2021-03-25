# Features of the project

### An application that allows you to view data about the STARWARS universe: detailed information about all films, characters, planets, technology and everything else that was mentioned in the MCU.

1. View lists of everyone: movies, characters, planets
2. View detailed information (name, height, weight, race, age, size, etc.) about each entity, on a separate page
3. Viewing detailed information about the film: own and related data in the form of separate cards with a description (characters from the film, planets filmed in the film, equipment, etc.)


# Rationale for some decisions

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
 - I cannot use the local Redux storage, from which I would pull out related data, because it still may not have related data (they may not be loaded at the moment if the user has not yet visited the pages with the planets or characters on separate pages.