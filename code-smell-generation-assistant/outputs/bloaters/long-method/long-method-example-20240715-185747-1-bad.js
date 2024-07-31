// AI-generated code smell for Long-Method
class MusicManager {
    constructor() {
      this.musicCollection = [];
    }
  
    addArtist(id, name, genre, album, year, song, length, label) {
      const artistToAdd = { id, name, genre, album, year, song, length, label };
      this.musicCollection.push(artistToAdd);
    }
  
    findArtist(name) {
      const artist = this.musicCollection.find((mus) => mus.name === name);
      if(artist) {
        console.log(`Name: ${artist.name}, Album: ${artist.album}, Year: ${artist.year}, Song: ${artist.song}`);
      } else {
        console.log('Artist not found');
      }
    }
  
    updateArtist(id, field, newValue) {
      const artist = this.musicCollection.find((mus) => mus.id === id);
      if(artist) {
        switch(field) {
          case 'album':
            artist.album = newValue;
            break;

          case 'song':
            artist.song = newValue;
            break;

          case 'year':
            artist.year = newValue;
            break;
        }
        console.log(`${field} updated.`);
      } else {
        console.log('Artist not found');
      }
    }
  
    deleteArtist(id) {
      const artistIndex = this.musicCollection.findIndex((mus) => mus.id === id);
      if (artistIndex !== -1) {
        this.musicCollection.splice(artistIndex, 1);
        console.log('Artist deleted.');
      } else {
        console.log('Artist not found');
      }
    }
}

const musicManager = new MusicManager();
musicManager.addArtist(1,'The Beatles','Rock','Abbey Road',1969,'Here comes the sun','3:05','EMI');
musicManager.findArtist('The Beatles');
musicManager.updateArtist(1,'song','Come Together');
musicManager.deleteArtist(1);