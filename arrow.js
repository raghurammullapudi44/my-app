class A{
    play(){
        setTimeout(function(){
            console.log(this.name, " is playing")
        },0)
        setTimeout(()=>{
            console.log(this.name, " is playing")
        },0)
    }
}

var user1=new A()
user1.name="ashu"
user1.play()

