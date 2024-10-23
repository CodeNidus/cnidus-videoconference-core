export default {
  debug: false,
  api_token_url: '/api/videoconference/userToken',
  webrtc_url: 'https://api.vidus.app',
  webrtc_connection: 'api.vidus.app',
  peer_secure: true,
  peer_host: 'peer.vidus.app',
  peer_port: '443',
  theme: 'default',
  mediapipe: {
    models: {
      faceDetector: 'https://codenidus.com/videoconference/models/face',
      bodySegmentation: 'https://codenidus.com/videoconference/models/selfie'
    },
    fps: 30
  },
  axios: {
    headers: {}
  },
  authorization: {
    url: '/',
    storage_token: 'cnidus.videoconference.laravel.token',
  }
}
