class Monster {
    constructor(x,y,width,height) {
        this.image = loadImage("Monster-02.png");
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
  };