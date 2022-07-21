import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Components/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"flex", flexWrap:"wrap",width:"90%",margin:"auto", justifyContent:"space-around",}}>
    <Card src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" Color="#f4acb7" days={4} view={53565} read="5" comment={432}/>
    <Card src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" Color="#ff9f1c" days={41} view={5355} read="59" comment={4392}/>
    <Card src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" Color="#f5e6e8" days={4} view={53565} read="5" comment={432}/>
    <Card src="https://media.istockphoto.com/photos/patan-picture-id637696304?k=20&m=637696304&s=612x612&w=0&h=GqmMtggU2LgHWcXPFNxMrZg9dtPzyrnl9ek5oARcI7Y=" Color="#aaa1c8" days={4} view={53565} read="5" comment={432}/>
    <Card src="https://thediplomat.com/wp-content/uploads/2022/04/sizes/td-story-s-2/thediplomat_2022-04-12-190537.jpg" Color="#ff69eb" days={47} view={4565} read="534" comment={4352}/>
    <Card src="https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc=" Color="#858ae3" days={235} view={5765} read="57" comment={32}/>
    <Card src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" Color="#00cecb" days={74} view={98565} read="578" comment={43982}/>
    <Card src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" Color="#f4acb7" days={4} view={53565} read="5" comment={432}/>
    <Card src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" Color="#f4acb7" days={4} view={53565} read="5" comment={432}/>
    <Card src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" Color="#f4acb7" days={4} view={53565} read="5" comment={432}/>
    </div>
  </React.StrictMode>
);


reportWebVitals();
