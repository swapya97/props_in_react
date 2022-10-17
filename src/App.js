import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';
import Avatar from './components/Avatar';
const Style={
    
        textAlign: "center",
        fontSize: "2em",
        color: "#2d3436",
        margin: "20px 0 30px",
      
   }

function App() {
 console.log(Contact);
  return (
  <div >

      <h1 style={Style}>MY CONTACT</h1>
      <Avatar  img="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1"/>

      <Card 
       name={Contact[0].name} 
       img={Contact[0].img}  
       tel={Contact[0].tel}  
       mail={Contact[0].mail} 
      />
     
  
     <Card 
       name={Contact[1].name} 
       img={Contact[1].img}  
       tel={Contact[1].tel}  
       mail={Contact[1].mail} 
      />
     
     <Card 
       name={Contact[2].name} 
       img={Contact[2].img}  
       tel={Contact[2].tel}  
       mail={Contact[2].mail} 
      />
     
     <Card 
       name={Contact[3].name} 
       img={Contact[3].img}  
       tel={Contact[3].tel}  
       mail={Contact[3].mail} 
      />
     
    
  </div>
    
  
    );
}

export default App;
