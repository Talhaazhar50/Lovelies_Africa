//Dépendances
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FanPage = () => {
  const { id } = useParams();
  const [fans, setFans] = useState({});

  //Récupération de la route côté serveur
  useEffect(() => {
    fetch("/fans/" + id)
      .then((response) => response.json())
      .then((res) => {
        setFans(res);
      });
  }, [id]);

  return (
    <>
      <img
        className="bandeau"
        src="../img/conception/bandeau.jpg"
        alt="bandeau"
      />
      <section className="title terms">
        <h1>{fans.name}</h1>
      </section>
      <section className="detail">
        <div>
          <p>
            <strong>
              Nous distribuons nos produits auprès des professionnels notamment
              les comités d'entreprise, décorateurs et architectes, enseignes et
              commerces, grossistes et revendeurs physique et e-commerce.
              N'hésitez pas à nous contacter pour toute demande spécifique.
            </strong>
          </p>
          <img className="photos" src={"/img/" + fans.image} alt={fans.name} />
        </div>
        <div>
          <h3>
            <strong>{fans.price}€ HT</strong>
          </h3>
        </div>
      </section>

      <section className="detail">
        <p>{fans.description}</p>{" "}
      </section>
      <section className="features">
        <div>
          <h3>
            <i>&#9734;</i> Caractéristiques
          </h3>
          <p>Éventail à manches pliables</p>
          <p>Motifs à couleurs variés</p>
        </div>

        <div>
          <h3>
            <i>&#10004;</i> Dimensions
          </h3>
          <p>Dimensions éventail : </p>
          <p>Ouvert : 36 cm (L) x 28 cm (l)</p>
          <p>Fermé : 22 cm (L) x 6 cm (l)</p>
          <p>Dimensions pochette :</p>
          <p>25 Cm (L) x 10 cm (l)</p>
          <p>
            Les dimensions peuvent varier légèrement, chaque éventail étant une
            pièce unique fait-main.
          </p>
        </div>

        <div>
          <h3>
            <i>&#9825;</i> Matériaux
          </h3>
          <p>Tissu wax</p>
          <p>Simili cuir</p>
          <p>Bois</p>
          <p>
            Les couleurs réelles peuvent différer de celles affichées selon la
            résolution de votre écran.
          </p>
        </div>

        <div>
          <h3>
            <i>&#9745;</i> Dans le colis
          </h3>
          <p>un éventail</p>
          <p>une pochette protectrice</p>
        </div>
      </section>

      <section className="eventail">
        <div>
          <p>
            <strong>
              <i>&#9993;</i> Pour tout achat contactez nous à{" "}
              <a href="mailto:contact@lovelies.africa.com">
                contact@loveliesafrica.com
              </a>{" "}
              afin de recevoir le formulaire de pré-commande.
            </strong>
          </p>
        </div>
        <div>
          <img
            className="photos"
            src="../img/formulaire/form_buyer.jpg"
            alt=" infos acheteur formulaire de précommande"
          />
        </div>
        <div>
          <img
            className="photos"
            src="../img/formulaire/form_order.jpg"
            alt=" infos commande formulaire de précommande"
          />
        </div>
      </section>
    </>
  );
};

export default FanPage;
