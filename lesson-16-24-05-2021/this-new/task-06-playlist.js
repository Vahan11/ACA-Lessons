function Song(title, artist) {
  [this.title, this.artist] = [title, artist];
  this.isPlaying = false;
}

function Playlist() {
  this.songIndex = 0;

  this.songs = [];

  this.add = function (song) {
    this.songs.push(song);
  };

  this.play = function () {
    if (this.songs.length) {
      this.songs[this.songIndex].isPlaying = true;
      console.log(`${this.songs[this.songIndex].title} started to play.`);
    } else {
      console.log("There is no songs to play.");
    }
  };

  this.next = function () {
    // Check for not print if we first click stop then next
    if (this.songs[this.songIndex].isPlaying !== false) {
      this.songs[this.songIndex].isPlaying = false;
      console.log(`${this.songs[this.songIndex].title} stopped.`);
    }

    if (this.songIndex + 1 > this.songs.length - 1) {
      this.songIndex = 0;
    } else {
      this.songIndex += 1;
    }

    this.play();
  };

  this.prev = function () {
    // Check for not print if we first click stop then previous
    if (this.songs[this.songIndex].isPlaying !== false) {
      this.songs[this.songIndex].isPlaying = false;
      console.log(`${this.songs[this.songIndex].title} stopped.`);
    }

    if (this.songIndex - 1 < 0) {
      this.songIndex = this.songs.length - 1;
    } else {
      this.songIndex -= 1;
    }

    this.play();
  };

  this.stop = function () {
    this.songs[this.songIndex].isPlaying = false;
    console.log(`${this.songs[this.songIndex].title} stopped.`);
  };
}

const moondancer = new Song("Moondancer", "Boris Brejcha");
const earth = new Song("Eerth song", "Michael Jackson");
const angel = new Song("Angel", "Massive Attack");
const stop = new Song("Stop", "Joe Bonamassa");

const playlist = new Playlist();

playlist.add(moondancer);
playlist.add(earth);
playlist.add(angel);
playlist.add(stop);

playlist.play(); // Moondancer started. / isPlaying == true
playlist.next(); // Moondancer stopped. / isPlaying == false
                 // Earth song started. / isPlaying == true

playlist.stop(); // Earth song stopped. / isPlaying == false
playlist.play(); // Earth song started. / isPlaying == true

playlist.next(); // Angel started.      / isPlaying == true
playlist.next(); // Angel stopped.	   / isPlaying == false
                 // Stop started.	   / isPlaying == true

playlist.stop(); // Stop stopped.       / isPlaying == false
playlist.prev(); // Angel started.      / isPlaying == true

console.log(playlist.songs); // only Angel isPlaying is true
