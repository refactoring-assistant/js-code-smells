class Media {
  constructor(name, duration, creator){
    this.name = name;
    this.duration = duration;
    this.creator = creator;
  }

  play(){
    console.log("Playing media");
  }

  stop(){
    console.log("Stopping media");
  }

  rewind(){
    console.log("Rewinding media");
  }

  fastForward(){
    console.log("Fast-forwarding media");
  }
}

class Book extends Media{
  constructor(name, pages, author){
    super(name);
    this.pages = pages;
    this.author = author;
  }

  // play and stop methods are not meaningful to a Book, hence refusing the bequest from Media.
  read(){
    console.log("Reading book");
  }
}