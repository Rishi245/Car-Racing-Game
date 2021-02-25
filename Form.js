class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h2");
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input = createInput("Name");
    this.button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update(player.name)
      player.updateCount(playerCount);
      this.greeting = createElement('h3');
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
