export default function ({ route, store, redirect, error }) {
  // if user is not logged in, redirect to login page
  // if (!store.state.user) {
  //   return redirect({ name: 'login' })
  // }

  // NOTE: route.meta is an array of all meta objects from parent to child routes.
  // therefore, we have to map over each object to check, if on some page meta is defined
  // e.g. we search for requiredRole. Child route definition will here override parent route metas!
  const requiredRole = route.meta
    .filter((meta) => meta.requiredRole)
    .reduce((_, meta) => meta.requiredRole, undefined)

  console.log('[AUTH MIDDLEWARE] Required role is ', requiredRole)

  // check if user has the role. If not, show 401 page
  // if (!store.state.user.roles.includes(requiredRole)) {
  // for tests - show 401 error, if requiredRole is guest
  if (route.meta.requiredRole === 'guest') {
    error({
      statusCode: 401,
      message: 'You are not allowed to visit this page',
    })
  }
}
