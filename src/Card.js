import React from "react";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Title from "./components/texts/title";
import Subtitle from "./components/texts/subtitle";
import Text from "./components/texts/text";

function Card() {
  return (
    <>
      <Navbar />
      <Header />
      <Title title="Soy un titulo" />
      <Subtitle subtitle="soy un subtitulo" />
      <Text
        text="Cuenta la historia que en aquel pasado
tiempo en que sucedieron tantas cosas
reales, imaginarias y dudosas,
un hombre concibió el desmesuradoproyecto de cifrar el universo
en un libro y con ímpetu infinito
erigió el alto y arduo manuscrito
y limó y declamó el último verso.Gracias iba a rendir a la fortuna
cuando al alzar los ojos vio un bruñido
disco en el aire y comprendió, aturdido,
que se había olvidado de la luna.La historia que he narrado aunque fingida,
bien puede figurar el maleficio
de cuantos ejercemos el oficio
de cambiar en palabras nuestra vida.Siempre se pierde lo esencial. Es una
ley de toda palabra sobre el numen.
No la sabrá eludir este resumen
de mi largo comercio con la luna.No sé dónde la vi por vez primera,
si en el cielo anterior de la doctrina
del griego o en la tarde que declina
sobre el patio del pozo y de la higuera. "
      />
      <Text text="puede, entre tantas cosas, ser muy bella
y hubo así alguna tarde en que con ella
te miramos, oh luna compartidapuede, entre tantas cosas, ser muy bella
y hubo así alguna tarde en que con ella
te miramos, oh luna compartidapuede, entre tantas cosas, ser muy bella
y hubo así alguna tarde en que con ella
te miramos, oh luna compartida" />
    </>
  );
}

export default Card;
