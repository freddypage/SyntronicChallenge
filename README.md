# SyntronicChallenge

## Installation 
Clone the project to your desired folder and run 'npm install'.
I ran my project using expo but any desired development environment should work.


## Organisation
I organised my components around the Atomic Design methodology by Brad Frost:
https://atomicdesign.bradfrost.com/chapter-2/
The Three main features of my application are:
1) selectable topics with API hookups to : https://developers.themoviedb.org/3
    - I used an external react project to simplify the modal
    - Redux connects each choice to the store; the API call comes from the Movie Gallery 'organism'
2) A Movie Gallery section that populates Movie Frames with data from each item retrieved
3) Expandable Movie Modal that displays rating, movie overview and other pertinent data.

## Fonts and Other Assets
Open Sans pulled from https://fonts.google.com/specimen/Open+Sans (loaded in app)
Images are retrieved from API (as a 'poster'

