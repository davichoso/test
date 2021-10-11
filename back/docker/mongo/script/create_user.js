// Get db
db = db.getSiblingDB(DBNAME)

// Create read & write user
db.createUser(
    {
      user: USER,
      pwd: USER_PASSWD,
      roles: [
         { role: "readWrite", db: DBNAME }
      ]
    }
);