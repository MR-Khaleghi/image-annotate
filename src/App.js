import React from 'react';
import ReactImageAnnotate from 'react-image-annotate';
import aks from './stackoverflow2.JPG';
// const App = () => (
//   <ReactImageAnnotate
//     selectedImage="https://example.com/image1.png"
//     taskDescription="# Draw region around each animal."
//     images={[{ src: { aks }, name: 'Image 1' }]}
//     regionClsList={['Dog', 'Cat']}
//     enabledTools={['create-box']}
//   />
// );

const App = () => (
  <ReactImageAnnotate
    labelImages
    regionClsList={['Alpha', 'Beta', 'Charlie', 'Delta']}
    regionTagList={['tag1', 'tag2', 'tag3']}
    images={[
      {
        src: 'https://placekitten.com/408/287',
        name: 'Image 1',
        regions: [],
      },
    ]}
  />
);
export default App;
