
import './App.css';
import mongia from "./image.jpg"
import video1 from "./video1.mp4"
import './app1.css';
function App() {
  return (
    <div className="App">
      <div className='Name'>
    <div className='A' style={{border:'solid 1px black',maxWidth:'100px'}}>
<img className ='logoo'src='/logo192.png' alt='logoo'/>
<h1  className='A'>My Name Is Oussama </h1>
</div>
<br/> 
<div className='Imagee'>
<img style={{width:'600px',height:'400px'}} src="/flying.jpg" alt="logo"/>

<br/> 

<img style={{width:'600px',height:'400px'}} src={mongia} alt='imagee'/>
</div>
</div>
<div className='videoo'>
<video width="1500" height="240" controls>

<source src={video1} /> 

</video>
</div>
    </div>
  );

}
export default App;
