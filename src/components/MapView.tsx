import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FeatureCollection } from 'geojson';

interface MapViewProps {
  postcodeData?: [FeatureCollection, number][];
  totalCount: number;
}

const MapView: React.FC<MapViewProps> = ({ postcodeData, totalCount }) => {

  return (<>
    <MapContainer
      center={[51.54927, -0.188632]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {postcodeData && postcodeData.map(([geojson, count], index) =>
        <GeoJSON
          data={geojson}
          key={index}
          style={{
            fillOpacity: .6,
            fillColor: {
              1: "#A9D6E5",
              2: "#89C2D9",
              3: "#61A5C2",
              4: "#468FAF",
              5: "#2C7DA0",
              7: "#2A6F97",
              8: "#014F86",
              9: "#01497C",
              11: "#013A63",
              12: "#012A4A",
            }[count],
            stroke: true,
            color: "#000000",
            weight: 1,
          }}
        >
          <Tooltip sticky>
            Count: {count}
          </Tooltip>
        </GeoJSON>
      )}
    </MapContainer>
  </>
  );
};

export default MapView; 