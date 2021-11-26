import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  return (
    <div>
      <p>{state.nama}</p>
      <img src={state.gambar}></img>
      <p>{state.pengertian}</p>
    </div>
  );
}