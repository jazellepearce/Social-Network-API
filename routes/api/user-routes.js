const router = require('express').Router();

const {
    createUsers,
    getAllUsers,
    getUsersById,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

route.route('/').get(getAllUsers).post(createUsers);


route.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router;