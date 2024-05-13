import { B as Browser } from "../browser-polyfill.js";
import { M as Messages } from "../messages.js";
console.log("ofscreen");
Browser.runtime.onMessage.addListener((msg) => {
  console.log("ofscreen message");
  if (msg.message == Messages.PlayAudio) {
    if (msg.offscreen == void 0)
      return;
    playAudio(msg.sound);
  }
});
function playAudio(sound) {
  const audio = document.querySelector("audio");
  if (!audio)
    return;
  const path = Browser.runtime.getURL(`../assets/pomodoro-sounds/${sound}`);
  audio.src = path;
  audio.volume = 1;
  audio.play();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2NyZWVuLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb2Zmc2NyZWVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcyc7XHJcblxyXG5jb25zb2xlLmxvZygnb2ZzY3JlZW4nKTtcclxuXHJcbkJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobXNnID0+IHtcclxuICBjb25zb2xlLmxvZygnb2ZzY3JlZW4gbWVzc2FnZScpO1xyXG4gIGlmIChtc2cubWVzc2FnZSA9PSBNZXNzYWdlcy5QbGF5QXVkaW8pIHtcclxuICAgIGlmIChtc2cub2Zmc2NyZWVuID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXlBdWRpbyhtc2cuc291bmQpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291bmQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKTtcclxuICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHBhdGggPSBCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGAuLi9hc3NldHMvcG9tb2Rvcm8tc291bmRzLyR7c291bmR9YCk7XHJcbiAgYXVkaW8uc3JjID0gcGF0aDtcclxuICBhdWRpby52b2x1bWUgPSAxO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxRQUFRLElBQUksVUFBVTtBQUV0QixRQUFRLFFBQVEsVUFBVSxZQUFZLENBQU8sUUFBQTtBQUMzQyxVQUFRLElBQUksa0JBQWtCO0FBQzFCLE1BQUEsSUFBSSxXQUFXLFNBQVMsV0FBVztBQUNyQyxRQUFJLElBQUksYUFBYTtBQUFXO0FBRWhDLGNBQVUsSUFBSSxLQUFLO0FBQUEsRUFDckI7QUFDRixDQUFDO0FBRUQsU0FBUyxVQUFVLE9BQWU7QUFDMUIsUUFBQSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLE1BQUksQ0FBQztBQUFPO0FBRVosUUFBTSxPQUFPLFFBQVEsUUFBUSxPQUFPLDZCQUE2QixLQUFLLEVBQUU7QUFDeEUsUUFBTSxNQUFNO0FBQ1osUUFBTSxTQUFTO0FBQ2YsUUFBTSxLQUFLO0FBQ2I7In0=
