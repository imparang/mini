import auth from '../utils/auth.js'
import router from '../routes/index.js'
import store from '../store/index.js'

router.beforeEach(async () => {
  try {
    const user = await auth()
    console.log(user, 'guards')
    store.commit('ASSIGN_STATE', {
      currentUser: user
    })
  } catch (e) {
    console.log(e.response.data)
  }
})
