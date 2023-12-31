let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #a34e88;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#a34e88";>Artista digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
