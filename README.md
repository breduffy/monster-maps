#MONSTER-MAPS
Author: Breanne Duffy

##DESCRIPTION
This project is an experiment in a few things I wanted to learn:
1. Parallax
2. CSS Animations
3. Google Maps API
4. CreateJS and EaselJS
5. Dynamic drawing with svg

##USER STORIES
1. A user should be able to search and filter through art in a particular city.
  Priority: 1
  Difficulty: 5
    Iteration: 1

#ROUTES

WITH USER:
POST - /register
GET/PATCH/DEL - /user/:username
POST/GET/ - /user/:username/monsters
GET/PATCH/DEL - /user/:username/monsters/:id

WITHOUT USER:
GET/POST - /monsters
GET- /monsters/:id
POST/GET/ - /locations/monsters/:id



#SCHEMAS

1. Monster Schema
  * sketch: string, req
  * name: string, req
  * description: string
  * location: string, req
  * user: [user schema]

(ADD LATER)
2. User Schema
  * username: string, req
  * name: string, req
  * email: string, req
  * monsters: [monster schema]


#WIREFRAMES
note: these may not match exactly as they contain plans for further development
