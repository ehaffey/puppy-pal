let clientUrl
const clientUrls = {
  production: 'https://ehaffey.github.io/puppy-pal/#',
  development: 'http://localhost:3000/#'
}

if (window.location.hostname === 'localhost') {
  clientUrl = clientUrls.development
} else {
  clientUrl = clientUrls.production
}

export default clientUrl
