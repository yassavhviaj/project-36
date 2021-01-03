class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }
// add food bottal count
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
// last time we fedded our dog
   getFedTime(lastFed){
     this.lastFed=lastFed;
   }
// deduse food when ever it is fedded 
   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }
// get the new food bottal
    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100; // distance between two bottals
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      // more the capsity
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}
