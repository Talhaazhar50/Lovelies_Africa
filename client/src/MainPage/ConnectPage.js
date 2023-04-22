//Dépendances
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

//Constantes
const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Redirection
  const navigate = useNavigate();

  //Appel d'action
  const dispatch = useDispatch();

  //Gestion de la mise à jour des valeurs par l'event
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  //Envoi des informations dans la BDD
  const submit = () => {
    //Valeurs à recupérer dans la BDD
    let datas = {
      email: email,
      password: password,
    };

    // Gestion de la requête
    let req = new Request("http://localhost:9000/connectPage", {
      method: "post",
      //body natif à l'objet request
      body: JSON.stringify(datas),
      //Gestion des renvois des informations sous format json avec la propriété accept
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        //Renvoi des valeurs pour le retour de réponse des identifiants et ID
        if (response.reponse) {
          // Réponse = userLogin = true
          dispatch({
            type: "connect_users",
            id: response.id,
          });
          navigate("/account");
          //Ou réponse = userLogin = false => envoi d'un message d'erreur
        } else {
          setMessage(response.message);
        }
      });
  };

  return (
    <>
      <div>
        <h1>Se connecter</h1>
        {/* Affichage du message */}
        <p>{message}</p>
      </div>

      <form>
        <label htmlFor="email">Votre email</label>
        <input type="email" id="email" value={email} onChange={changeEmail} />

        <label htmlFor="password">Votre mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={changePassword}
        />

        <button className="btn" type="button" onClick={submit}>
          Se connecter
        </button>
      </form>

      <div>
        <p>
          <a href="/newAccountPage">Créer un compte</a>
        </p>
      </div>
    </>
  );
};
export default ConnectPage;
