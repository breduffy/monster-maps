#MONSTER-MAPS
Author: Breanne Duffy

## Hosted: http://breduffy.com/portfolio/monstermaps

##DESCRIPTION
This project is an experiment in a few things I wanted to learn:
1. Parallax
2. CSS Animations
3. Google Maps API
4. CreateJS and EaselJS
5. Dynamic drawing with svg

##USER STORIES
1. A user should be able to create a new monster by stamping and drawing
  Priority: 1
  Difficulty: 5
  Iteration: 1

2. A user should be able to describe the new monster
  Priority: 2
  Difficulty: 3
  Iteration: 1

3. A user should be able to enter a location in googlemaps
  Priority: 2
  Difficulty: 5
  Iteration: 2

4. A user should be able to view other monsters through googlemaps
  Priority: 3
  Difficulty: 5
  Iteration: 3

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

##APP
note: these may not match exactly as they contain plans for further development
![wireframe](https://cloud.githubusercontent.com/assets/8007927/8640675/5c583470-28ce-11e5-934a-6cf3f8fe2f0e.png)

##API
![api_models-01](https://cloud.githubusercontent.com/assets/8007927/8739516/a24c74d4-2c0a-11e5-9ec6-c2b9f3888c8d.png)
