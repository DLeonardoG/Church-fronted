import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const churchIcon = L.icon({
  iconUrl: '/church.png', // ruta dentro de public
  iconSize: [32, 37], // tamaño del icono (ajusta según tu imagen)
  iconAnchor: [16, 37], // punto del icono que estará en la coordenada
  popupAnchor: [0, -28], // punto desde donde sale el popup
  shadowUrl: '/icons/marker-shadow.png', // opcional
  shadowSize: [41, 41],
});

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
          <Marker key={index} position={[iglesia.lat, iglesia.lng]} icon={churchIcon}>
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
