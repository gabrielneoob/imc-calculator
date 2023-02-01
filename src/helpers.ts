export type imcHelper = {
  color: "#96a3ab" | "#0ead68" | "#e2b039" | "#c3423f"
  img: 'down' | 'up';
  title: 'Magreza' | 'Normal' | 'Sobrepeso' | 'Obesidade';
  imc: [number, number];
  imcValue?: number;
}

const Imc: imcHelper[] = [
  {color:"#96a3ab", img: "down", title: "Magreza", imc: [0, 18.5]},
  {color: "#0ead68", img: "up", title: "Normal", imc: [18.5, 24.9]},
  {color: "#e2b039", img: "down", title: "Sobrepeso", imc: [24.9, 30]},
  {color: "#c3423f",img: "down", title: "Obesidade", imc: [30, 99]}
]

export {Imc}