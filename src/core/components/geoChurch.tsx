import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Iglesia {
  name: string;
  lat: number;
  lng: number;
  direccion: string;
}

export const Map = () => {
  const [iglesias, setIglesias] = useState<Iglesia[]>([]);

  useEffect(() => {
    fetch('/data/church.json')
      .then((res) => res.json())
      .then((data) => {
        setIglesias(data.bga);
      })
      .catch((err) => console.error('Error cargando iglesias:', err));
  }, []);

  return (
    <div className="h-100 w-100 md:h-100 md:w-120 lg:w-150">
      <MapContainer center={[7.119, -73.119]} zoom={12.5} scrollWheelZoom={false} className="h-full w-full rounded-2xl">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {iglesias.map((iglesia, index) => (
          <Marker key={index} position={[iglesia.lat, iglesia.lng]}>
            <Popup>
              <strong>{iglesia.name}</strong>
              <br />
              Dirección: {iglesia.direccion}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
