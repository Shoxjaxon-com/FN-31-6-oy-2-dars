import React from "react";
import Task from "./Componets/Task1";
import Task2 from "./Componets/Task2";
import cat from "./assets/cat.jpeg";
import fil from "./assets/fil.jpeg";
import sher from "./assets/sher.jpeg";
import qush from "./assets/qush.jpg";
import dog from "./assets/dog.webp";
import Task4 from "./Componets/Task4";
import Task5 from "./Componets/Task5";
import Task6 from "./Componets/Task6";
import Task8 from "./Componets/Task8";
import Task3 from "./Componets/Task3";
import Task7 from "./Componets/Task7";
function App() {
 
  return (
    <div>
      <Task
        uzb="Salom, Dunyo!"
        eng="Hello, World!"
        rus="Привет, Мир!"
        yapon="こんにちは、世界！"
      />

      <Task2 images={dog} title="Dog 🐶" />
      <Task2 images={cat} title="Cat 🐱" />
      <Task2 images={fil} title="Fil 🐘" />
      <Task2 images={sher} title="Sher 🦁" />
      <Task2 images={qush} title="Qush 🐦" />

          <Task3 />

      <Task4 
      name1 = 'Dushanba'
      name2 = 'Seshanba'
      name3 = 'Chorshanba'
      name4 = 'Payshanba'
      name5 = 'Juma'
      name6 = 'Shanba'
      name7 = 'Yakshanba'
      />

      <Task5
        matn = 'Tugilgan kuning bilan 🎉 '
      />   


      <Task6 
      parij ='Fransiya'
      tokiyo = 'Yaponiya'
      NyuYork = 'AQSH'
      london = 'Angliya'
      toshkent = 'O`zbekiston'
      />

        <Task7 />

      <Task8 
      home = 'Bosh sahifa'
      about ='Biz haqimizda'
      aloqa = 'Aloqa'
      yangliklar = 'Yangliklar'
      />

    </div>
  );
}

export default App;
