Ring Migration App using Node.js and Express.js
This Node.js and Express.js application solves the ring migration problem, where rings on Plate A need to be moved to Plate B with the help of Plate C, following specific rules.

Clone the repository:
git clone https://github.com/sandygit17/ring-migration-app-nodejs.git
cd ring-migration-app-nodejs

Install dependencies:
npm install

Running the Application
npm start

The application will be running at http://localhost:3000.

Endpoints
1. Migrate Rings
    Endpoint: /migrateRings/:N
    Method: GET
    Example Request: http://localhost:3000/migrateRings/3

Example Response:
    json
    [
        "1: A to B",
        "2: A to C",
        "1: B to C",
        "3: A to B",
        "1: C to A",
        "2: C to B",
        "1: A to B"
    ]

Code Explanation
app.js
    The main file that sets up the Express.js server and defines the /migrateRings/:N endpoint.

ringMigrator.js
    Contains the migrateRings function, a recursive solution to move rings from one plate to another following the specified conditions.

Repository Link
https://github.com/sandygit17/ring-migration-app-nodejs