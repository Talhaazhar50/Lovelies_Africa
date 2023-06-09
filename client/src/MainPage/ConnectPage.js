//Dépendances
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

//Constantes
const ConnectPage = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
  const [message, setMessage] = useState("");

  //Redirection
  const navigate = useNavigate();

  //Appel d'action
  const dispatch = useDispatch();

 

  //Envoi des informations dans la BDD
  const submit = (e) => {
    
    e.preventDefault();
		axios
			.post("http://localhost:9000/connectPage", {
				email: values.email,
				password: values.pass,
			})
    // Gestion de la requête
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/account");
    })
    .catch((err) => console.error(err));
};
  

   

  return (
    <>
      <div className="terms">
        <img
          className="bandeau"
          src="../img/conception/bandeau.jpg"
          alt="bandeau"
        />
        <h1>Se connecter</h1>
        {/* Affichage du message */}
        <p>{message}</p>
      </div>

      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) =>
											setValues({ ...values, email: e.target.value })
										}/>
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })
            }
          />
        </div>
        <div>
        <button className="link" type="submit">
          Se connecter
        </button>
        </div>
        <div>
        <p>
          <a className="lien" href="/newAccountPage">
            Créer un compte
          </a>
        </p>
      </div>
      </form>

     
    </>
  );
};
export default ConnectPage;
