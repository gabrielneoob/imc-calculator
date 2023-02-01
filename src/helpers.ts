export type imcHelper = {
  img: 'down' | 'up';
  title: 'Magreza' | 'Normal' | 'Sobrepeso' | 'Obesidade';
  imc: [number, number];
  imcValue?: number;
}

const Imc: imcHelper[] = [
  {img: "down", title: "Magreza", imc: [0, 18.5]},
  {img: "up", title: "Normal", imc: [18.5, 24.9]},
  {img: "down", title: "Sobrepeso", imc: [24.9, 30]},
  {img: "down", title: "Obesidade", imc: [30, 99]}
]

export {Imc}