import React from "react";
import Deneme from "./Deneme";
import Header from "./Header";

function Siparis() {
  return (
    <section>
      <div>
        <Header />
        <h1>Position Absolute Acı Pizza</h1>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok aci
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayali buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <div>
        <Deneme />
      </div>
    </section>
  );
}

export default Siparis;
