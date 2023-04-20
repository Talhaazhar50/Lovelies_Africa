// c'EST CE FORMULAIRE QUI PERMET DE MODIFIER L'UTILISATEUR

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const UserInfos = () => {
  //les states pour gérer le formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [message, setMessage] = useState("");

  //un state pour gérer l'état du formulaire (disabled ou non)
  const [dis, setDis] = useState(true);

  //les données issues du state global
  const { idUser } = useSelector((state) => state);

  //au chargement du composant, on va chercher les informations qui concernent l'utilisateur
  useEffect(() => {
    fetch("/api/getUser/" + idUser)
      .then((response) => response.json())
      .then((response) => {
        setName(response.nom);
        setFirstname(response.prenom);
        setEmail(response.email);
      });
  }, [idUser]);

  //fonction permettant la modification des valeurs contenues dans le formulaire
  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "firstname":
        setFirstname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };

  //envoi des modifications de données utilisateur
  const modifier = () => {
    setDis(!dis);

    if (dis === false) {
      //on envoie les modifications en bdd
      //envoi des données en POST
      let datas = {
        name: name,
        firstname: firstname,
        email: email,
        password: password,
        id: idUser,
      };

      let req = new Request("/usersupdate", {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      fetch(req)
        .then((response) => response.json())
        .then((response) => {
          setMessage("Les modifications ont bien été prises en compte");
        });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          value={name}
          disabled={dis}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="fistname"
          value={firstname}
          disabled={dis}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          disabled={dis}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Votre mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {/* si il y a un message alors on l'affiche*/}
      {message !== "" && <p>{message}</p>}
      <button type="button" onClick={modifier}>
        {dis === true ? "Modifier" : "Valider les modifications"}
      </button>
    </form>
  );
};

export default UserInfos;