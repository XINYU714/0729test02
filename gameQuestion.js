const gameQuestion = {
    key:'gameQuestion',
 preload:function ()
{
    this.load.image('q0','src/q0.webp');
    this.load.image('q1','src/q1.webp');
    this.load.image('q2','src/q2.webp');
    this.load.image('q3','src/q3.webp');
    this.load.image('q4','src/q4.webp');
    this.questioArr=[];
},

 create: function ()
{
    const question=
    [
        {name:'q0',x:vw/2,y:vh/2},
        {name:'q1',x:vw/2,y:350},
        {name:'q2',x:vw/2,y:450},
        {name:'q3',x:vw/2,y:550},
        {name:'q4',x:vw/2,y:650},
    ]
    for(let i=0;i<5;i++)
    {
        this['q'+ i] = this.add.image(question[i].x, question[i].y, question[i].name);
        this.questioArr.push(this['q'+i]);
        this['q'+ i].setInteractive();
    }
   this.q4.on('pointerdown',() => {
    this.scene.start('pass')
  }); 

 const right=(GameObject)=>
   {
       GameObject.on('pointerdown',() =>{
        this.scene.start('failGame')
      }); 
    }
   right(this.q3);
   right(this.q2);
   right(this.q1);

// this.q1.on('pointerdown',() => {
//     this.scene.start('failGame')
//   }); 
},
    // let mainBtn = this.add.image(vw / 2, vh / 2, 'mainBtn');
        
    //     mainBtn.setInteractive();
    //     mainBtn.on('pointerdown', () => this.scene.start('gamePlay'))
    


 update: function()
{

}

}