<h1>Mentor and Student Assigning with Database</h1>

<h4>Try Thsi Link : <a href="https://universal-flare-909192.postman.co/workspace/My-Workspace~d3a87e20-658e-45ae-8e07-1eb54ebfb0c8/collection/32502752-4e48c9ab-505f-4f00-be10-a5576e8af185?action=share&creator=32502752">Post man</a></h4>

## Mentor

* GET Get All Mentors = api/mentors
* POST Add New Mentor = api/mentors
* DELETE Delete Mentor = api/mentors/:id
* GET Mentor Student List = api/mentors/students/:mentor_id
* PUT Edit Mentor = api/mentors/:id
* GET Get One Mentor = api/mentors/:id

## Student

* GET Get All Student = api/student
* POST Add New Student = api/student
* DELETE Delete Student = api/student/:id
* GET GEt One Studnt = api/student/:id
* PUT Edit Sudent = api/student/:id

## Assign

* POST Assign multy Student = api/assign/student/:batch/mentor/:mentor_id
