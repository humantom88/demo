db.createUser({
  user: 'Test',
  pwd: 'Test',
  roles: {
    role: 'readWrite',
    db: 'cyberpunk-red-db'
  }
})
