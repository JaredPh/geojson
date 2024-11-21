import { useState } from 'react';
import './App.css';
import MapView from './components/MapView';
import { FeatureCollection } from 'geojson';
import POSTCODES from './data';

function App() {
  const [postcodeData] = useState<[FeatureCollection, number][]>(POSTCODES.map(([postcode, count]) => [
    {
      "type": "FeatureCollection",
      "features": [postcode],
    } as FeatureCollection,
    count
  ]));
  const [totalCount] = useState<number>(POSTCODES.reduce((acc, [_, count]) => Math.max(acc, count), 0));

  return (
    <div className="App">
      <MapView postcodeData={postcodeData} totalCount={totalCount} />
    </div>
  );
}

export default App;