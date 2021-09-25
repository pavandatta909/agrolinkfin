import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        cropSelection: '',
        isAdmin: true
    },
    {
        name: 'xyz User',
        email: 'xyz@example.com',
        cropSelection: 'onion',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Test User',
        email: 'Test@example.com',
        cropSelection: 'fruits',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users