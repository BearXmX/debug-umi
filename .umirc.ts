export default {
  npmClient: 'npm',
  routes: [
    { path: '/', component: 'index' },
    { path: '/user', component: 'user' },
  ],
  plugins: ['@umijs/plugins/dist/dva'],
  dva: {},
}
